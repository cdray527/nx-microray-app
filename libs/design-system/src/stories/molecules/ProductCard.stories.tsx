import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@design-system/components/molecules';

// Define the metadata for the stories
const meta: Meta<typeof ProductCard> = {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    argTypes: {
        onClick: { action: 'clicked' },
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
        },
        link: {
            control: { type: 'text' }
        }
    },
    args: {
        onClick: () => {}
    }
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
        gender: 'Youth',
        link: '#'
    }
};

export const MenShoe: Story = {
    args: {
        id: '2',
        description: 'Air Jordan 1 Retro High OG',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/105/241/499/original/555088_063.png.png',
        price: 170,
        brand: 'Nike',
        gender: 'Men',
        link: '#'
    }
};

export const WomenShoe: Story = {
    args: {
        id: '3',
        description: 'Air Max 97 "Metallic Gold"',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/106/237/511/original/GS3862-700.png.png',
        price: 150,
        brand: 'Nike',
        gender: 'Women',
        link: '#'
    }
};

export const YouthShoe: Story = {
    args: {
        id: '4',
        description: 'New Balance 550',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/108/341/015/original/BB550HA1.png.png',
        price: 110,
        brand: 'New Balance',
        gender: 'Youth',
        link: '#'
    }
};

export const ExpensiveProduct: Story = {
    args: {
        id: '5',
        description: 'Yeezy Boost 350 V2 "Zebra"',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/101/337/601/original/CP9654.png.png',
        price: 300,
        brand: 'Adidas',
        gender: 'Men',
        link: '#'
    }
};

export const CheapProduct: Story = {
    args: {
        id: '6',
        description: 'Puma Future Rider Play On',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/100/672/071/original/37114901.png.png',
        price: 70,
        brand: 'Puma',
        gender: 'Women',
        link: '#'
    }
};

export const NoThumbnail: Story = {
    args: {
        id: '7',
        description: 'Nike Air Max Plus TN Ultra',
        thumbnail: '', // No image for this story
        price: 180,
        brand: 'Nike',
        gender: 'Men',
        link: '#'
    }
};

export const OnClickAction: Story = {
    args: {
        id: '8',
        description: 'Adidas NMD_R1',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/103/429/614/original/EE5107.png.png',
        price: 140,
        brand: 'Adidas',
        gender: 'Men',
        link: '#',
        onClick: () => alert('Product clicked!')
    }
};
