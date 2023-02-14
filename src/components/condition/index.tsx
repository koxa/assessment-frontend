import { ConditionOptions } from '../../types/component';
import { PageRender } from '../../types/page';

type Props = PageRender & ConditionOptions;

const Condition = ({
    id,
    variable,
    variables,
    setVariables,
    value,
    childrenId,
    componentsRender
}: Props) => {
    if (!childrenId || !componentsRender) {
        return null;
    }

    const componentRender = componentsRender[childrenId];
    const Component = componentRender.component;
    const props = {
        ...componentRender.options,
        id,
        key: `cond${childrenId}${id}${Number(childrenId + id)}`,
        childrenId: componentRender.childrenId,
        variables,
        setVariables,
        componentsRender
    };

    const state = variables[variable];
    return state === value ? <Component {...props} /> : null;
};

export default Condition;
