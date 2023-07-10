import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='headerSection'>
       <div className="container">
            <h1>{title}</h1>;
        </div> 
    </div>
  )
}

export default Header;