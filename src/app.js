import React from 'react'; // thay cho require
import ReactDOM from 'react-dom'; // thay cho require

import ListPlace from './components/user/ListPlace'; 

import ListJourney from './components/user/ListJourney'; 




ReactDOM.render(
    <ListPlace  />,
    document.getElementById('listPlace')
);

ReactDOM.render(
    <ListJourney  />,
    document.getElementById('listJourney')
);



//yarn add  add babel-core babel-loader babel-preset-react
//yarn add react react-dom
//babel-preset-es2015 --dev dich cac syntax