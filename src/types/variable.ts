export type VariableType = 'string' | 'number';

export interface Variable {
    name: string;
    type: VariableType;
    initialValue: string;
}
