export default interface IAggregateData {
  _id?: string;
  fromDate: Date;
  toDate: Date;
  services: IAggregateServiceInfo[];
}

export interface IAggregateServiceInfo {
  service: string;
  namespace: string;
  version: string;
  totalRequests: number;
  totalServerErrors: number;
  totalRequestErrors: number;
  avgRisk: number;
  endpoints: IAggregateEndpointInfo[];
}
export interface IAggregateEndpointInfo {
  name: string;
  totalRequests: number;
  totalServerErrors: number;
  totalRequestErrors: number;
}