import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@design-system/components/molecules';

// Define the metadata for the stories
const meta: Meta<typeof ProductCard> = {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    argTypes: {
        // onClick: { action: 'clicked' },
        price: {
            control: { type: 'number' }
        },
        brand: {
            control: { type: 'text' }
        },
        gender: {
            control: { type: 'text' }
        },
        description: {
            control: { type: 'text' }
        },
        thumbnail: {
            control: { type: 'text' }
        }
        // link: {
        //     control: { type: 'text' }
        // }
    }
    // args: {
    //     onClick: () => {}
    // }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Define stories
export const Default: Story = {
    args: {
        id: '1',
        description: '1906R Big Kid "Starry Nights" DTLR Exclusive',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/104/656/916/original/GC1906DS.png.png',
        price: 120,
        brand: 'New Balance',
        gender: 'Youth'
        // link: '#'
    }
};

export const OnClickAction: Story = {
    args: {
        id: '2',
        description: 'Adidas NMD_R1',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/103/429/614/original/EE5107.png.png',
        price: 140,
        brand: 'Adidas',
        gender: 'Men'
        // link: '#',
        // onClick: () => alert('Product clicked!')
    }
};
