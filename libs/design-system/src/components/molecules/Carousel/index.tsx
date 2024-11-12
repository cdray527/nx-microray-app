import { useEffect, useState } from 'react';
import { ProductCard } from '@design-system/components/molecules';

export function Carousel({
    items, // Items in array
    renderItem // Rendering Component
}: {
    items: any[]; // Array of product data
    renderItem: (item: any) => React.ReactNode; // Function to render a product (like ProductCard)
}) {
    const [carouselProducts, setCarouselProducts] = useState<any[]>([]);

    useEffect(() => {
        if (items) {
            // Fetch products and duplicate for the carousel loop
            const fetchedProducts = [...items, ...items, ...items]; // Adjust this as needed
            setCarouselProducts(fetchedProducts);
        }
    }, [items]); // Update the carousel when items change

    if (carouselProducts.length === 0) return null;

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
