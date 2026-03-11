/**
 * Augment React Native component props with className support.
 * At build time, uniwind resolves className to style objects via its metro plugin.
 * This declaration ensures TypeScript accepts className on RN primitives
 * even when building this library without a metro/uniwind context.
 */
import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }
  interface PressableProps {
    className?: string | ((state: { pressed: boolean }) => string);
  }
  interface ImageProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
  }
  interface FlatListProps<ItemT> {
    className?: string;
  }
}
