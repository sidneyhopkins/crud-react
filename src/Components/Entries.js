import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Entries ( props ) {
    const { list, editMode, deleteEntry  } = props;




    return (
        <Container fluid className='entry-box'>
            <h2>Entries</h2>
            <div>
                {list.length !== 0 ? (
                list.map((item, index) => {
                    return (
                        <Card key={item.id} className={'card mb-3 bg-dark text-light'} >
                            <Card.Header>
                                <Card.Title className="mb-2 text-light">{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Entry no. {index + 1}</Card.Subtitle>
                            </Card.Header>   

                            <Card.Body>

                            
                                <Card.Text className='card-text text-light' >{item.entry}</Card.Text>
                            
                            </Card.Body>

                        <Card.Footer>
                        <a href='#top'>
                        <Button 
                            className="edit-button"
                            variant="btn btn-outline-info btn-md"
                            id={item.id}
                            name={item.name}
                            value={item.entry}
                            onClick={(e) => editMode(e)} >
                            Edit
                        </Button>
                        </a>
                        <Button
                            variant="btn btn-outline-warning btn-md"
                            id={item.id}
                            onClick={deleteEntry} >
                            Delete
                        </Button>

                        </Card.Footer>
                        </Card>
                    )
                })) : (<div>no entries yet</div>)
                }
            </div>
        </Container>
    );
}

export default Entries;