// SidebarMenu.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    direction?: 'left' | 'right'; // Slide direction
    header: React.ReactNode;
    children: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    isOpen,
    onClose,
    direction = 'left',
    header,
    children
}) => {
    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? 'opacity-50' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 h-full bg-white shadow-lg transition-transform duration-300 ${
                    isOpen
                        ? direction === 'left'
                            ? 'translate-x-0'
                            : 'translate-x-full'
                        : direction === 'left'
                        ? '-translate-x-full'
                        : 'translate-x-0'
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold">{header}</h2>
                    <button onClick={onClose} aria-label="Close Sidebar">
                        <Icon icon="mdi:close" className="text-xl" />
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

// Button to trigger the SidebarMenu
const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white rounded">
                Toggle Sidebar
            </button>
            <SidebarMenu
                isOpen={isOpen}
                onClose={toggleSidebar}
                direction="left" // Change to "right" if you want it to slide from the right
                header="Sidebar Menu"
            >
                <p>This is the sidebar content.</p>
            </SidebarMenu>
        </div>
    );
};

export default App;
