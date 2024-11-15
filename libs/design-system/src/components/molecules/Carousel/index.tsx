export function Carousel({
    items,
    renderItem
}: {
    items: any[];
    renderItem: (item: any) => React.ReactNode;
}) {
    if (!items?.length) return null;

    // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
    const carouselProducts = [...items, ...items, ...items];

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
