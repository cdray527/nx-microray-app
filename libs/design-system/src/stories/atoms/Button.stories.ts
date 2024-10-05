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
                options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['default', 'sm', 'lg', 'icon'],
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
export const Default: Story = {
  args: {
    label: 'Default Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link Button',
  },
};

// Button size stories
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
};

// Button with icon stories
export const WithIcon: Story = {
  args: {
    label: 'Button with Icon (Left)',
    icon: 'mdi:home', // Example Iconify icon
    iconPosition: 'left',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    icon: 'mdi:home', // Example Iconify icon
    'aria-label': 'Icon only button',
  },
};