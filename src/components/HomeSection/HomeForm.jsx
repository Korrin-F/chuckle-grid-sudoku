import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ChooseDifficulty from './ChooseDifficulty';
import EnterMotivation from './EnterMotivation';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
 

function HomeForm() {
    const [searched, setSearched] = useState('');
    const [difficulty, setDifficulty] = useState('1');
    const navigate = useNavigate();

    const handleDifficultyChange = (event) => {
        event.preventDefault();
        setDifficulty(event.target.value);
    }

    const handleTextChange = (event) => {
        event.preventDefault();
        setSearched(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(searched);
        console.log(difficulty);
        // alert("Your motivation is " + searched + " and your difficulty is " + difficulty)
        //save to local storage
        localStorage.setItem('motivation', searched);
        localStorage.setItem('difficulty', difficulty, () => {
            setSearched('');
            setDifficulty('1');
        });
        //go to game page
        // window.location.href = "/game";
        navigate('/game');


    }
    
    
    return (
        <Container>
            <Row className="justify-content-center text-center">
                <Column className="col-6">
                    <Form>
                        <ChooseDifficulty handleDifficultyChange={handleDifficultyChange}/>
                        <EnterMotivation handleTextChange={handleTextChange} />
                        <SubmitButton handleFormSubmit={handleFormSubmit}/>
                    </Form>
                    {/* <Link to="/game" /> */}
                </Column>
            </Row>
        </Container>
    )
}

export default HomeForm;