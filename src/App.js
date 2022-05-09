import { useState } from "react";
import EditJournalForm from "./Components/EditJournalForm";
import AddJournalForm from "./Components/AddJournalForm";
import Entries from "./Components/Entries";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
	const initialFormState = { id: null, name: '', entry: '', date: '' };
	const resetFormState = { id: null, name: '', entry: '', date: '' };
	const [ entry, setEntry ] = useState(initialFormState);
	const [ list, setList ] = useState([]);
	const [ editing, setEditing ] = useState(false);
	const [ editEntry, setEditEntry ] = useState(initialFormState);


	// date creator
	const createNewDate = () => {
			let date = new Date();
			let d = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
			let t = date.toLocaleTimeString();
			return `${d} at ${t}`;
	}

	// when a user clicks 'Create Entry' button in component 'AddJournalForm'
	const createEntry = () => {

			const newEntry = () => {
					entry.id = uuid();
					entry.date = createNewDate();
					setList(list.length === 0 ? [entry] : [...list, entry] );
					setEntry(resetFormState);
			}

			if (entry.name === '' && entry.entry === '') {
					entry.entry = 'No entry.';
					entry.name = 'No Title';
					newEntry()
			} else if (entry.name === '') {
					entry.name = 'No Title';
					newEntry()
			} else if (entry.entry === '') {
					entry.entry = 'No entry.';
					newEntry();
			} else {
					newEntry();
			}
	}

// when user clicks 'Edit Entry' button in component 'Entries'
const editMode = (e) => {
	setEditing(true);
	const { id, name, value } = e.target;
	setEditEntry({id: id, name: name, entry: value, date: createNewDate()});
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
		<Container className="container" >
			<Row name='top' className="header mb-5 mt-4">
					<h1>Journal</h1>
			</Row>
			<Row className="wrapper">
				<Col className="content-left mb-5 pt-2 pb-3">
					{editing ? (
						<EditJournalForm 
						setEditing={setEditing}
						editEntry={editEntry}
						setEditEntry={setEditEntry}
						updateEntry={updateEntry} />
					) : (
						<AddJournalForm 
						setEntry={setEntry}
						entry={entry} 
						createEntry={createEntry} />
					)}  
				</Col>
				<Col className="content-right pb-3 mb-3">
					<Entries list={list} deleteEntry={deleteEntry} editMode={editMode} />          
				</Col>
			</Row>
		</Container>
	);
}

export default App;
