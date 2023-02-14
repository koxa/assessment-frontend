export interface ImageOptions {
    src: string;
    alt: string;
}

export interface WeatherOptions {
    lon: number;
    lat: number;
}

export interface ButtonOptions {
    text: string;
    variable: string;
    value: string;
}

export interface ConditionOptions {
    variable: string;
    value: string;
    children: any;
}

export type ComponentId = number | string;
export type ComponentType = 'image' | 'weather' | 'button' | 'condition';
export type ComponentOptions =
    | ImageOptions
    | ButtonOptions
    | ConditionOptions
    | WeatherOptions
    | { variables?: any; children?: any };

export type ComponentsRender = {
    [key: ComponentId]: {
        component: any;
        options: ComponentOptions;
    };
};

export type Component = {
    id: ComponentId;
    type: ComponentType;
    options: ComponentOptions;
    children?: number;
};
