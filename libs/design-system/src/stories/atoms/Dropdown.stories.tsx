// Import necessary types and components
import type { Meta, StoryObj } from '@storybook/react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    Button,
    Iconify
} from '@design-system/components/atoms';

// Meta configuration for the DropdownMenu component
const meta: Meta<typeof DropdownMenu> = {
    title: 'Components/Atoms/DropdownMenu',
    component: DropdownMenu
};

// Export the meta object
export default meta;

// Define the type for the stories
type Story = StoryObj<typeof DropdownMenu>;

// Default DropdownMenu story
export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// DropdownMenu with Icons
export const WithIcons: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Iconify icon="solar:sun-2-linear" className="mr-2 h-4 w-4" />
                    Sun Icon
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Iconify icon="solar:moon-stars-linear" className="mr-2 h-4 w-4" />
                    Moon Icon
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// DropdownMenu with Label and Separator
export const WithLabelAndSeparator: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Menu Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// DropdownMenu with Checkbox Items
export const WithCheckboxes: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Option 2 (Checked)</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// DropdownMenu with Radio Items
export const WithRadioItems: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="1">Radio 1</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="2">Radio 2</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// DropdownMenu with Shortcuts
export const WithShortcuts: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    Option 1{' '}
                    <span className="ml-auto text-xs tracking-widest opacity-60">Ctrl+1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Option 2{' '}
                    <span className="ml-auto text-xs tracking-widest opacity-60">Ctrl+2</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// Themed DropdownMenu
export const Themed: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Iconify icon="solar:sun-2-linear" className="h-[1.2rem] w-[1.2rem]" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// Complex DropdownMenu
export const Complex: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Group</DropdownMenuLabel>
                <DropdownMenuItem>Grouped Item 1</DropdownMenuItem>
                <DropdownMenuItem>Grouped Item 2</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
