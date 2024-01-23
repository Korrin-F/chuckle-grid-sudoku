import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SubmitButton(props) {
    const { style } = props;
    const navigate = useNavigate();

    const handleNaviation = () => {
        navigate('/highscores');
    }

    return (
        <Button 
        style={style}
        onClick={handleNaviation} 
        >
            Highscores
        </Button>
    );
}

export default SubmitButton;