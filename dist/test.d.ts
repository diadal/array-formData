declare global {
    interface FormData {
        entries(): any;
    }
}
declare function usePlayloadTester(): Promise<void>;
export { usePlayloadTester };
