import { IColumnDefinition } from "./column-definition";
import { ViewSlot, ViewFactory, Container } from "aurelia-framework";
export declare class EspalierCell {
    private viewSlot;
    private container;
    column: IColumnDefinition<any>;
    record: any;
    view: ViewFactory;
    protected onClick: () => void;
    protected data: any;
    protected readonly className: string;
    private isAttached;
    constructor(viewSlot: ViewSlot, container: Container);
    protected attached(): void;
    protected viewChanged(): void;
    private loadView;
}
