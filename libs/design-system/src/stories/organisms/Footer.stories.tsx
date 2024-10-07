import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@design-system/src/components/organisms'; // Ensure the path is correct

const meta: Meta<typeof Footer> = {
    title: 'Components/Organisms/Footer',
    component: Footer
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Basic Footer story
export const Default: Story = {
    render: () => <Footer />
};
