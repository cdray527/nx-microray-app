import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from '@design-system/components/templates'; // Make sure this points to the right file

// Meta configuration for the MainLayout component
const meta: Meta<typeof MainLayout> = {
    title: 'Components/Templates/MainLayout',
    component: MainLayout,
    decorators: [
        (Story) => (
            <div className="h-screen">
                <Story />
            </div>
        )
    ]
};

// Export the meta object
export default meta;
type Story = StoryObj<typeof MainLayout>;

// Default story for the MainLayout
export const Default: Story = {
    render: (args) => (
        <MainLayout {...args}>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Main Content</h1>
                <p>This is the main content area inside the MainLayout component.</p>
            </div>
        </MainLayout>
    )
};
