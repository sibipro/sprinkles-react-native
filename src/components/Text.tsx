import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { cn } from '../utils/cn';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

const variantClasses: Record<TextVariant, string> = {
  body: 'text-base text-foreground',
  caption: 'text-xs text-foreground-label',
  label: 'text-sm text-foreground-label',
  heading: 'text-lg font-bold text-foreground-heading',
};

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
}

export function Text({
  variant = 'body',
  size,
  weight,
  className,
  ...props
}: TextProps) {
  return (
    <RNText
      className={cn(
        variantClasses[variant],
        size && sizeClasses[size],
        weight && weightClasses[weight],
        className,
      )}
      {...props}
    />
  );
}
