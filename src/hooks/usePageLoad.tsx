import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PAGE_ROOT_LIST_ID } from '../const';
import { ComponentsRender } from '../types/component';
import { List } from '../types/list';
import { Page } from '../types/page';
import { getPageFromId } from '../utils/api';
import { getLazyComponents, getListComponentsFromIds, getVariables } from '../utils/components';

type Props = {
    id: string;
    queryId: string | null;
    setLoading?: (value: boolean) => void;
};

export const usePageLoad = ({ id, queryId, setLoading }: Props) => {
    const history = useHistory();
    const [pageData, setPageData] = useState<Page>();
    const [variables, setVariables] = useState<any>({});
    const [componentsRender, setComponentsRender] = useState<ComponentsRender>();
    const [currentListComponents, setCurrentListComponents] = useState<JSX.Element[]>([]);

    const fetchPageData = useCallback(async (id: string) => {
        setLoading && setLoading(true);
        try {
            const data = await getPageFromId(id);
            const { components, variables } = data;
            const lazyComponents = await getLazyComponents(components, { variables, setVariables });
            setPageData(data);
            setVariables(getVariables(variables));
            setComponentsRender(lazyComponents);
        } catch (error) {
            console.error(error);
            setPageData(undefined);
        } finally {
            setLoading && setLoading(false);
        }
    }, []);

    const getCurrentListComponents = useCallback(
        (
            listId: string | null,
            lists: List[],
            componentsRender: ComponentsRender,
            variables: any,
            setVariables: (value: boolean) => void
        ) => {
            const list = lists.find((list) => list.id == (listId ?? PAGE_ROOT_LIST_ID));
            if (!list) {
                history.push('/');
                console.error(
                    `List not found by query id:${
                        listId ?? PAGE_ROOT_LIST_ID
                    }. Redirect to home page`
                );
                return [];
            }
            return getListComponentsFromIds(list.components, componentsRender, {
                variables,
                setVariables
            });
        },
        []
    );

    useEffect(() => {
        fetchPageData(id);
    }, [id]);

    useEffect(() => {
        if (pageData && componentsRender) {
            const { lists } = pageData;
            setCurrentListComponents(
                getCurrentListComponents(queryId, lists, componentsRender, variables, setVariables)
            );
        }
    }, [pageData, componentsRender, variables]);

    return {
        pageData,
        setPageData,
        componentsRender,
        setComponentsRender,
        currentListComponents,
        variables,
        setVariables,
        setCurrentListComponents,
        fetchPageData,
        getCurrentListComponents
    };
};
