import Button from 'react-bootstrap/Button';


function SubmitButton(props) {
    const {handleFormSubmit, style, name} = props;

    return (
        <Button
            className="m-auto mt-2 mb-4"
            variant="success"
            onClick={handleFormSubmit}
            size="lg"
            style={style}
        >
            {name} 
        </Button>
    );
}

export default SubmitButton;