import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Colors from './components/Colors';
import InteractiveElements from './components/InteractiveElements';
import Typography from './components/Typography';

export default {
  title: 'Design System/00 - DesignSystem',
  component: Colors,
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as Meta;

const Template: Story = () => (
  <>
    <Colors />
    <Typography />
    <InteractiveElements />
  </>
);

export const Default = Template.bind({});
Default.args = {};
