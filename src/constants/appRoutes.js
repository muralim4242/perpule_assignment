import * as routeNames from "./routeNames";
import Finder from "components/content/Finder";

const appRoutes=[
  {
    path:routeNames.DASHBOARD,
    component:Finder
  },
  {
    redirect:true,
    from:"/",
    to:routeNames.DASHBOARD
  }
]


export default appRoutes;
