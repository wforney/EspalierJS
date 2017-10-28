import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class TextFormatter implements IEspalierDataFormatter {
  public format(data: any) {
    return data;
  }
}
