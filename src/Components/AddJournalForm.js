import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function AddJournalForm ( props ) {
		const { entry, setEntry, createEntry } = props;

		// When a user types into input fields for this component, update states
		const handleInputChange = (e) => {
				const { name, value } = e.target;
				setEntry({...entry, [name]: value});
		}

		return (
				<Form onSubmit={(e) => e.preventDefault()} >
					<h2>Add Entry</h2>
						<FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3">
								<Form.Control 
								autocomplete='off'
								as="input"
								size='lg'
								type="text"
								placeholder="My title" 
								name="name"
								value={entry.name}
								onChange={handleInputChange} />
						</FloatingLabel>
						<FloatingLabel controlId="floatingTextarea2" label="Journal Entry">
								<Form.Control
								className='mb-3'
								size='sm'
								as="textarea"
								name="entry"
								placeholder="Type entry here"
								style={{ height: '150px' }}
								value={entry.entry} 
								onChange={handleInputChange} />
						</FloatingLabel>
						<Button 
								type="button" 
								variant="btn btn-primary"
								onClick={createEntry}>
								Add Entry
						</Button>
				</Form>
		);
}

export default AddJournalForm;



