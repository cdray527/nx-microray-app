// Import necessary types and components
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@design-system/components/atoms'; // Adjust the import path as necessary

// Meta configuration for the Badge component
const meta: Meta<typeof Badge> = {
    title: 'Components/Atoms/Badge',
    component: Badge
};

// Export the meta object
export default meta;

// Define the type for the stories
type Story = StoryObj<typeof Badge>;

// Default Badge story
export const Default: Story = {
    render: (args) => <Badge {...args}>Default Badge</Badge>,
    args: {
        variant: 'default'
    }
};

// Secondary Badge story
export const Secondary: Story = {
    render: (args) => <Badge {...args}>Secondary Badge</Badge>,
    args: {
        variant: 'secondary'
    }
};

// Destructive Badge story
export const Destructive: Story = {
    render: (args) => <Badge {...args}>Destructive Badge</Badge>,
    args: {
        variant: 'destructive'
    }
};

// Outline Badge story
export const Outline: Story = {
    render: (args) => <Badge {...args}>Outline Badge</Badge>,
    args: {
        variant: 'outline'
    }
};

// Custom ClassName Badge story
export const CustomClassName: Story = {
    render: (args) => <Badge {...args}>Custom Class Badge</Badge>,
    args: {
        variant: 'default',
        className: 'bg-blue-500 text-white' // Example of custom styling
    }
};
