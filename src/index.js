import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));


function getSearch() {
    var parsedSearch;
    parsedSearch = window.parsedSearch || (function() {
      var match, re, ret;
      re = /\??(.*?)=([^\&]*)&?/gi;
      ret = {};
      while (match = re.exec(document.location.search)) {
        ret[match[1]] = match[2];
      }
      return window.parsedSearch = ret;
    })();
    return parsedSearch
}
const search_params = getSearch()
const keys = Object.keys(search_params)

if ( keys.includes('server_url') && keys.includes('server_key') && keys.includes('email') && keys.includes('name') && keys.includes('user_uid')){
    root.render(
        <Chat />
    );
}else{
    root.render(
        <App />
    );
}


