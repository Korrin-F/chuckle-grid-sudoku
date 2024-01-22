import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function ChooseDifficulty(props) {
    const {handleDifficultyChange, headerStyle} = props;
  return (
    <Stack direction="virtical" gap={2}  className="" controlId="gameDifficulty">
        <Form.Label ><h2 style={headerStyle}>Choose Your Difficulty</h2></Form.Label>
        <Form.Select aria-label="Game Difficulty" onChange={handleDifficultyChange}>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
        </Form.Select>
    </Stack>
  )
}

export default ChooseDifficulty;