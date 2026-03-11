import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-brand'
  | 'tertiary-danger'
  | 'danger'
  | 'ghost'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-button-primary',
  secondary: 'bg-button-secondary border border-border',
  tertiary: 'bg-transparent',
  'tertiary-brand': 'bg-transparent',
  'tertiary-danger': 'bg-transparent',
  danger: 'bg-danger-500',
  ghost: 'bg-transparent',
  link: 'bg-transparent',
};

const pressedClasses: Record<ButtonVariant, string> = {
  primary: 'bg-button-primary-hover',
  secondary: 'bg-button-secondary-hover',
  tertiary: 'bg-button-tertiary-hover',
  'tertiary-brand': 'bg-brand-25',
  'tertiary-danger': 'bg-danger-25',
  danger: 'bg-danger-600',
  ghost: 'bg-accent',
  link: 'opacity-70',
};

const textClasses: Record<ButtonVariant, string> = {
  primary: 'text-button-primary-foreground',
  secondary: 'text-button-secondary-foreground',
  tertiary: 'text-button-tertiary-foreground',
  'tertiary-brand': 'text-brand-500',
  'tertiary-danger': 'text-danger-500',
  danger: 'text-white',
  ghost: 'text-foreground',
  link: 'text-brand-500 underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-5',
};

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={({ pressed }) =>
        cn(
          'rounded-lg flex-row items-center justify-center gap-2',
          variantClasses[variant],
          sizeClasses[size],
          pressed && pressedClasses[variant],
          disabled && 'opacity-50',
          className,
        )
      }
      disabled={disabled}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text size="sm" weight="bold" className={textClasses[variant]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
