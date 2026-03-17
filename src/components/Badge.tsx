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
  brand: 'bg-brand-50 dark:bg-brand-900',
  danger: 'bg-danger-50 dark:bg-danger-900',
  success: 'bg-success-50 dark:bg-success-900',
  warn: 'bg-warn-50 dark:bg-warn-900',
  info: 'bg-info-50 dark:bg-info-900',
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
        'rounded-lg py-1.5 px-2.5 flex-row items-center gap-1.5',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text
          size="xs"
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
