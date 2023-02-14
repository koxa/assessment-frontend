import { useCallback } from 'react';
import { ButtonOptions } from '../../types/component';
import { PageRender } from '../../types/page';
import classes from './styles.module.css';

type Props = PageRender & ButtonOptions;

const Button = ({ variables, setVariables, text, variable, value }: Props) => {
    const state = variables[variable];

    const onClick = useCallback(() => {
        if (setVariables && state !== value) {
            setVariables({
                ...variables,
                [variable]: value
            });
        }
    }, [state, variables, variable]);

    const getImage = useCallback((variable: string, value: string) => {
        if (variable === 'location') {
            return <img className={classes.location} alt="" src="/icons/location.svg" />;
        }
        return <img alt="" src={value === 'show' ? '/icons/show-eye.svg' : '/icons/hidden.svg'} />;
    }, []);

    return (
        <div className={`${classes.container} ${classes.card}`} onClick={onClick}>
            <div className={classes.line}>
                <span>{text}</span>
            </div>
            <div className={`${classes.line} ${classes.state}`}>{getImage(variable, value)}</div>
        </div>
    );
};

export default Button;
