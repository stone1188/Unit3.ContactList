/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId}) { 

    const [contacts, setContacts] = useState(null);
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                    );
                const result = await response.json();
                setContacts(result);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);

    return (
         <>
        { contacts &&
        <tr >
             
            <td>{contacts.name}</td>
            <td>{contacts.email}</td>
            <td>{contacts.phone}</td>
            
        </tr>
        }
        </>
    )

}