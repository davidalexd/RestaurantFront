import React from "react";
import { useParams} from "react-router";
import { CrudCategory } from "./Category/CrudCategory";
import { CrudAppPro } from "./Product/CrudAppPro";
//import { propTypes } from 'react-bootstrap/esm/Image';
//import { DashboardLink } from './DashboardLink';
import { Switch, Route } from "react-router-dom";
import UpdateState from "./Orders/UpdateState";

const DashboardContainer = () => {
  let { topic } = useParams();
  return (
    <>
      <Switch>
        {topic==="products" && <Route path="/maindashboard/dashboard/products" component={CrudAppPro}/>}
        {topic==="categories" && <Route Route path="/maindashboard/dashboard/categories"  component={CrudCategory}/>}
        {topic==="statusorder" && <Route Route path="/maindashboard/dashboard/statusorder"  component={UpdateState}/>}
      </Switch>
    </>
  );
};
export { DashboardContainer };
