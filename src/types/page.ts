import { Component, ComponentsRender } from './component';
import { List } from './list';
import { Variable } from './variable';

export interface Page {
    lists: List[];
    components: Component[];
    variables?: Variable[];
}

export type PageRender = {
    id: string;
    searchParams: URLSearchParams;
    setLoading: (value: boolean) => void;
    variables?: any;
    setVariables?: (value: any) => void;
    childrenId?: number;
    componentsRender?: ComponentsRender;
};
