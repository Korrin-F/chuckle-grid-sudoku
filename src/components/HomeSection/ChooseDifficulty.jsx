import Form from 'react-bootstrap/Form';

function ChooseDifficulty(props) {
    const {handleDifficultyChange, headerStyle} = props;
  return (
    <Form.Group className="mb-3" controlId="gameDifficulty">
        <Form.Label ><h2 style={headerStyle}>Choose Your Difficulty</h2></Form.Label>
        <Form.Select aria-label="Game Difficulty" onChange={handleDifficultyChange}>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
        </Form.Select>
    </Form.Group>
  )
}

export default ChooseDifficulty;