import type { Meta, StoryObj } from '@storybook/react';
import Header from '@design-system/src/components/organisms/Header'; // Ensure the path is correct

const meta: Meta<typeof Header> = {
    title: 'Components/Organisms/Header', // Updated title path
    component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

// Basic Header story
export const Default: Story = {
    render: () => <Header />
};
