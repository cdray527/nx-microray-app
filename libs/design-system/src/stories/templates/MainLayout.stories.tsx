import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from '@design-system/components/templates';
import { RecoilRoot } from 'recoil';

const meta: Meta<typeof MainLayout> = {
    title: 'Components/Templates/MainLayout',
    component: MainLayout,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <RecoilRoot>
                <div className="h-screen">
                    <Story />
                </div>
            </RecoilRoot>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

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
