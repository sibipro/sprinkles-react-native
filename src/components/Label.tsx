import React from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { cn } from '../utils/cn';

export interface LabelProps extends TextProps {
  className?: string;
}

export function Label({ className, ...props }: LabelProps) {
  return (
    <RNText
      className={cn('text-sm font-semibold text-foreground', className)}
      {...props}
    />
  );
}
