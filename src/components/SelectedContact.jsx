import ContactList from "./ContactList"
import { useState, useEffect } from "react";

export default function SelectedContact({ contactId, setSelectedContactId }) {
    const [selectedContact, setSelectedContact] = useState([]);
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
                );
                const data = await response.json();
                setSelectedContact(data);
            } catch (error) {
                console.error(error);
            }
        };
        if (contactId) {
            fetchContact();
        } else {
            setSelectedContact(null);
        }
    });
    return (
        <>
        {selectedContact ? (
            <div>
                <p>{selectedContact.name}</p>
                <p>{selectedContact.email}</p>
                <p>{selectedContact.phone}</p>
            </div>
        ) : (
            <ContactList setSelectedContactId={setSelectedContactId} />
        )}
        </>
    );
};