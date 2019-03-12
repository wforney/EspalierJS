import { IEspalierFormControl } from "./espalier-form-control";
import { ValidationController, ValidationRenderer, RenderInstruction } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
export declare class EspalierInput implements IEspalierFormControl, ValidationRenderer {
    private controller;
    private eventAggregator;
    controlid: string;
    value: string;
    type: string;
    label: string;
    protected input: HTMLInputElement;
    protected focused: boolean;
    protected errors: string[];
    private blurCheckForMe;
    private errorSub;
    constructor(controller: ValidationController, eventAggregator: EventAggregator);
    focus(): void;
    render(instruction: RenderInstruction): void;
    protected hasFocus(): void;
    protected doBlur(): Promise<void>;
    protected attached(): void;
    protected detached(): void;
}