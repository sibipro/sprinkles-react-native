import React, { useRef } from 'react';
import {
  TextInput,
  View,
  Pressable,
  type TextInputProps,
  type ViewProps,
} from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export type InputVariant = 'default' | 'search' | 'ghost';
export type InputGirth = 'sm' | 'md' | 'lg';

const variantClasses: Record<InputVariant, string> = {
  default: 'border border-border bg-background',
  search: 'border-0 bg-background-secondary',
  ghost: 'border-0 bg-transparent',
};

const girthClasses: Record<InputGirth, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'min-h-[48px] py-3',
};

export interface InputProps extends TextInputProps {
  variant?: InputVariant;
  girth?: InputGirth;
  error?: boolean;
  className?: string;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ variant = 'default', girth = 'md', error, className, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          'w-full rounded-xl px-4 text-base text-foreground',
          variantClasses[variant],
          girthClasses[girth],
          error && 'border-2 border-danger-500',
          props.editable === false && 'opacity-60',
          className,
        )}
        {...props}
      />
    );
  },
);

export interface InputWithExtrasProps extends InputProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  containerClassName?: string;
}

export const InputWithExtras = React.forwardRef<TextInput, InputWithExtrasProps>(
  ({ before, after, containerClassName, variant = 'default', girth = 'md', error, className, ...props }, ref) => {
    const innerRef = useRef<TextInput>(null);
    const inputRef = (ref as React.RefObject<TextInput>) ?? innerRef;

    return (
      <Pressable onPress={() => inputRef.current?.focus()}>
        <View
          className={cn(
            'flex-row items-center gap-1',
            variantClasses[variant],
            girthClasses[girth],
            'rounded-xl px-4',
            error && 'border-2 border-danger-500',
            containerClassName,
          )}
        >
          {before}
          <Input
            ref={inputRef}
            variant="ghost"
            girth={girth}
            className={cn('flex-1 h-full px-0', className)}
            {...props}
          />
          {after}
        </View>
      </Pressable>
    );
  },
);

export interface InputWithLabelProps extends InputProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  containerClassName?: string;
}

export const InputWithLabel = React.forwardRef<TextInput, InputWithLabelProps>(
  ({ label, description, errorMessage, containerClassName, error, ...props }, ref) => {
    const hasError = error || !!errorMessage;

    return (
      <View className={cn('gap-1 w-full', containerClassName)}>
        {label && (
          <Text size="sm" weight="semibold" className="text-foreground">
            {label}
          </Text>
        )}
        <Input ref={ref} error={hasError} {...props} />
        {description && !errorMessage && (
          <Text size="xs" className="text-foreground-label">
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text size="xs" weight="semibold" className="text-danger-700">
            {errorMessage}
          </Text>
        )}
      </View>
    );
  },
);
