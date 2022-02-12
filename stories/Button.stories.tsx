import React from 'react';
import { Button, ButtonProps } from '@space-travel-design-system/ui';
import { Meta, Story } from '@storybook/react';
import { roll } from '@space-travel-design-system/utils';
import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';

export default {
  title: 'Example/Button',
  component: Button,
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  children: roll('1d20'),
};
