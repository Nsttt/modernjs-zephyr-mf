import '@modern-js/runtime/registry/main';
export declare const provider: () => {
    render(info: import("@module-federation/bridge-react").RenderFnParams & {
        [key: string]: unknown;
    }): Promise<void>;
    destroy(info: {
        moduleName: string;
        dom: HTMLElement;
    }): Promise<void>;
    rawComponent: import("react").ComponentType<any>;
    __BRIDGE_FN__: (_args: any) => void;
};
export default provider;
