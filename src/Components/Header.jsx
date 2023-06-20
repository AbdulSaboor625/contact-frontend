import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
export default function Header( {heading , bgColor , textColor} ) {
    const headerStyle = {
        backgroundColor : bgColor ,
        color : textColor ,
    }
    const navigate = useNavigate()

  return (
    <>
        
            <header style={headerStyle}>
                <h2 onClick={ () => navigate('/') }> {heading} </h2>
            </header>
        
    </>
  )
}

Header.defaultProps = {
    heading : "Heading Text" ,
    bgColor : "rgb(0, 0, 0.4)" ,
    textColor : "#fff"
}
Header.prototype = {
    heading : PropTypes.string.isRequired ,
    bgColor : PropTypes.string.isRequired ,
    textColor : PropTypes.string.isRequired
}