// Importing necessary types and components
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@design-system/components/atoms'; // Adjust the import path as necessary

// Meta configuration for the Alert component
const meta: Meta<typeof Alert> = {
    title: 'Components/Atoms/Alert',
    component: Alert
};

// Export the meta object
export default meta;

// Define the type for the stories
type Story = StoryObj<typeof Alert>;

// Default Alert story
export const Default: Story = {
    render: (args) => (
        <Alert {...args}>
            <AlertTitle>This is an alert title</AlertTitle>
            <AlertDescription>
                This is an alert description providing more details.
            </AlertDescription>
        </Alert>
    ),
    args: {
        variant: 'default'
    }
};

// Destructive Alert story
export const Destructive: Story = {
    render: (args) => (
        <Alert {...args}>
            <AlertTitle>This is a destructive alert title</AlertTitle>
            <AlertDescription>This alert indicates a significant action.</AlertDescription>
        </Alert>
    ),
    args: {
        variant: 'destructive'
    }
};

// Alert with Custom Class Name story
export const CustomClassName: Story = {
    render: (args) => (
        <Alert {...args}>
            <AlertTitle>This alert has a custom class name</AlertTitle>
            <AlertDescription>Additional details about this alert.</AlertDescription>
        </Alert>
    ),
    args: {
        variant: 'default',
        className: 'bg-blue-500 text-white' // Example of custom styling
    }
};

// Alert without Title or Description story
export const NoTitleDescription: Story = {
    render: (args) => (
        <Alert {...args}>
            <div>Alert without title or description.</div>
        </Alert>
    ),
    args: {
        variant: 'default'
    }
};
