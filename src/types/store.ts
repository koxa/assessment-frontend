export interface Variables {
    [key: string]: string | number;
}

export type VariableAction = {
    type: string;
    variables: Variables;
};

export type VariablesState = { variables: Variables };

export type DispatchType = (args: VariableAction) => VariableAction;
