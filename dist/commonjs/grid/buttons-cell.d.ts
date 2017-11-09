import { ITableButton } from "./table-button";
export declare class ButtonsCell {
    buttons: ITableButton<any>[];
    record: any;
    protected menuContainer: HTMLDivElement;
    protected opened: boolean;
    protected attached(): void;
    protected buttonClicked(button: ITableButton<any>): void;
    protected openMenu(): void;
    protected closeMenu(): void;
    private tryClose();
}
