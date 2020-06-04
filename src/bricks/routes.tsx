/***
 *  Created by Sanchit Dang
 ***/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'views';

const Routes = (props: any) => {
    return (
        <Switch>
            <Route render={Home} />
        </Switch >
    );
};

export default Routes;