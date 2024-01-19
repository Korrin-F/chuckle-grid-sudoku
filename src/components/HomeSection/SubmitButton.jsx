import Button from 'react-bootstrap/Button';

function SubmitButton(props) {
    const {handleFormSubmit} = props;

    return (
        <Button
            className="m-2"
            variant="success"
            onClick={handleFormSubmit}
            size="lg"
        >
            Submit
        </Button>
    );
}

export default SubmitButton;