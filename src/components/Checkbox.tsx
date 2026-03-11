import React from 'react';
import { Pressable, View } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled,
  label,
  className,
}: CheckboxProps) {
  return (
    <Pressable
      onPress={() => !disabled && onCheckedChange?.(!checked)}
      className={cn('flex-row items-center gap-2', disabled && 'opacity-50', className)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <View
        className={cn(
          'h-5 w-5 rounded border items-center justify-center',
          checked
            ? 'bg-brand-500 border-brand-500'
            : 'bg-background border-border',
        )}
      >
        {checked && (
          <Text className="text-white text-xs">✓</Text>
        )}
      </View>
      {label && <Text className="text-foreground">{label}</Text>}
    </Pressable>
  );
}
