import { TRequestTypeUpper } from "./TRequestType";

export type TEndpointDependency = {
  endpoint: TEndpointInfo;
  dependsOn: {
    endpoint: TEndpointInfo;
    distance: number;
    type: "SERVER";
  }[];
  dependBy: {
    endpoint: TEndpointInfo;
    distance: number;
    type: "CLIENT";
  }[];
};
export type TEndpointInfo = {
  uniqueServiceName: string;
  uniqueEndpointName: string;
  // trace name, label
  name: string;
  service: string;
  namespace: string;
  version: string;
  // "http.url", true request url
  url: string;
  // host, path, port are from "http.url"
  host: string;
  path: string;
  port: string;
  method: TRequestTypeUpper;
  clusterName: string;
};

export type TEndpointDependencyCombined = {
  endpoint: TEndpointInfo;
  distance: number;
  type: "SERVER" | "CLIENT";
};