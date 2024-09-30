// Import necessary types and components
import type { Meta, StoryObj } from '@storybook/react';
import { CardProduct, CardProductProps } from '@design-system/components/molecules'; // Updated import path

// Meta configuration for the CardProduct component
const meta: Meta<typeof CardProduct> = {
    title: 'Components/Molecules/CardProduct', // Updated title path
    component: CardProduct
};

// Export the meta object
export default meta;

// Define the type for the stories
type Story = StoryObj<typeof CardProduct>;

// Sample product data
const products: Omit<CardProductProps, 'onClick'>[] = [
    {
        image: {
            src: '/assets/products/hamburguer.jpg',
            alt: 'Photo of a hamburger on a wooden board with tomato, lettuce and cheese.'
        },
        tags: ['cheese', 'salad', 'tomato', 'burguer'],
        price: 'U$ 777,99',
        title: 'All-American Cheeseburger',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa animi quisquam suscipit consequatur eligendi illo, pariatur quia dignissimos.'
    },
    {
        image: {
            src: '/assets/products/pizza.jpg',
            alt: 'Photo of a pizza on a wooden board.'
        },
        tags: ['beef', 'tomato', 'cheese', 'basil'],
        price: 'U$ 99,99',
        title: 'Big Pizza',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat fugit rerum quam illo exercitationem totam, quisquam doloribus.'
    },
    {
        image: {
            src: '/assets/products/mac-and-cheese.jpg',
            alt: 'Mac and cheese in a glass bowl.'
        },
        tags: ['macaroni', 'cheddar', 'cheese'],
        price: 'U$ 99,99',
        title: 'Mac and Cheese',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat fugit rerum quam illo exercitationem totam, quisquam doloribus.'
    }
];

// Default CardProduct story
export const Default: Story = {
    render: () => (
        <div className="flex space-x-4">
            {products.map((product, index) => (
                <CardProduct
                    key={index}
                    image={product['image']}
                    title={product['title']}
                    description={product['description']}
                    tags={product['tags']}
                    price={product['price']}
                    onClick={() => console.log(`${product['title']} added to cart`)} // Define onClick action
                />
            ))}
        </div>
    )
};
