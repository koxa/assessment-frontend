/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { Component, ComponentId, ComponentsRender } from '../types/component';
import { Variable } from '../types/variable';

export async function getLazyComponents(components: Component[]) {
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
                options,
                children
            };
        })
    );
    lazyComponents.forEach((component) => {
        out[component.id] = {
            component: component.component,
            options: component.options,
            childrenId: component?.children
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
    return ids.map((id, index) => {
        const componentRender = componentsRender[id];
        if (componentRender) {
            const Component = componentRender.component;
            return (
                <Component
                    id={id}
                    key={`build${index}`}
                    {...componentRender.options}
                    {...variables}
                    childrenId={componentRender?.childrenId}
                    componentsRender={componentsRender}
                />
            );
        }
        return <>Not found id {id}</>;
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
