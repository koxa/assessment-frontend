import { useCallback } from 'react';
import { ButtonOptions } from '../../types/component';
import { PageRender } from '../../types/page';
import classes from './styles.module.css';

type Props = PageRender & ButtonOptions;

const Button = ({ variables, setVariables, text, value, variable }: Props) => {
    const state = variables[variable];
    const onClick = useCallback(() => {
        if (setVariables && state !== value) {
            setVariables({
                ...variables,
                [variable]: value
            });
        }
    }, [state, variables, variable]);

    return (
        <div className={`${classes.container} ${classes.card}`} onClick={onClick}>
            <div className={classes.line}>
                <span>{text}</span>
            </div>
            <div className={`${classes.line} ${classes.state}`}>
                <img alt="" src={value === 'show' ? '/icons/show-eye.svg' : '/icons/hidden.svg'} />
            </div>
        </div>
    );
};

export default Button;
