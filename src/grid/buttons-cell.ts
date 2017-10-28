import { ITableButton } from "./table-button";
import { bindable, customElement } from "aurelia-framework";
import { ToArray } from "./helpers";
import * as tippy from "tippy.js";

let currentOpenCell: ButtonsCell | null;

@customElement("buttons-cell")
export class ButtonsCell {
  @bindable
  public buttons: ITableButton<any>[];

  @bindable
  public record: any;

  protected menuContainer: HTMLDivElement;
  protected menu: HTMLDivElement;
  protected buttonsContainer: HTMLDivElement;
  protected opened: boolean = false;

  protected attached() {
    const buttons = ToArray(this.buttonsContainer.querySelectorAll("button"));

    for (const button of buttons) {
      tippy(button, {
        position: "left",
        arrow: true,
        size: "big"
      });
    }
  }

  protected buttonClicked(button: ITableButton<any>) {
    button.onClick(this.record);
  }

  protected openMenu() {
    if (currentOpenCell) {
      currentOpenCell.closeMenu();
    }

    this.opened = true;
    this.menu.classList.add("show");
    this.menuContainer.classList.add("show");
    currentOpenCell = this;
  }

  protected closeMenu() {
    this.opened = false;
    this.menu.classList.remove("show");
    this.menuContainer.classList.remove("show");
    currentOpenCell = null;
  }
}
