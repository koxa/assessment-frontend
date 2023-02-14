import { usePageLoad } from '../../hooks/usePageLoad';
import { PageRender } from '../../types/page';
import classes from './styles.module.css';

type Props = PageRender;

const PageOne = ({ id, searchParams, setLoading }: Props) => {
    const queryId = searchParams.get('id');
    const { pageData, currentListComponents } = usePageLoad({ id, queryId, setLoading });

    if (!pageData) {
        return null;
    }

    return <div className={classes.container}>{currentListComponents}</div>;
};

export default PageOne;
