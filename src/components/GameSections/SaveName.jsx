import Form from 'react-bootstrap/Form';

const style = {
    borderColor: "var(--yellow)",
    fontFamily: "var(--fontFour)"
}

function SaveName(props) {
    const {handleTextChange, score} = props;

    return (
        <Form.Group className="mb-0" controlId="savename">
            <Form.Label className="pb-2"><h4>Your Score is <span>{score}</span>!</h4></Form.Label>
            <Form.Control style={style} type="text" placeholder="Enter your name" name="savename" onChange={handleTextChange} />
        </Form.Group>
    )
}

export default SaveName;