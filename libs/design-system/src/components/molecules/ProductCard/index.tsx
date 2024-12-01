import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { Product } from '@utils/types/Product';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
    id: string;
    description: string;
    thumbnail: string;
    price: number;
    brand: string;
    gender: string;
    sku: string;
    category: string;
    onClickAddToCartButton: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    description,
    thumbnail,
    price,
    brand,
    gender,
    sku,
    category,
    onClickAddToCartButton
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const product: Product = {
        id,
        sku,
        brand,
        name: description,
        gender,
        category,
        retailPrice: price,
        image: {
            original: thumbnail,
            small: thumbnail,
            thumbnail
        }
    };

    return (
        <div
            className="flex flex-col max-w-80 rounded-lg hover:shadow-blue-500 dark:hover:shadow-teal-500 hover:shadow-hovered"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a
                href={'/'}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left relative"
            >
                <div className="block w-full text-left overflow-hidden relative">
                    <div
                        className={cn(
                            'absolute inset-0 bg-cover bg-center hidden dark:block',
                            `${styles['dm-img-thumbnailshadow']}`
                        )}
                        style={{
                            backgroundImage: `url(${thumbnail})`
                        }}
                    />
                    <img
                        className="rounded-t-lg object-cover w-full h-64"
                        src={thumbnail}
                        alt={description}
                    />
                </div>
            </a>
            <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-700 dark:text-gray-400">
                            {brand} | {gender}
                        </p>
                        <p className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                            ${price}
                        </p>
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {description}
                    </h5>
                </div>
                <div
                    className={cn('visible', {
                        'md:invisible': !isHovered
                    })}
                >
                    <AddToCartButton
                        onClickAddToCartButton={onClickAddToCartButton}
                        product={product}
                    />
                </div>
            </div>
        </div>
    );
};
