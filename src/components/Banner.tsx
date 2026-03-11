import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';

export type BannerVariant = 'info' | 'warn' | 'danger' | 'success';

const variantClasses: Record<BannerVariant, string> = {
  info: 'bg-info-25 border-info-300',
  warn: 'bg-warn-25 border-warn-300',
  danger: 'bg-danger-25 border-danger-300',
  success: 'bg-success-25 border-success-300',
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
        'rounded-lg border p-3 flex-row items-start gap-2',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
