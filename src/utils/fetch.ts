import { FetchMethod, FetchOptions } from '../types/fetch';

export async function fetch<T>(url: string, data?: any, method?: FetchMethod): Promise<T> {
    const fetchMethod = method ?? 'GET';
    const body = ['POST', 'PUT'].includes(fetchMethod) ? JSON.stringify(data) : undefined;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options: FetchOptions = {
        method: fetchMethod,
        headers,
        body
    };

    const response = await window.fetch(url, options);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const { data: dataResponse } = await response.json();
    return dataResponse;
}
