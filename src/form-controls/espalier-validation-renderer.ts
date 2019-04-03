import { ValidationRenderer, RenderInstruction } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
import { inject } from "aurelia-framework";
import { IEspalierFormControl } from "./espalier-form-control";

function isEsp(res: IEspalierFormControl | any): res is IEspalierFormControl {
  return (<IEspalierFormControl>res).getControlId !== undefined;
}

@inject(EventAggregator)
export class EspalierValidationRenderer implements ValidationRenderer {
  public specificElement: any;

  constructor(private eventAggregator: EventAggregator) { }

  public render(instruction: RenderInstruction): void {
    for (const { result, elements } of instruction.unrender) {
      for (const element of elements) {
        const viewModel = element["au"].controller.viewModel;

        if (isEsp(viewModel)) {
          if ((this.specificElement && viewModel != this.specificElement) || !result.message) { continue; }
          const controlId = viewModel.getControlId();
          this.eventAggregator.publish(`removeerror:espalier:${controlId}`, result.message);
        }
      }
    }

    for (const { result, elements } of instruction.render) {
      if (result.valid || !result.message) { continue; }

      for (const element of elements) {
        const viewModel = element["au"].controller.viewModel;

        if (isEsp(viewModel)) {
          if ((this.specificElement && viewModel != this.specificElement) || !result.message) { continue; }
          const controlId = viewModel.getControlId();
          this.eventAggregator.publish(`error:espalier:${controlId}`, result.message);
        }
      }
    }
  }
}
