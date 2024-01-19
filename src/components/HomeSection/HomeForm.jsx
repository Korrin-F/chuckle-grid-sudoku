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
    const [searched, setSearched] = useState('cats'); //default cats
    const [difficulty, setDifficulty] = useState('1'); //default 1 (easy)
    const navigate = useNavigate(); //for navigation

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    }

    const handleTextChange = (event) => {
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
            //reset to defaults
            setSearched('cats');
            setDifficulty('1');
        });
        //go to game page
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
                </Column>
            </Row>
        </Container>
    )
}

export default HomeForm;