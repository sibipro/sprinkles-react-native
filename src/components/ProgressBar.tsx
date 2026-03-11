import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';

export interface ProgressBarProps extends ViewProps {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <View
      className={cn('h-2 w-full rounded-full bg-background-tertiary', className)}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max, now: value }}
      {...props}
    >
      <View
        className="h-full rounded-full bg-brand-500"
        style={{ width: `${percentage}%` }}
      />
    </View>
  );
}
