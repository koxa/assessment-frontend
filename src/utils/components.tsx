/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { Component, ComponentId, ComponentsRender } from '../types/component';
import { Variable } from '../types/variable';

export async function getLazyComponents(
    components: Component[],
    variables?: {
        variables: any;
        setVariables: (value: any) => void;
    }
) {
    const out: ComponentsRender = {};
    const lazyComponents = await Promise.all(
        components.map(async (data) => {
            const { id, type, options, children } = data;
            let component;
            switch (type) {
                case 'image':
                    component = (await import('../components/image')).default;
                    break;
                case 'button':
                    component = (await import('../components/button')).default;
                    break;
                case 'condition':
                    component = (await import('../components/condition')).default;
                    break;
                default:
                    component = (await import('../components/weather')).default;
                    break;
            }
            return {
                id,
                component,
                options: options,
                children
            };
        })
    );
    lazyComponents.forEach((component) => {
        const lazyComponent = lazyComponents.find((comp) => comp.id == component.children) as any;
        const children = lazyComponent ? (
            <lazyComponent.component {...lazyComponent.options} {...variables} />
        ) : undefined;
        out[component.id] = {
            component: component.component,
            options: { ...component.options, children }
        };
    });
    return out;
}

export function getListComponentsFromIds(
    ids: ComponentId[],
    componentsRender: ComponentsRender,
    variables?: {
        variables: any;
        setVariables: (value: any) => void;
    }
) {
    return ids.map((id, key) => {
        const componentRender = componentsRender[id];
        if (componentRender) {
            const Component = componentRender.component as any;
            return (
                <Component
                    key={`build${key}${key + Object.keys(variables || {}).length}`}
                    {...componentRender.options}
                    {...variables}
                />
            );
        }
        return <>Not found ${id}</>;
    });
}

export function getVariables(variables?: Variable[]) {
    if (!variables) return {};
    const getVariableType = (type: string, value: string | number) => {
        switch (type) {
            case 'number':
                return Number(value ?? 0);
            default:
                return String(value ?? '');
        }
    };
    const out: any = {};
    variables.forEach((variable) => {
        out[variable.name] = getVariableType(variable.type, variable?.initialValue);
    });
    return out;
}
