import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FirstHook from './hooks/FirstHook';


ReactDOM.render(
         <FirstHook/>,
         document.getElementById("container")
);