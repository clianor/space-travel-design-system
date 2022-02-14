import { AnchorProps, Button } from '@space-travel-design-system/ui';
import GlobalStyle from '@space-travel-design-system/ui/GlobalStyle/GlobalStyle';
import { roll } from '@space-travel-design-system/utils';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Example/Anchor',
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

const Template: Story<AnchorProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  children: roll('1d20'),
};
