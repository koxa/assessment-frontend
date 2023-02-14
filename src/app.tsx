import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import Page404 from './pages/404';
import PageOne from './pages/one';
import PageThree from './pages/three';
import PageTwo from './pages/two';
import { PageRender } from './types/page';
import Layout from './pages/layout';

const App = () => {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);

    const getPage = useCallback((id: string, props: PageRender) => {
        switch (id) {
            case 'page-one':
                return PageOne({ ...props });
            case 'page-two':
                return PageTwo({ ...props });
            case 'page-three':
                return PageThree({ ...props });
            default:
                return Page404({ ...props });
        }
    }, []);

    return (
        <Layout loading={loading} setLoading={setLoading}>
            {getPage(id, { id, searchParams, setLoading })}
        </Layout>
    );
};

export default App;
