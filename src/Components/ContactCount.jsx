import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactCount(props) {
  // const count = () => {
  //   props.countCheck(props.contacts.length)
  // }
  // count()
  return (
    <div className="parentContainer">
      <h3 className='NoContacts' style={{color:props.textCount}}>{ props.contacts.length} Contacts</h3>
      <Link to="/add-contact">
        <button className='addcontbtn'>Add Contacts</button>
      </Link>
    </div>
  )
}
