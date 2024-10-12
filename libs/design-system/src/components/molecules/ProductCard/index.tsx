import React from 'react';

interface ProductCardProps {
    id: string;
    description: string;
    thumbnail: string;
    price: number;
    brand: string;
    gender: string;
    link: string;
    onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    description,
    thumbnail,
    price,
    brand,
    gender,
    link,
    onClick
}) => {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button onClick={onClick} className="block w-full">
                    <img
                        className="rounded-t-lg object-cover w-full h-64"
                        src={thumbnail}
                        alt={description}
                    />
                </button>
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
