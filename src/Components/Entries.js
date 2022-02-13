import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Entries ( props ) {
    const { list, editMode, deleteEntry  } = props;




    return (
        <div>
            <h2>Entries</h2>
            <div>
                {list.length !== 0 ? (
                list.map((item, index) => {
                    return (
                        <Card key={item.id} className={'card mb-3 bg-dark text-light'} style={{ width: '20rem' }}>
                            <Card.Header>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">entry no. {index + 1}</Card.Subtitle>
                            </Card.Header>   

                            <Card.Body>

                            
                                <Card.Text>{item.entry}</Card.Text>
                            
                            </Card.Body>

                        <Card.Footer>
                        <Button 
                            className=""
                            variant="btn btn-outline-secondary btn-sm"
                            id={item.id}
                            name={item.name}
                            value={item.entry}
                            onClick={(e) => editMode(e)} >
                            Edit
                        </Button>
                        <Button
                            variant="btn btn-outline-secondary btn-sm"
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
        </div>
    );
}

export default Entries;