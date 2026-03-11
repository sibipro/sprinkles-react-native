# @sibipro/sprinkles-native

A React Native component library with Tailwind-style theming via [Uniwind](https://github.com/nickshanks347/uniwind).

## Install

```bash
pnpm add @sibipro/sprinkles-native
```

Peer dependencies: `react >= 18`, `react-native >= 0.74`, and optionally `uniwind >= 1.0.0`.

## Components

### Layout & Containers

- **Card** — `variant: "default" | "outline"`
- **Banner** — `variant: "info" | "warn" | "danger" | "success"`
- **Separator** — horizontal or vertical divider
- **EmptyState** — centered placeholder with title, description, icon, and action slot

### Text & Typography

- **Text** — `variant: "body" | "caption" | "label" | "heading"`, `size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `weight: "normal" | "medium" | "semibold" | "bold"`

### Form Controls

- **Input** — `variant: "default" | "search" | "ghost"`, `girth: "sm" | "md" | "lg"`
- **InputWithExtras** — Input with leading/trailing adornments
- **InputWithLabel** — Input with an attached label
- **Checkbox** — custom checkbox with label and disabled state
- **Switch** — toggle with `checked` / `onCheckedChange`
- **Label** — semantic label wrapper

### Buttons & Actions

- **Button** — `variant: "primary" | "secondary" | "tertiary" | "tertiary-brand" | "tertiary-danger" | "danger" | "ghost" | "link"`, `size: "sm" | "md" | "lg"`
- **Chip** — dismissible chip with optional `onDismiss`

### Data Display

- **Badge** — `variant: "default" | "brand" | "danger" | "success" | "warn" | "info" | "outline"`
- **Avatar** — auto-generates initials from `name`, `size: "sm" | "md" | "lg" | "xl"`
- **ProgressBar** — `value` / `max` progress indicator
- **Skeleton** — animated loading placeholder

## Usage

```tsx
import { Button, Card, Text, Badge } from "@sibipro/sprinkles-native"

const Example = () => (
  <Card variant="outline">
    <Text variant="heading" size="lg">Order #1234</Text>
    <Badge variant="success">Delivered</Badge>
    <Button variant="primary" size="md" onPress={() => {}}>
      View Details
    </Button>
  </Card>
)
```

All components accept a `className` prop for Tailwind-style overrides (requires Uniwind):

```tsx
<Button className="mt-4 w-full" variant="primary">Submit</Button>
```

## Theming

Import the global stylesheet in your app entry:

```tsx
import "@sibipro/sprinkles-native/styles.css"
```

This provides color tokens, font definitions, and light/dark mode support via CSS custom properties.

### Color Palettes

| Palette   | Usage                          |
|-----------|--------------------------------|
| Neutral   | Backgrounds, borders, text     |
| Purple    | Brand / primary actions        |
| Emerald   | Success states                 |
| Amber     | Warnings                       |
| Blue      | Informational                  |
| Magenta   | Danger / destructive actions   |

## Development

```bash
pnpm install
pnpm build        # compile TypeScript to dist/
pnpm test         # type-check with tsc --noEmit
pnpm release      # bump patch, tag, and push
```

### Kitchen Sink

An Expo app lives in `kitchen-sink/` for previewing components during development.
