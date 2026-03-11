import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Text,
  Badge,
  Button,
  Input,
  InputWithExtras,
  InputWithLabel,
  Card,
  Banner,
  Separator,
  Skeleton,
  ProgressBar,
  Chip,
  EmptyState,
  Avatar,
  Switch,
  Checkbox,
  Label,
} from '@sibipro/sprinkles-native';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-3">
      <Text variant="heading" size="lg">
        {title}
      </Text>
      {children}
      <Separator className="mt-2" />
    </View>
  );
}

export default function KitchenSink() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(65);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 gap-6 pb-20">

        {/* Text */}
        <Section title="Text">
          <Text variant="heading" size="2xl">Heading 2XL</Text>
          <Text variant="heading">Heading Default</Text>
          <Text variant="body">Body text — the quick brown fox jumps over the lazy dog.</Text>
          <Text variant="label">Label text</Text>
          <Text variant="caption">Caption text</Text>
          <View className="flex-row gap-2">
            <Text weight="normal">Normal</Text>
            <Text weight="medium">Medium</Text>
            <Text weight="semibold">Semibold</Text>
            <Text weight="bold">Bold</Text>
          </View>
        </Section>

        {/* Buttons */}
        <Section title="Button">
          <View className="flex-row flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </View>
          <View className="flex-row flex-wrap gap-2">
            <Button variant="tertiary-brand">Tertiary Brand</Button>
            <Button variant="tertiary-danger">Tertiary Danger</Button>
          </View>
          <View className="flex-row gap-2">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </View>
          <Button variant="primary" disabled>Disabled</Button>
        </Section>

        {/* Badge */}
        <Section title="Badge">
          <View className="flex-row flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warn">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
          </View>
        </Section>

        {/* Input */}
        <Section title="Input">
          <Input
            placeholder="Default input"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Input variant="search" placeholder="Search variant" />
          <Input variant="ghost" placeholder="Ghost variant" />
          <Input error placeholder="Error state" />
          <View className="flex-row gap-2">
            <Input girth="sm" placeholder="Small" className="flex-1" />
            <Input girth="md" placeholder="Medium" className="flex-1" />
            <Input girth="lg" placeholder="Large" className="flex-1" />
          </View>
          <InputWithLabel
            label="Email"
            placeholder="you@example.com"
            description="We'll never share your email."
          />
          <InputWithLabel
            label="Password"
            placeholder="Enter password"
            errorMessage="Password is required"
          />
        </Section>

        {/* Card */}
        <Section title="Card">
          <Card>
            <Text variant="heading">Default Card</Text>
            <Text>Card content with shadow.</Text>
          </Card>
          <Card variant="outline">
            <Text variant="heading">Outline Card</Text>
            <Text>Card content with border.</Text>
          </Card>
        </Section>

        {/* Banner */}
        <Section title="Banner">
          <Banner variant="info">
            <Text className="text-info-700 flex-1">This is an info banner.</Text>
          </Banner>
          <Banner variant="success">
            <Text className="text-success-700 flex-1">This is a success banner.</Text>
          </Banner>
          <Banner variant="warn">
            <Text className="text-warn-700 flex-1">This is a warning banner.</Text>
          </Banner>
          <Banner variant="danger">
            <Text className="text-danger-700 flex-1">This is a danger banner.</Text>
          </Banner>
        </Section>

        {/* Avatar */}
        <Section title="Avatar">
          <View className="flex-row items-center gap-3">
            <Avatar name="Aaron Smith" size="sm" />
            <Avatar name="Aaron Smith" size="md" />
            <Avatar name="Chester Williams" size="lg" />
            <Avatar name="Sarah Johnson" size="xl" />
          </View>
        </Section>

        {/* Chip */}
        <Section title="Chip">
          <View className="flex-row flex-wrap gap-2">
            <Chip label="React Native" />
            <Chip label="TypeScript" />
            <Chip label="Dismissible" onDismiss={() => {}} />
          </View>
        </Section>

        {/* Switch & Checkbox */}
        <Section title="Switch & Checkbox">
          <View className="flex-row items-center gap-3">
            <Label>Dark mode</Label>
            <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
          </View>
          <Checkbox
            label="I agree to the terms"
            checked={checkboxValue}
            onCheckedChange={setCheckboxValue}
          />
        </Section>

        {/* Separator */}
        <Section title="Separator">
          <Text>Content above</Text>
          <Separator />
          <Text>Content below</Text>
          <View className="flex-row items-center gap-3 h-6">
            <Text>Left</Text>
            <Separator orientation="vertical" />
            <Text>Right</Text>
          </View>
        </Section>

        {/* Progress Bar */}
        <Section title="Progress Bar">
          <ProgressBar value={progress} />
          <View className="flex-row gap-2">
            <Button
              variant="secondary"
              size="sm"
              onPress={() => setProgress(Math.max(0, progress - 10))}
            >
              -10
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onPress={() => setProgress(Math.min(100, progress + 10))}
            >
              +10
            </Button>
          </View>
        </Section>

        {/* Skeleton */}
        <Section title="Skeleton">
          <View className="gap-2">
            <Skeleton style={{ height: 16, width: '75%' }} />
            <Skeleton style={{ height: 16, width: '50%' }} />
            <Skeleton style={{ height: 48, width: '100%', borderRadius: 12 }} />
          </View>
        </Section>

        {/* Empty State */}
        <Section title="Empty State">
          <EmptyState
            title="No results found"
            description="Try adjusting your search or filters."
            action={
              <Button variant="primary" size="sm">
                Clear filters
              </Button>
            }
          />
        </Section>

      </View>
    </ScrollView>
  );
}
