// set exception for browser window types, ref : https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
export {};
declare global {
    interface Window {
        [key: string]: any;
    }
}
