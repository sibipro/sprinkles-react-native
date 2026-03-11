import React from 'react';
import {
  Switch as RNSwitch,
  type SwitchProps as RNSwitchProps,
} from 'react-native';
import { palettes } from '../theming/color-palettes';

export interface SwitchProps extends RNSwitchProps {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

export function Switch({
  checked,
  onCheckedChange,
  value,
  onValueChange,
  ...props
}: SwitchProps) {
  return (
    <RNSwitch
      value={checked ?? value}
      onValueChange={onCheckedChange ?? onValueChange}
      trackColor={{
        false: palettes.neutral[300],
        true: palettes.purple[500],
      }}
      thumbColor={palettes.white}
      {...props}
    />
  );
}
