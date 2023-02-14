export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface FetchOptions {
    method: FetchMethod;
    headers?: Headers;
    body?: any;
}
