import { useEffect, useState } from "react";
import EditJournalForm from "./Components/EditJournalForm";
import AddJournalForm from "./Components/AddJournalForm";
import Entries from "./Components/Entries";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function App() {
  const initialFormState = { id: null, name: '', entry: '' };
  const [ entry, setEntry ] = useState(initialFormState);
  const [ list, setList ] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const [ editEntry, setEditEntry ] = useState(initialFormState);

  // when a user clicks 'Create Entry' button in component 'AddJournalForm'
  const createEntry = () => {

    const errMessage = () => {
      alert('You need to provide a title and journal entry to publish.')
    }

    const newEntry = () => {
      entry.id = uuid();
      setList(list.length === 0 ? [entry] : [...list, entry] );
      setEntry(initialFormState);
    }

    if (entry.name === '' || entry.entry === '') {
      errMessage()
    } else {
      newEntry();
    }

  }

  useEffect(() => {
    console.log(list)
  }, [list])

  // when user clicks 'Edit Entry' button in component 'Entries'
  const editMode = (e) => {
    setEditing(true);
    const { id, name, value } = e.target;
    setEditEntry({id: id, name: name, entry: value});
  }

  // when user clicks 'Update Entry' button in component 'EditJournalForm'
  const updateEntry = (e) => {
    setEditing(false);
    const { id } = e.target;
    setList(list.map((item) => (item.id === id ? editEntry : item)));
  }

  // when user clicks 'Delete' button in component 'Entries'
  const deleteEntry = (e) => {
    setEditing(false);
    const { id } = e.target;
    setList(list.filter((item) => item.id !== id));
  }
  

  return (
    <Container  className="container" >
        <Row name='top' className="header mb-3 mt-3 bg-light"  >
          <h1>Journal</h1>
        </Row>
        <Row className="wrapper">
            <Col className="content-left mb-5 "  >
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
            </Col>
          <Col className="content-right">
            <Entries list={list} deleteEntry={deleteEntry} editMode={editMode} />          
          </Col>
        </Row>
    </Container>
  );
}

export default App;
