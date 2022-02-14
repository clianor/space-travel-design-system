import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import InteractiveElements from './components/InteractiveElements';

export default {
  title: 'Design System/03 - Interactive Elements',
  component: InteractiveElements,
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

const Template: Story = () => <InteractiveElements />;

export const Default = Template.bind({});
Default.args = {};
