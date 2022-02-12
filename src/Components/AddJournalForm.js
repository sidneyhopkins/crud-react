import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function AddJournalForm ( props ) {
    const { entry, setEntry, createEntry } = props;

      // When a user types into any input field, update states
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEntry({...entry, [name]: value});
    }


    return (
        <div>
          <h2>Add Entry</h2>
          <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3">
            <Form.Control 
              type="title"
              placeholder="My title" 
              name="name"
              value={entry.name}
              onChange={handleInputChange} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Journal Entry">
            <Form.Control
              as="textarea"
              name="entry"
              placeholder="Type entry here"
              style={{ height: '100px' }}
              value={entry.entry} 
              onChange={handleInputChange} />
          </FloatingLabel>
          <Button variant="btn btn-outline-secondary" onClick={createEntry}>Add Entry</Button>
        </div>
    );
}

export default AddJournalForm;



