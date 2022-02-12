import { useState } from "react";
import EditJournalForm from "./Components/EditJournalForm";
import AddJournalForm from "./Components/AddJournalForm";
import Entries from "./Components/Entries";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const initialFormState = { id: null, name: '', entry: '' };
  const [ entry, setEntry ] = useState(initialFormState);
  const [ list, setList ] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const [ editEntry, setEditEntry ] = useState(initialFormState);

  // when a user clicks 'Create Entry' button in component 'AddJournalForm'
  const createEntry = () => {
    entry.id = list.length + 1;
    setList( [...list, entry] );
    setEntry(initialFormState);
  }

  // when user clicks 'Edit Entry' button in component 'Entries'
  const editMode = (item) => {
    setEditing(true);
    const journal = item.target;
    const journalId = parseInt(journal.id);    
    setEditEntry({id: journalId, name: journal.name, entry: journal.value})
  }

  // when user clicks 'Update Entry' button in component 'EditJournalForm'
  const updateEntry = (e) => {
    const { id } = e.target;
    const journalId = parseInt(id);
    setEditing(false);
    setList(list.map((item) => (item.id === journalId ? editEntry : item)));
  }

  // when user clicks 'Delete' button in component 'Entries'
  const deleteEntry = (e) => {
    setEditing(false);
    const listId = parseInt(e.target.id);
    setList(list.filter((item) => item.id !== listId));
  }

  return (
    <div className="Container">
        <header>
          <h1>Journal</h1>
        </header>
        <div className="wrapper">
          <div className="content-left">
            {editing ? (
              <EditJournalForm 
              setEditing={setEditing}
              editEntry={editEntry}
              setEditEntry={setEditEntry}
              updateEntry={updateEntry}  />
            ) : (
              <AddJournalForm 
                setEntry={setEntry}
                entry={entry} 
                createEntry={createEntry} />
            )}  
          </div>
          <div className="content-right">
            <Entries list={list} deleteEntry={deleteEntry} editMode={editMode} />          
          </div>
        </div>
    </div>
  );
}

export default App;
