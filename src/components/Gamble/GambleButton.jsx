import { Button } from "react-bootstrap";


function GambleButton(props) {
    const {onClick} = props;

  return (
    <Button
    className="m-2"
      variant="danger"
      onClick={onClick}
      size="lg"
    >
      Gamble
    </Button>
  );
}

export default GambleButton;