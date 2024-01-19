import Form from 'react-bootstrap/Form';

function EnterMotivation(props) {
    const {handleTextChange} = props;

    return (
        <Form.Group className="mb-3" controlId="motivation">
            <Form.Label><h4>What Motivates You?</h4></Form.Label>
            <Form.Control type="text" placeholder="Enter your motivation..." name="motivation" onChange={handleTextChange} />
        </Form.Group>
    )
}

export default EnterMotivation;