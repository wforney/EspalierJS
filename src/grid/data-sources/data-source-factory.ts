import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";
import { IGridDataSource } from "./grid-data-source";
import { HttpClientSource } from "./http-client-source";
import { StaticDataSouce } from "./static-data-source";

@inject(HttpClient)
export class DataSourceFactory {
  constructor(private http: HttpClient) { }

  public HttpSource<TData>(url: string): IGridDataSource<TData> {
    return new HttpClientSource<TData>(url, this.http);
  }

  public StaticSource<TData>(records: TData[]): IGridDataSource<TData> {
    return new StaticDataSouce(records);
  }
}
