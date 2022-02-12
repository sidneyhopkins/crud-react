import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from 'react';


function EditJournalForm ( props ) {
    const { entry, setEntry, currentEntry, setCurrentEntry, updatedEntry, setEditing, setUpdatedEntry} = props;
    // const [ entry, setEntry ] = useState(props.currentEntry);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentEntry({...entry, [name]: value});
    }


    return (
        <div>
          <h2>Edit Entry</h2>
          <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3">
            <Form.Control 
              type="title"
              placeholder="My title" 
              name="name"
              value={currentEntry.name}
              onChange={handleInputChange} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Journal Entry">
            <Form.Control
              as="textarea"
              name="entry"
              placeholder="Type entry here"
              style={{ height: '100px' }}
              value={currentEntry.entry} 
              onChange={handleInputChange}  />
          </FloatingLabel>
          <Button 
            id={entry.id}
            variant="btn btn-outline-secondary"
            onClick={(id) => updatedEntry(id)}>
            Update Entry
          </Button>
          <Button 
            variant="btn btn-outline-secondary" 
            onClick={() => setEditing(false)}>
            Cancel
          </Button>

        </div>
    );
}

export default EditJournalForm;
