import React from 'react';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { Product } from '@utils/types/Product';

interface ProductCardProps {
    id: string;
    description: string;
    thumbnail: string;
    price: number;
    brand: string;
    gender: string;
    // link: string;
    // onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    description,
    thumbnail,
    price,
    brand,
    gender
    // link,
    // onClick
}) => {
    return (
        <div className="max-w-80 rounded-lg hover:shadow-blue-500 dark:hover:shadow-teal-500 hover:shadow-hovered">
            <a
                href={'/'}
                // href={link}
                target="_blank"
                // onClick={onClick}
                rel="noopener noreferrer"
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
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-700 dark:text-gray-400">
                        {brand} | {gender}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {description}
                </h5>
            </div>
        </div>
    );
};
