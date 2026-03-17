import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';

export type BannerVariant = 'info' | 'warn' | 'danger' | 'success';

const variantClasses: Record<BannerVariant, string> = {
  info: 'bg-info-50 dark:bg-info-900',
  warn: 'bg-warn-50 dark:bg-warn-900',
  danger: 'bg-danger-50 dark:bg-danger-900',
  success: 'bg-success-50 dark:bg-success-900',
};

export interface BannerProps extends ViewProps {
  variant?: BannerVariant;
  className?: string;
}

export function Banner({
  variant = 'info',
  className,
  ...props
}: BannerProps) {
  return (
    <View
      className={cn(
        'rounded-2xl p-4 flex-row items-start gap-2.5',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
