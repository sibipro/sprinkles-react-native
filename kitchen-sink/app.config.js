module.exports = {
  name: 'Sprinkles Kitchen Sink',
  slug: 'sprinkles-kitchen-sink',
  version: '1.0.0',
  scheme: 'sprinkles-kitchen-sink',
  platforms: ['ios', 'android'],
  ios: {
    bundleIdentifier: 'com.sibipro.sprinkles.kitchensink',
  },
  android: {
    package: 'com.sibipro.sprinkles.kitchensink',
  },
  plugins: ['expo-router'],
};
