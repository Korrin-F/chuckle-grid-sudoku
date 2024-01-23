import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const style = {
    backgroundColor: "var(--pink)",
    borderRadius: "1rem",
    border: "outset 0.5rem var(--pink)",
    boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
    color: "white",
    fontFamily: "var(--fontTwo)",
    width: "max-content"
  }

function NewGameButton() {
    const navigate = useNavigate();

    const handleNaviation = () => {
        navigate('/');
    }

    return (
        <div className="text-center">
            <Link to="/">
                <Button 
                size="lg"
                onClick={handleNaviation}
                style={style}
                >
                    New Game
                </Button>
            </Link>
      </div>
    )
}

export default NewGameButton;
