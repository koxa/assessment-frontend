import { ConditionOptions } from '../../types/component';
import { PageRender } from '../../types/page';

type Props = PageRender & ConditionOptions;

const Condition = ({ variable, variables, value, children }: Props) => {
    const state = variables[variable];
    return state === value ? children : null;
};

export default Condition;
