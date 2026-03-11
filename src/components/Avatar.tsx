import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const textSizeClasses: Record<AvatarSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-xl',
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '';
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export interface AvatarProps extends ViewProps {
  name: string;
  size?: AvatarSize;
  className?: string;
}

export function Avatar({
  name,
  size = 'md',
  className,
  ...props
}: AvatarProps) {
  const initials = getInitials(name);

  return (
    <View
      className={cn(
        'rounded-full bg-brand-100 items-center justify-center',
        sizeClasses[size],
        className,
      )}
      accessibilityRole="image"
      accessibilityLabel={name}
      {...props}
    >
      <Text weight="semibold" className={cn('text-brand-700', textSizeClasses[size])}>
        {initials}
      </Text>
    </View>
  );
}
