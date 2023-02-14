import Loading from '../../components/loading';
import { PageRender } from '../../types/page';
import clasess from './styles.module.css';

type Props = { loading: boolean } & PageRender;

const Layout: React.FC<Partial<Props>> = ({ loading, children }) => {
    return <div className={clasess.layout}>{loading ? <Loading /> : <>{children}</>}</div>;
};

export default Layout;
