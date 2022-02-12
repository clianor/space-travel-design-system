import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Typography from './components/Typography';

export default {
  title: 'Design System/02 - Typography',
  component: Typography,
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

const Template: Story = () => <Typography />;

export const Default = Template.bind({});
Default.args = {};
