import React, { useState } from 'react';


function SetMotivation(props) {

    const [searched, setSearched] = useState('');

    function handleCHange(event) {
        event.preventDefault();
        setSearched(event.target.value);
    }
    function handleSubmit() {
        console.log(searched);
        alert("Your motivation is " + searched)

        //save to local storage
        localStorage.setItem('motivation', searched);

        setSearched('');
    }

    return (
        <div>
            <input
                name="motivation"
                onChange={handleCHange}
                type="text"
                placeholder="Set your motivation..."
            />

            <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>Set Motivation
            </ button >

        </div>
    )

};

export default SetMotivation;
