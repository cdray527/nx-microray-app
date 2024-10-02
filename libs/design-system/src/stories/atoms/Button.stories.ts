import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@design-system/components/atoms';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        icon: {
            control: 'text',
            description: 'Icon from URL or Iconify',
        },
        iconPosition: {
            control: {
                type: 'radio',
                options: ['left', 'right'],
            },
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button stories
export const Primary: Story = {
  args: {
    label: 'Primary Button (Default)',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

// New stories with icons
export const WithIcon: Story = {
  args: {
    label: 'Button with Icon (Left)',
    icon: 'mdi:home', // Example Iconify icon
    iconPosition: 'left',
  },
};
