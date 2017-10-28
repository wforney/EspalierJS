import { IColumnDefinition } from "./column-definition";
import { EspalierConfig } from "./espalier-config";
import { InlineViewStrategy } from "aurelia-framework";
export declare class EspalierCell {
    private config;
    column: IColumnDefinition<any>;
    record: any;
    protected onClick: () => void;
    protected data: any;
    protected viewStrategy: InlineViewStrategy;
    protected readonly className: string;
    constructor(config: EspalierConfig);
    protected attached(): void;
    private render();
}
