import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home";
import CounterContainer from "../pages/Counter/Containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/Containers/FunctionalCounterContainer";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import TaskCounterContainer from "../pages/HomeWork/containers/TaskCounterContainer";




const Router = () => {
    return(
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element ={<Home />} />
            <Route path={ROUTE_NAMES.COUNTER} element ={<CounterContainer />} />
            <Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element ={<FunctionalCounterContainer />} />
            <Route path={ROUTE_NAMES.LISTS} element ={<ListsContainer />} />
            <Route path={ROUTE_NAMES.TASK} element ={<TaskCounterContainer />} />
        </Routes>
    )
}

export default Router;


// в <Routes> мы будем складывать все новые страницы, которые мы будем создавать
//<Route path={ROUTE_NAMES.HOME} element ={<button><Link to={ROUTE_NAMES.COUNTER}>Counter</Link></button>} />