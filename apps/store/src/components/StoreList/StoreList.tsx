import { lazy, Suspense } from 'react';

export function StoreList() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>Store List</Suspense>
        </>
    );
}

export default StoreList;
