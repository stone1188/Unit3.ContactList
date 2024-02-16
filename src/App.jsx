/* eslint-disable react/prop-types */
import ContactList from './ContactList'
import SelectedContact from './SelectedContact';
import { useState } from 'react'

import './App.css'

function App() {
 const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    
     {selectedContactId ? (
     <SelectedContact selectedContactId={selectedContactId} 
        setSelectedContactId={setSelectedContactId}/>) 
     : (
        <ContactList />
      )}
    </>
  )
}

export default App
