import { IEspalierFormControl } from "./espalier-form-control";
export declare class EspalierCheckboxCustomElement implements IEspalierFormControl {
    controlid: string;
    checked: boolean | Array<any>;
    model: any;
    label: string;
    protected input: HTMLInputElement;
    protected errors: string[];
    focus(): void;
    pushError(message: string): void;
    clearErrors(): void;
}
