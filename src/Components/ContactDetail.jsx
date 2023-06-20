import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [contact, setContact] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    axios
      .get(`${baseUrl}/api/contacts/${id}`)
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
