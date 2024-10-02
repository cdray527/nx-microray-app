import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from '@design-system/components/molecules/SidebarMenu'; // Ensure the path is correct
import { Button } from '@design-system/components/atoms'; // Import Button if used in the stories

const meta: Meta<typeof SidebarMenu> = {
    title: 'Components/Molecules/SidebarMenu', // Updated title path
    component: SidebarMenu
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

// Basic SidebarMenu story
export const Default: Story = {
    render: () => (
        <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
            <div>Default Content</div>
        </SidebarMenu>
    )
};

// SidebarMenu with a close button
export const WithCloseButton: Story = {
    render: () => (
        <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
            <Button onClick={() => console.log('Button Clicked')}>Close Menu</Button>
            <div>Content with Close Button</div>
        </SidebarMenu>
    )
};

// SidebarMenu closed by default
export const ClosedByDefault: Story = {
    render: () => (
        <SidebarMenu isOpen={false} side="left" onClose={() => console.log('Closed')}>
            <div>Closed by Default Content</div>
        </SidebarMenu>
    )
};

// SidebarMenu with logo
export const WithLogo: Story = {
    render: () => (
        <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
            <div className="flex items-center">
                <img src="/path/to/logo.png" alt="Logo" className="mr-2" />{' '}
                {/* Replace with your logo path */}
                <span>My Logo</span>
            </div>
            <div>Content with Logo</div>
        </SidebarMenu>
    )
};

// SidebarMenu with multiple links
export const WithLinks: Story = {
    render: () => (
        <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
            <div>
                <a href="/docs" className="block">
                    Docs
                </a>
                <a href="/demo" className="block">
                    Demo
                </a>
                <a href="/about" className="block">
                    About
                </a>
            </div>
        </SidebarMenu>
    )
};

// SidebarMenu with additional styling
export const StyledSidebarMenu: Story = {
    render: () => (
        <SidebarMenu
            isOpen={true}
            side="left"
            onClose={() => console.log('Closed')}
            className="bg-gray-800 text-white"
        >
            <div>Styled Content</div>
        </SidebarMenu>
    )
};

// SidebarMenu with dynamic content
export const DynamicContent: Story = {
    render: () => {
        const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3']);
        return (
            <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
                <div>
                    {items.map((item) => (
                        <div key={item} className="py-2">
                            {item}
                        </div>
                    ))}
                </div>
            </SidebarMenu>
        );
    }
};

// SidebarMenu with a footer
export const WithFooter: Story = {
    render: () => (
        <SidebarMenu isOpen={true} side="left" onClose={() => console.log('Closed')}>
            <div>Content</div>
            <div className="border-t mt-4 pt-2">Footer Content</div>
        </SidebarMenu>
    )
};
