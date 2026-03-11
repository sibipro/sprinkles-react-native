import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';

export type CardVariant = 'default' | 'outline';

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-background shadow-md',
  outline: 'bg-background border border-border',
};

export interface CardProps extends ViewProps {
  variant?: CardVariant;
  className?: string;
}

export function Card({
  variant = 'default',
  className,
  ...props
}: CardProps) {
  return (
    <View
      className={cn('rounded-xl p-4', variantClasses[variant], className)}
      {...props}
    />
  );
}
