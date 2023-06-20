import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:3001/api/contacts/${id}`)
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="parentContainer">
      <div className="details">
        <div className="detailname">
          <b>Name:</b> {contact.name}
        </div>
        <div className="detailnumber">
          <b>Number:</b> {contact.contactNumber}
        </div>
      </div>
    </div>
  );
}
