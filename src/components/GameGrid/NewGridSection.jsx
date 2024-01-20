import { useEffect, useState } from "react";
import NewGrid from "./NewGrid";

function NewGridSection(props) {
  const { updateScore } = props;
//   const [starterArray, setStarterArray] = useState([]);

//   useEffect(() => {
//     const masterArray = [
//       ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"],
//       ["A4", "A5", "A6", "B4", "B5", "B6", "C4", "C5", "C6"],
//       ["A7", "A8", "A9", "B7", "B8", "B9", "C7", "C8", "C9"],
//       ["D1", "D2", "D3", "E1", "E2", "E3", "F1", "F2", "F3"],
//       ["D4", "D5", "D6", "E4", "E5", "E6", "F4", "F5", "F6"],
//       ["D7", "D8", "D9", "E7", "E8", "E9", "F7", "F8", "F9"],
//       ["G1", "G2", "G3", "H1", "H2", "H3", "I1", "I2", "I3"],
//       ["G4", "G5", "G6", "H4", "H5", "H6", "I4", "I5", "I6"],
//       ["G7", "G8", "G9", "H7", "H8", "H9", "I7", "I8", "I9"]
//     ];

//     const starterArray = [];

//     // Iterate through masterArray and get the element values
//     for (let row of masterArray) {
//       let miniArray = [];
//       for (let cell of row) {
//         let element = document.getElementById(cell);
//         if (element) {
//           console.log(element.value);
//           miniArray.push(element.value);
//         } else {
//           console.log(`Element with ID ${cell} not found`);
//           miniArray.push(null); // or some default value
//         }
//       }
//       starterArray.push(miniArray);
//     }

//     console.log("starter array:", starterArray);
//     setStarterArray(starterArray);
//   }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <section className='container-fluid d-flex flex-grow-1' id='grid-section'>
      <div className='row justify-content-center text-center my-3 m-auto' id='grid-row'>
        <NewGrid updateScore={updateScore} />
      </div>
    </section>
  );
}

export default NewGridSection;
