export declare enum ScriptType {
    jsonLd = "application/ld+json",
    json = "application/json"
}
export interface IAnyObject {
    [key: string]: any;
}
export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}
export declare const url = "https://vamtiger-project.github.io/vamtiger-organization-infers-group-json-ld.js/build/vamtiger-organization-infers-group-json-ld.js";
