import React from 'react';
import { Meta, Story } from '@storybook/react';
import Colors from './components/Colors';
import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';

export default {
  title: 'Design System/01 - Colors',
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

const Template: Story = () => <Colors />;

export const Default = Template.bind({});
Default.args = {};
