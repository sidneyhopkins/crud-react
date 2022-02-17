import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Entries ( props ) {
    const { list, editMode, deleteEntry  } = props;

    return (
        <Container fluid className='entry-box'>
            <h2>Entries</h2>
            <div className='entry-flex'>
                {list.length !== 0 ? (
                list.map((item, index) => {
                    return (
                        <Card key={item.id} className={'card mb-3  text-dark '} >
                            <Card.Header>
                              <Card.Subtitle className="card-sub mt-2 mb-3 text-start">Entry {index + 1}</Card.Subtitle>
                              <Card.Title className="card-text mb-2 text-dark">{item.name}</Card.Title>
                            </Card.Header>   

                            <Card.Body>
                                <Card.Text className='card-text text-dark'>{item.entry}</Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                <h6 className="card-sub mb-3 text-center">Last edited on {item.date}</h6>
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