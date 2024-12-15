declare global {
    interface FormData {
        entries(): any;
    }
}
declare function useFormObjectLoader(formDatax: FormData, payload: any, keyName: string): void;
declare function usePlayloadTester(): Promise<void>;
export { usePlayloadTester, useFormObjectLoader };
