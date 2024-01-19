import { Button } from "react-bootstrap";


function GambleButton(props) {
    const {handleClick} = props;

  return (
    <Button
      className="m-2"
      variant="danger"
      onClick={handleClick}
      size="lg"
    >
      Gamble
    </Button>
  );
}

export default GambleButton;