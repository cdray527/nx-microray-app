import { useState, useEffect } from 'react';
import { Iconify, IconifyProps } from '@design-system/components/atoms'; // Adjust the import based on your file structure

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    icon?: IconifyProps;
    defaultQuery?: string; // Prop for default query
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search something...',
    onSearch,
    defaultQuery,
    icon = 'ic:outline-search' // Default icon
}) => {
    const [query, setQuery] = useState(defaultQuery || '');

    // Update the query when defaultQuery changes
    useEffect(() => {
        setQuery(defaultQuery || '');
    }, [defaultQuery]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-md p-2"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="flex-grow bg-transparent outline-none"
            />
            <button type="submit" className="ml-2">
                <Iconify icon={icon} width={20} height={20} />
            </button>
        </form>
    );
};

export { SearchBar };
