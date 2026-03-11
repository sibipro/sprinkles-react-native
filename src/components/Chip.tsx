import React from 'react';
import { View, Pressable, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export interface ChipProps extends ViewProps {
  label: string;
  onDismiss?: () => void;
  className?: string;
}

export function Chip({ label, onDismiss, className, ...props }: ChipProps) {
  return (
    <View
      className={cn(
        'h-7 rounded-full bg-background-tertiary px-2.5 flex-row items-center gap-1',
        className,
      )}
      {...props}
    >
      <Text size="sm" className="text-foreground">
        {label}
      </Text>
      {onDismiss && (
        <Pressable
          onPress={onDismiss}
          className="ml-0.5"
          accessibilityRole="button"
          accessibilityLabel={`Remove ${label}`}
        >
          <Text size="sm" className="text-foreground-label">
            ✕
          </Text>
        </Pressable>
      )}
    </View>
  );
}
