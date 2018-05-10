import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import appRoutes from "../constants/appRoutes";


const Main = () => {
    return (
      <main>
        <Switch>
          {
            appRoutes.map((route,key)=>
            {
              if (route.redirect) {
                return <Redirect key={key} from={route.from} to={route.to}/>
              } else {
                return <Route key={key} path={route.path} component={route.component}/>
              }
            })
          }
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
);
