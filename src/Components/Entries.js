import Button from 'react-bootstrap/Button';




function Entries ( props ) {
    const { list, editEntry, deleteEntry,  } = props;

    return (
        <div>
            <h2>Entries</h2>
            <div>
                {list.length !== 0 ? (
                list.map((item) => {
                    return (
                    <div key={item.id} >
                        <div className="entryName" >{item.name}</div>
                        <div className="entryText" >{item.entry}</div>
                        <Button 
                            variant="btn btn-outline-secondary btn-sm"
                            id={item.id}
                            onClick={(item) => editEntry(item)} >
                            Edit Entry
                        </Button>
                        <Button
                            variant="btn btn-outline-secondary btn-sm"
                            id={item.id}
                            onClick={deleteEntry} >
                            Delete
                        </Button>
                    </div>
                    )
                })) : (<div>no entries yet</div>)
                }
            </div>
        </div>
    );
}

export default Entries;