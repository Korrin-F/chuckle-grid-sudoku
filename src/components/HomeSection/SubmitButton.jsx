import Button from 'react-bootstrap/Button';


function SubmitButton(props) {
    const {handleFormSubmit, style} = props;

    return (
        <Button
            className="m-auto mt-2"
            variant="success"
            onClick={handleFormSubmit}
            size="lg"
            style={style}
        >
            New Game
        </Button>
    );
}

export default SubmitButton;