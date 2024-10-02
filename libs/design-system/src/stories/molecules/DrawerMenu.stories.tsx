import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DrawerMenu, DrawerMenuToggler } from '@design-system/components/molecules';

export default {
    title: 'Components/Molecules/DrawerMenu',
    component: DrawerMenu,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        id: {
            control: {
                type: 'text'
            },
            description: 'The ID of the drawer menu',
            defaultValue: 'drawer-navigation'
        }
    }
} as Meta;

type Story = StoryObj<typeof DrawerMenu>;

export const Default: Story = {
    render: (args) => (
        <div>
            <DrawerMenuToggler
                drawerTarget={args.id || 'fallback-target'}
                drawerShow={args.id || 'fallback-show'}
                ariaControls={args.id || 'fallback-aria-controls'}
            />
            <DrawerMenu id={args.id} />
            <DrawerMenu id={args.id} />
        </div>
    ),
    args: {
        id: 'drawer-navigation' // default value for the id prop
    }
};
