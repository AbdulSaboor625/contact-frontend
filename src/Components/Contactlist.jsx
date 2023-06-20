import React, { useEffect, useRef, useState } from "react";
import ContactCard from "./ContactCard";
import ContactCount from "./ContactCount";
export default function Contactlist({
  contacts,
  getContactId,
  getEditContact,
  searchText,
  searchQuery,
  contacthandler,
}) {
  const deleteHandler = (id) => {
    getContactId(id);
  };
  const editHandler = (contact) => {
    getEditContact(contact);
  };

  const input = useRef("");
  const changeHandler = () => {
    searchQuery(input.current.value);
  };

  const [countContact, setCountContact] = useState("");

  useEffect(() => {
    setCountContact(contacts.length);
  }, [contacts]);
  const countCheck = (count) => {
    setCountContact(count);
  };

  const contactHandler = (contactdetail) => contacthandler(contactdetail);

  return (
    <div>
      <ContactCount contacts={contacts} countCheck={countCheck} />
      <div className="parentContainer">
        <input
          ref={input}
          type="text"
          placeholder="Search Contacts"
          value={searchText}
          className="searchBar"
          onChange={changeHandler}
        />
      </div>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact._id}
              contact={countContact > 0 ? contact : "No"}
              delHandler={deleteHandler}
              editHandler={editHandler}
              contactHandler={contactHandler}
            />
          );
        })}
      {countContact === 0 && (
        <div className="parentContainer">
          <div className="NotFound">No, Contacts Available</div>
        </div>
      )}
    </div>
  );
}
