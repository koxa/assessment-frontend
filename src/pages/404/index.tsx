import { useEffect } from 'react';
import { PageRender } from '../../types/page';
import classes from './styles.module.css';

type Props = PageRender;

const Page404 = ({ setLoading }: Props) => {
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className={classes.errorContainer}>
            <h1 className={classes.errorText}>404: Page Not Found</h1>
        </div>
    );
};

export default Page404;
