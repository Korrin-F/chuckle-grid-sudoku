import React from 'react';
import SetMotivation from '../../components/Giphy/SetMotivation';

const Home = (props) => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Welcome to Sudoku!</h1>
       

        <div className="mt-3">
          <button type="button" className="btn btn-primary mr-2">
            Easy
          </button>
          <button type="button" className="btn btn-warning mr-2">
            Medium
          </button>
          <button type="button" className="btn btn-danger">
            Hard
          </button>
          <SetMotivation motivation={props.motivation} setMotivation={props.setMotivation} />
        </div>
      </div>
      <div className="text-center mt-4">
        <button type="button" className="btn btn-lg btn-success">
          Play
        </button>
      </div>
      <br />
    </div>
  );
};

export default Home;