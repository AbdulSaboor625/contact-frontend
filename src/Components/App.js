import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import Contactlist from "./Contactlist";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import axios from "axios";


function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [contacts, setContacts] = useState([]);

  // fetch all the contacts from backend
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // add new Contact
  const addHandler = (contact) => {
    if (contact.name !== "" && contact.number !== "") {
      axios
        .post(`${baseUrl}/api/contacts`, {
          name: contact.name,
          contactNumber: contact.number,
        })
        .then((res) => {
          setContacts([...contacts, res.data]);
        })
        .catch((err) => {});
    }
  };

  const removeContactHandler = (id) => {
    console.log(id);
    axios
      .delete(`${baseUrl}/api/contacts/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };

  const [editContact, setEditContact] = useState({
    id: "",
    name: "",
    number: "",
  });
  const editContactHandler = async (contact) => {
    await axios
      .get(`${baseUrl}/api/contacts/${contact._id}`)
      .then((res) => {
        setEditContact(res.data);
      })
      .catch((err) => {});
  };

  const editChanger = (contact) => {
    console.log(contact);
    axios
      .patch(`${baseUrl}/api/contacts/${contact._id}`, {
        name: contact.name,
        contactNumber: contact.contactNumber,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const searchQuery = (search) => {
    // setSearchText(search);
    // if (searchText !== "") {
    //   const newContactlist = contacts.filter((contact) => {
    //     return Object.values(contact)
    //       .join(" ")
    //       .toLowerCase()
    //       .includes(searchText.toLowerCase());
    //   });
    //   setSearchResult(newContactlist);
    // } else {
    //   setSearchResult(contacts);
    // }
  };

  const [contDetail, setContDetail] = useState([]);

  const contactDetail = (contactdetail) => {
    setContDetail(contactdetail);
    // console.log(contactdetail)
  };

  return (
    <div className="App">
      <Router>
        <Header heading="Contact Manager" />
        <Routes>
          <Route
            exact
            path="/add-contact"
            element={<AddContact addHandler={addHandler} />}
          />
          <Route
            exact
            path="/editContact"
            element={
              <EditContact
                contact={editContact}
                editContactHandler={editChanger}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Contactlist
                // contacts={searchText.length < 1 ? contacts : searchResult}
                contacts={contacts}
                getContactId={removeContactHandler}
                getEditContact={editContactHandler}
                searchText={searchText}
                searchQuery={searchQuery}
                contacthandler={contactDetail}
              />
            }
          />
          <Route
            exact
            path="/:id"
            element={<ContactDetail contactId={contDetail._id} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
