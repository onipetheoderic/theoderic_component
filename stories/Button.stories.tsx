import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text For Button',
    },
  },
  decorators: [jsxDecorator],
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
  title: 'secondary Button',
  children: 'I am secondary',
  onClick: action('secondary click'),
  variant: 'secondary',
};
