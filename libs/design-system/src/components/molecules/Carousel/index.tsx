import { useState, useEffect } from 'react';

export function Carousel({
    items,
    renderItem
}: {
    items: any[];
    renderItem: (item: any) => React.ReactNode;
}) {
    const [currentItems, setCurrentItems] = useState(items);

    useEffect(() => {
        setCurrentItems(items);
    }, [items]);

    if (!items?.length) return null;

    // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
    const carouselProducts = [...currentItems, ...currentItems, ...currentItems];

    return (
        <div className="w-full overflow-x-auto pb-6 pt-1">
            <ul className="flex animate-carousel gap-2">
                {carouselProducts.map((item, i) => (
                    <li key={`${item.id}-${i}`} className="relative aspect-square flex-none">
                        {renderItem(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
