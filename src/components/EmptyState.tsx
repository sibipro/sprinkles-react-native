import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './Text';

export interface EmptyStateProps extends ViewProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <View
      className={cn('items-center py-12 px-4 gap-3', className)}
      {...props}
    >
      {icon}
      <View className="items-center gap-1">
        <Text variant="heading" className="text-center">
          {title}
        </Text>
        {description && (
          <Text className="text-foreground-label text-center">
            {description}
          </Text>
        )}
      </View>
      {action}
    </View>
  );
}
