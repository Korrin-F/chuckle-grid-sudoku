import { Button } from "react-bootstrap";


function SolutionButton(props) {
    const {handleClick} = props;

  return (
    <Button
      className=""
      variant="warning"
      onClick={handleClick}
      size="m"
    >
      Solution
    </Button>
  );
}

export default SolutionButton;