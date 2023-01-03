import React from 'react'
import ReactDOM from 'react-dom/client'

 const HeaderElement = (
    <ul className='nav'>
        <li className='logo'><a href="">Logo</a></li>
        <li className='searchBar'><input type='search' ></input></li>
        <li className='user'><a href="">Icon</a></li>
    </ul>
 )

  
 const HeaderComponent = ()=>{
    return(
        <div className='header'>
            {HeaderElement}
        </div>
    )
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<HeaderComponent />)
