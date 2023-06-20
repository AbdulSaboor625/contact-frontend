import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ContactCard({
  contact,
  delHandler,
  editHandler,
  contactHandler,
}) {
  const navigate = useNavigate();
  return (
    <div className="parentContainer">
      <div className="item">
        <div className="Content" onClick={() => navigate(`/${contact._id}`)}>
          <div onClick={() => contactHandler(contact)}>
            <p className="clickable">
              <b>Name:</b> {contact.name}
            </p>
            <p className="clickable">
              <b>Phone No:</b> {contact.contactNumber}
            </p>
          </div>
        </div>
        <div className="buttons">
          <Link to="/editContact">
            <button className="editbtn" onClick={() => editHandler(contact)}>
              EDIT
            </button>
          </Link>
          <button className="delbtn" onClick={() => delHandler(contact._id)}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
