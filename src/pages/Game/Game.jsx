import GridSection from "../../components/GameGrid/GridSection";
import axios from "axios";
import { useState, useEffect } from 'react';

function Game() {

    const [unsolvedDataSudoku, setUnsolvedDataSudoku] = useState([])
    console.log(unsolvedDataSudoku);
    
      useEffect(() => {
        async function sudokuApi(){

            const difficulty = '';
            const options = {
            method: 'GET',
            url: 'https://sudoku-board.p.rapidapi.com/new-board',
            params: {
              diff: difficulty,
              stype: 'list',
              solu: 'true'
            },
            headers: {
              'X-RapidAPI-Key': '2e13952d57msh0b9a07691f3383ep15d154jsn3c910cbadbe9',
              'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
            //   console.log(response.data);
        
            const unsolvedDataSudoku = response.data.response['unsolved-sudoku'];
        
            setUnsolvedDataSudoku(unsolvedDataSudoku);
        
          } catch (error) {
              console.error(error);
          }}
          sudokuApi();
      }, [])
    return (
        <>
            <GridSection unsolvedDataSudoku = {unsolvedDataSudoku}/>
        </>
    )
}

export default Game;