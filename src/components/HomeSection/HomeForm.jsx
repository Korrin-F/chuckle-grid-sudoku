import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChooseDifficulty from './ChooseDifficulty';
import EnterMotivation from './EnterMotivation';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import StartSound from '../ButtonSounds/StartSound';

const styles = {
    headers: {
        color: "var(--yellow)",
        fontWeight: "bold",
        fontFamily: "var(--fontThree)",
        fontStyle: "bold",
        // textShadow: "3px 2px 6px var(--shadow), 3px 2px 4px var(--shadow-teal)",
        textShadow: "-1px -1px 2px rgba(255,255,255,0.5), 1px 1px 2px rgba(70,70,70,0.7)"
    },
    button: {
        backgroundColor: "var(--pink)",
        borderRadius: "1rem",
        border: "outset 0.5rem var(--pink)",
        boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
        color: "white",
        fontFamily: "var(--fontTwo)",
        width: "max-content"
    }
}
 

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
        // <Container className="py-3 mb-5 px-0 mx-0">
            <Row className="justify-content-center text-center m-0 p-0 w-100 mb-3">
                <Col xs sm="" md="7" lg="6">
                    <Stack direction="virtical" gap={4} as={'form'} className="p-2 m-0">
                        <ChooseDifficulty handleDifficultyChange={handleDifficultyChange} headerStyle={styles.headers}/>
                        <EnterMotivation handleTextChange={handleTextChange} headerStyle={styles.headers}/>
                        <SubmitButton handleFormSubmit={handleFormSubmit} style={styles.button}/>
                    </Stack>
                </Col>
            </Row>
        // </Container>
    )
}

export default HomeForm;