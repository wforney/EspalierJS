import { ViewFactory } from "aurelia-framework";
/**
 * Global configuration options for Espalier with sensible defaults.
 */
export declare class EspalierConfig {
    /**
     * The default page size if none is specified.
     */
    defaultPageSize: number;
    /**
     * The root url to use when fetching a resource.
     */
    rootUrl: string;
    /**
     * The color to use for the sort and filter icons.
     */
    buttonColor: string;
    /**
     * Returns the view map. Espalier uses string-keyed cell templates
     * when rendering cells. It has four built-in template: "default",
     * "date", "time", and "date-time". You can override those here, or
     * add your own templates and specify them on a column definition
     * later.
     */
    readonly cellViews: Map<string, string>;
    getView(name: string): ViewFactory | undefined;
    setView(name: string, view: ViewFactory): void;
}
