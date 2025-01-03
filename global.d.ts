// global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    jQuery: any;
    $: any;
    yaContextCb:any
  }
}
