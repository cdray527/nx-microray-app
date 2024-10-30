// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Iconify } from '@design-system/components/atoms';

const meta: Meta<typeof Button> = {
    title: 'Components/Atoms/Button',
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
    render: () => (
        <Button variant="default" size="default">
            Default Button
        </Button>
    )
};

export const EventHandling: Story = {
    render: () => (
        <Button asChild>
            <a
                href="#"
                onClick={(event) => {
                    event.preventDefault();
                    console.log('');
                }}
            >
                OnClick Button
            </a>
        </Button>
    )
};

export const IconOnlyButton: Story = {
    render: () => (
        <Button variant="default" size="icon">
            <Iconify icon="mdi:star" />
        </Button>
    )
};
