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

    const { childrenId: childId, component: Children, options } = componentsRender[childrenId];
    const childrenProps = {
        ...options,
        id,
        key: `cond${childrenId}${id}${Number(childrenId + id)}`,
        childrenId: childId,
        variables,
        setVariables,
        componentsRender
    };

    const state = variables[variable];
    return state === value ? <Children {...childrenProps} /> : null;
};

export default Condition;
