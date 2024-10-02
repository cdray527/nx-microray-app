import React from 'react';
import { Button } from '@design-system/components/atoms';

interface DrawerMenuTogglerProps {
    drawerTarget: string;
    drawerShow: string;
    ariaControls: string;
}

export const DrawerMenuToggler: React.FC<DrawerMenuTogglerProps> = ({
    drawerTarget,
    drawerShow,
    ariaControls
}) => {
    return (
        <Button
            label="Show navigation"
            onClick={() => {
                const drawer = document.getElementById(drawerShow);
                if (drawer) {
                    drawer.classList.toggle('hidden'); // Assuming you are using a class to hide/show the drawer
                }
            }}
            data-drawer-target={drawerTarget}
            data-drawer-show={drawerShow}
            aria-controls={ariaControls}
        />
    );
};
