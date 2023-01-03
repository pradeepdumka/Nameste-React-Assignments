import React from 'react'
import ReactDOM from 'react-dom/client'
  

 const div = React.createElement('div',{
    className:'title'
 },
 [
    React.createElement('h1',{key:7},'This is  Heading H1.'),
    React.createElement('h2',{key:8},'This is  Heading H2.'),
    React.createElement('h3',{key:9},'This is  Heading H3.'),
 ]
 ) 

 const NestedHeading = (<div className='title'>
    <h1 key={1}>This is Heading 1 Using JSX </h1>
    <h2  key={2}>This is Heading 1 Using JSX </h2>
    <h3  key={3}>This is Heading 1 Using JSX </h3>
 </div>)


const HeaderComponent = ()=>{
    return (
        <div className='header'>
            <div className='logo'> <a>Logo#</a></div>
            <div className='menu'>
                <ul>
                    <li key='4'><a href="">Home</a></li>
                    <li key='5'><a href="">About</a></li>
                    <li key='6'><a href="">Contact US</a></li>
                </ul>
            </div>
        </div>
    )
}

const MenuHeader = ()=>{
    return (
        <ul>
            <li key='4'><a href="">Home</a></li>
            <li key='5'><a href="">About</a></li>
            <li key='6'><a href="">Contact US</a></li>
        </ul>
        )
 }


const HeaderComponent1 = ()=>(
        <div className='header'>
            <div className='logo'> <a>Logo#</a></div>
            <div className='menu'>
               {MenuHeader()}
            </div>
        </div>
);



 const root = ReactDOM.createRoot(document.getElementById('root'));
 const jsxRoot = ReactDOM.createRoot(document.getElementById('jsx-root'));

 const header = ReactDOM.createRoot(document.getElementById('header'));

 root.render(div);
 jsxRoot.render(NestedHeading);
 header.render(<HeaderComponent1 />);