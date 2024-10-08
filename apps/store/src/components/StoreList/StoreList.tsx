import { lazy, Suspense } from 'react';
const BuyButton = lazy(() => import('checkout/buy-button'));

export function StoreList() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                Store List
                <BuyButton />
            </Suspense>
        </>
    );
}

export default StoreList;
