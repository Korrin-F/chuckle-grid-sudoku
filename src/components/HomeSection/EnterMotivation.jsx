import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function EnterMotivation(props) {
    const {handleTextChange, headerStyle} = props;

    return (
        <Stack direction="virtical" gap={2} className="" controlId="motivation">
            <Form.Label><h2 style={headerStyle}>What Motivates You?</h2></Form.Label>
            <Form.Control type="text" placeholder="Enter your motivation..." name="motivation" onChange={handleTextChange} />
        </Stack>
    )
}

export default EnterMotivation;