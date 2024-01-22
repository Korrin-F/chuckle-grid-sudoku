import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';

function SubmitButton(props) {
    const { style} = props;

    const handleNaviation = () => {
        return <Navigate to="/highscores" />
    }

    return (
        <Button 
        className="btn-primary"
        onClick={handleNaviation} 
        >
            Highscores
        </Button>
    );
}

export default SubmitButton;