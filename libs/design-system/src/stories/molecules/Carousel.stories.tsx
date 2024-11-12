// Carousel.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, Carousel } from '@design-system/components/molecules';

const sampleProducts = [
    {
        id: 'ecc87b92-c914-4236-ae2b-44e94d651752',
        description: 'Nike Air 1/2 Cent Black',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/117/original/344646_001.png.png',
        price: 190,
        brand: 'Nike',
        gender: 'Men',
        sku: '344646-001',
        category: 'Basketball'
    },
    {
        id: 'df72e175-4337-4600-968c-2f0a77fe1ad6',
        description: 'Nike Air 1/2 Cent Black Green Spark',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/118/original/344646_002.png.png',
        price: 190,
        brand: 'Nike',
        gender: 'Men',
        sku: '344646-002',
        category: 'Basketball'
    },
    {
        id: '3a4ce10b-b949-4d23-be4a-868e91708d7c',
        description: 'Nike Air 1/2 Cent Silver',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/100/579/287/original/21956_00.png.png',
        price: 190,
        brand: 'Nike',
        gender: 'Men',
        sku: '344646-003',
        category: 'Basketball'
    },
    {
        id: 'e3928eb5-c4c2-4afb-b3ff-a6ca40345254',
        description: 'Nike Air 1/2 Cent Royal',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/098/477/735/original/21878_00.png.png',
        price: 190,
        brand: 'Nike',
        gender: 'Men',
        sku: '344646-401',
        category: 'Basketball'
    },
    {
        id: 'b735b18e-0edd-4a1b-be4b-700b847f6db1',
        description: 'Nike Air 1/2 Cent Cranberry',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/122/original/344646_600.png.png',
        price: 190,
        brand: 'Nike',
        gender: 'Men',
        sku: '344646-600',
        category: 'Basketball'
    },
    {
        id: '51985864-ada8-4abb-89c5-ae00449aafa4',
        description: 'Nike Air 1/2 Cent Black',
        thumbnail:
            'https://image.goat.com/750/attachments/product_template_pictures/images/096/779/934/original/1328101_00.png.png',
        price: 170,
        brand: 'Nike',
        gender: 'Men',
        sku: 'SKU2',
        category: 'Basketball'
    }
];

const meta: Meta<typeof Carousel> = {
    title: 'Components/Molecules/Carousel',
    component: Carousel
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const BasicCarousel: Story = {
    render: () => (
        <Carousel
            items={sampleProducts}
            renderItem={(product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    brand={product.brand}
                    gender={product.gender}
                    sku={product.sku}
                    category={product.category}
                />
            )}
        />
    )
};
