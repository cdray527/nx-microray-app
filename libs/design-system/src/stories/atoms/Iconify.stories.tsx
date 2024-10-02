import type { Meta, StoryObj } from '@storybook/react';
import { Iconify } from '@design-system/components/atoms/Iconify'; // Ensure the path is correct
import { IconProps } from '@iconify/react';

const meta: Meta<typeof Iconify> = {
    title: 'Components/Atoms/Iconify', // Updated title path
    component: Iconify,
    argTypes: {
        icon: { control: 'text', description: 'Iconify icon name or SVG data.' },
        width: { control: 'number', description: 'Width and height of the icon in pixels.' }
    },
    parameters: {
        docs: {
            description: {
                component: `
### Iconify Icons

You can find a wide variety of icons to use with Iconify from their library:
[Iconify Icon Library](https://icon-sets.iconify.design/)

Just copy the desired icon's name (e.g., \`mdi:home\`) and pass it as the \`icon\` prop.
        `
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Iconify>;

// Default Icon story
export const Default: Story = {
    args: {
        icon: 'mdi:home', // Example icon from Iconify (Material Design Home Icon)
        width: 24
    }
};

// Another example story with different icon
export const AccountIcon: Story = {
    args: {
        icon: 'mdi:account', // Another Material Design icon (Account Icon)
        width: 24
    }
};

// Example with a larger icon
export const LargeIcon: Story = {
    args: {
        icon: 'mdi:star', // Example star icon
        width: 48
    }
};
