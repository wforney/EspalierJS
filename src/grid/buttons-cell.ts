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
  protected opened: boolean = false;

  protected attached() {
    const buttons = ToArray(this.menuContainer.querySelectorAll("button"));

    for (const button of buttons) {
      tippy(button, {
        position: "left",
        arrow: true,
        size: "big"
      });
    }
  }

  protected buttonClicked(button: ITableButton<any>) {
    this.tryClose();
    button.onClick(this.record);
  }

  protected openMenu() {
    this.tryClose();
    const menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);

    this.opened = true;
    menu.classList.add("show");
    this.menuContainer.classList.add("show");
    currentOpenCell = this;
  }

  protected closeMenu() {
    const menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);
    this.opened = false;
    menu.classList.remove("show");
    this.menuContainer.classList.remove("show");
    currentOpenCell = null;
  }

  private tryClose() {
    if (currentOpenCell) {
      try {
        currentOpenCell.closeMenu();
      } catch {
        currentOpenCell = null;
      }
    }
  }
}
