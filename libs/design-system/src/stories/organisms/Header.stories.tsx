import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@design-system/src/components/organisms';
const meta: Meta<typeof Header> = {
    title: 'Components/Organisms/Header',
    component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: () => <Header />
};

export const CartButtonEventHandling: Story = {
    render: () => <Header />
};
