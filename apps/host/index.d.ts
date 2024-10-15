/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
    const content: any;
    export const ReactComponent: any;
    export default content;
}

declare module 'store/store-list' {
    export * from '@store/components/store-list/store-list';
    export { default } from '@store/components/store-list/store-list';
}

declare module 'product/featured-product-list' {
    import { FC } from 'react';
    import { FeaturedProductListProps } from '@product/components/featured-product-list/featured-product-list';

    export const FeaturedProductList: FC<FeaturedProductListProps>;
    export default FeaturedProductList;
}
