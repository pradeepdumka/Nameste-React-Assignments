import React from 'react'
import ReactDOM from 'react-dom/client'

let heading1 = React.createElement('h1',{
    id:"heading1",
    key:'h1'
},'This is Heading - 1') ;

let heading2 = React.createElement('h2',{
    id:"headllling2",
    key:'h2'
},'This is Heading 3chh') ;

let div = React.createElement('div',{
    id:"container"
},[heading1,heading2]) ;

let root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(div)