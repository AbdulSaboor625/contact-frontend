import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditContact(props) {
  const [contact, setContact] = useState(props.contact);
  const navigate = useNavigate();
  const editContact = (e) => {
    e.preventDefault();
    props.editContactHandler(contact);
    setContact({ name: "", number: "" });
    navigate("/");
  };

  return (
    <>
      <div className="BodyContainer">
        <div className="container">
          <h2>Update Contact</h2>
          <form action="#" className="Form" onSubmit={editContact}>
            <div className="textBox">
              <input
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />
            </div>
            <div className="textBox">
              <input
                type="number"
                placeholder="Phone No"
                value={contact.contactNumber}
                onChange={(e) =>
                  setContact({ ...contact, contactNumber: e.target.value })
                }
                required
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
