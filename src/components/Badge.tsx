import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export type BadgeVariant =
  | 'default'
  | 'brand'
  | 'danger'
  | 'success'
  | 'warn'
  | 'info'
  | 'outline';

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-background-tertiary',
  brand: 'bg-brand-25',
  danger: 'bg-danger-25',
  success: 'bg-success-25',
  warn: 'bg-warn-25',
  info: 'bg-info-25',
  outline: 'border border-border',
};

const textClasses: Record<BadgeVariant, string> = {
  default: 'text-foreground',
  brand: 'text-brand-700',
  danger: 'text-danger-700',
  success: 'text-success-700',
  warn: 'text-warn-700',
  info: 'text-info-700',
  outline: 'text-foreground',
};

export interface BadgeProps extends ViewProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <View
      className={cn(
        'h-6 rounded-full px-2.5 flex-row items-center gap-1',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text
          size="sm"
          weight="semibold"
          className={textClasses[variant]}
          numberOfLines={1}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
