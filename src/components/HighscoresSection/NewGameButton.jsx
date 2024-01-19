import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NewGameButton() {
    return (
        <div className="text-center">
            <Link to="/">
            <Button variant="info">New Game</Button>
            </Link>
      </div>
    )
}

export default NewGameButton;
