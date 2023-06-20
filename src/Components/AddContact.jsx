import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact(props) {
  const [contact, setContact] = useState({ name: "", number: "" });
  const navigate = useNavigate()

  const addContact = (e) => {
    e.preventDefault();
    if (props.editContact) {
      setContact(props.editContact)
    }else {
    setContact({ name: "", number: "" });
    }
    props.addHandler(contact);
    navigate('/')
  };


  return (
    <>
    <div className="BodyContainer">
        <div className="container">
        <h2>Add Contact</h2>
        <form action="#" className="Form" onSubmit={addContact}>
          <div className="textBox">
            <input
              type="text"
              placeholder="Name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              required
            />
          </div>
          <div className="textBox">
            <input
              type="number"
              placeholder="Phone No"
              value={contact.number}
              onChange={(e) =>
                setContact({ ...contact, number: e.target.value })
              }
              required
            />
          </div>
              <button type="submit">Add Contact</button>
        </form>
      </div>
      </div>
    </>
  );
}
