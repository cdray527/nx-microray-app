import type { Meta, StoryObj } from '@storybook/react';
import Header from '@design-system/components/molecules/Header'; // Ensure the path is correct

const meta: Meta<typeof Header> = {
    title: 'Components/Molecules/Header', // Updated title path
    component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

// Basic Header story
export const Default: Story = {
    render: () => <Header />
};
