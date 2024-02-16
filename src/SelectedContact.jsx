/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId}) { 

    const [contacts, setContacts] = useState(null);
    console.log("blahlasdfasdfasdfa " + contacts)
    console.log(selectedContactId)
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                    );
                console.log(response)
                const result = await response.json();
                console.log("Select result: " + result)
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