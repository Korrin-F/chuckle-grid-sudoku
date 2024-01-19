import Form from 'react-bootstrap/Form';

function SaveName(props) {
    const {handleTextChange} = props;
    const score = 100; //get this from local storage
    return (
        <Form.Group className="mb-3" controlId="savename">
            <Form.Label><h4>Your Score is <span>{score}</span>!</h4></Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="savename" onChange={handleTextChange} />
        </Form.Group>
    )
}

export default SaveName;