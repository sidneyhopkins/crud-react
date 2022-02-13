import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function EditJournalForm ( props ) {
    const { editEntry, setEditEntry, setEditing, updateEntry } = props;
    
    // When a user types into input fields for this component, update states
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditEntry({...editEntry, [name]: value});
    }



    return (
        <Form style={{ width: '20rem' }} >
          <h2>Edit Entry</h2>
          <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3">
            <Form.Control 
              type="title"
              placeholder="My title" 
              name="name"
              value={editEntry.name}
              onChange={handleInputChange} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Journal Entry">
            <Form.Control
              className={'mb-3'}
              as="textarea"
              name="entry"
              placeholder="Type entry here"
              style={{ height: '100px' }}
              value={editEntry.entry} 
              onChange={handleInputChange}  />
          </FloatingLabel>
          <Button 
            id={editEntry.id}
            name={editEntry.name}
            value={editEntry.entry}
            variant="btn btn-outline-secondary"
            onClick={(e) => updateEntry(e)}>
            Update Entry
          </Button>
          <Button 
            variant="btn btn-outline-secondary" 
            onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </Form>
    );
}

export default EditJournalForm;
