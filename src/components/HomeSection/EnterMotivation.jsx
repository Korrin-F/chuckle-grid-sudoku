import Form from 'react-bootstrap/Form';

function EnterMotivation(props) {
    const {handleTextChange, headerStyle} = props;

    return (
        <Form.Group className="mb-3" controlId="motivation">
            <Form.Label><h2 style={headerStyle}>What Motivates You?</h2></Form.Label>
            <Form.Control type="text" placeholder="Enter your motivation..." name="motivation" onChange={handleTextChange} />
        </Form.Group>
    )
}

export default EnterMotivation;