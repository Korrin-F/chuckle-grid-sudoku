import Form from 'react-bootstrap/Form';

function SaveName(props) {
    const {handleTextChange, score} = props;

    return (
        <Form.Group className="mb-3" controlId="savename">
            <Form.Label><h4>Your Score is <span>{score}</span>!</h4></Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="savename" onChange={handleTextChange} />
        </Form.Group>
    )
}

export default SaveName;