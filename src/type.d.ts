export interface IJson<T = any> {
    [prop: string]: T;
}

export interface ITest {
    alert(text: string): void;
    version: string;
}