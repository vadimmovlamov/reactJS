// в <Routes> мы будем складывать все новые страницы, которые мы будем создавать
//<Route path={ROUTE_NAMES.HOME} element ={<button><Link to={ROUTE_NAMES.COUNTER}>Counter</Link></button>} />

import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home";
import CounterContainer from "../pages/Counter/Containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/Containers/FunctionalCounterContainer";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import TaskCounterContainer from "../pages/HomeWork/containers/TaskCounterContainer";
import ReduxCounterContainer from "../pages/ReduxCounters/container/ReduxCounterContainer";
import TodoListContainer from "../pages/TodoList/container/TodoListContainer";
import DataFetchingContainer from "../pages/DataFetching/containers/DataFetchingContainer";
import DataFetchingContainerTwo from "../pages/DataFetchingTwo/containers/DataFetchingContainerTwo";
import SearchRequest from "../pages/SearchREquest/containers/SearchRequestContainers";
import TodoListContainerSearch from "../pages/TodoListSearch/container/TodoListContainerSearch";




const Router = () => {
    return(
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element ={<Home />} />
            <Route path={ROUTE_NAMES.COUNTER} element ={<CounterContainer />} />
            <Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element ={<FunctionalCounterContainer />} />
            <Route path={ROUTE_NAMES.LISTS} element ={<ListsContainer />} />
            <Route path={ROUTE_NAMES.TASK} element ={<TaskCounterContainer />} />
            <Route path={ROUTE_NAMES.REDUX_COUNTERS} element ={<ReduxCounterContainer />} />
            <Route path={ROUTE_NAMES.TODO_LIST} element ={<TodoListContainer />} />
            <Route path={ROUTE_NAMES.DATA_FETCH} element ={<DataFetchingContainer />} />
            <Route path={ROUTE_NAMES.DATA_FETCH_TWO} element ={<DataFetchingContainerTwo />} />
            <Route path={ROUTE_NAMES.SEARCH_REQUEST} element ={<SearchRequest />} />
            <Route path={ROUTE_NAMES.TODO_LIST_SEARCH} element ={<TodoListContainerSearch />} />
        </Routes>
    )
}

export default Router;


