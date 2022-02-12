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
  const [ currentEntry, setCurrentEntry ] = useState(initialFormState);
  const [ updatedEntry, setUpdatedEntry ] = useState();



  // const handleKeyPress = (event) => {
  //  if (event.keyCode === 13) {
  //    createEntry();
  //   }
  // }

  // when a user clicks 'Create Entry'
  const createEntry = () => {
    entry.id = list.length + 1;
    console.log(entry.id);
    setList( [...list, entry] );
    setEntry(initialFormState);
    console.log(list);
  }


  // when user clicks 'Edit Entry' button
  const editEntry = (item) => {
    setEditing(true);

    setCurrentEntry({id: item.id, name: item.name, entry: item.entry})
  }

  // when user clicks 'Update Entry' button
  const updateEntry = (id, updatedEntry) => {
    setEditing(false);
    console.log(id.id);

    setEntry((entry) => (entry.id === id ? updatedEntry : entry))
  }
  

  const deleteEntry = (e) => {
    const listId = parseInt(e.target.id);
    setList(list.filter((item) => item.id !== listId))
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
            entry={entry} 
            updateEntry={updateEntry} 
            setEditing={setEditing}
            currentEntry={currentEntry}  />
          ) : (
            <AddJournalForm 
              setEntry={setEntry}
              entry={entry} 
              createEntry={createEntry} />
          )}
            
        </div>

        <div className="content-right">
          <Entries list={list} deleteEntry={deleteEntry} editEntry={editEntry} />          
        </div>

      </div>


    </div>
  );
}

export default App;
