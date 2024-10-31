// SearchBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@design-system/components/molecules';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/Molecules/SearchBar',
    component: SearchBar,
    argTypes: {
        onSearch: { action: 'searched' },
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'Search something'
        },
        icon: {
            control: { type: 'text' },
            defaultValue: 'ic:outline-search' // Default icon
        }
    }
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// Default SearchBar
export const Default: Story = {
    render: () => <SearchBar onSearch={(query) => console.log(query)} />
};

// SearchBar with Initial Query
export const WithInitialQuery: Story = {
    render: () => (
        <SearchBar
            onSearch={(query) => console.log(query)}
            defaultQuery="Something I searched b4"
        />
    )
};
