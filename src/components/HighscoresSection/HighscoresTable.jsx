
import Table from 'react-bootstrap/Table';

const styles = {
  headers: {
      fontFamily: "var(--fontThree)",
      fontSize: "1.5rem",
      borderBottom: "thick solid var(--orange)"
  },
  data: {
      fontFamily: "var(--fontThree)",
      fontSize: "1.25rem",
  }
}

function HighScoresTable() {

    // Function to get high scores from local storage
    const getHighScoresFromLocalStorage = () => {
        try {
        // Retrieve existing scores from local storage
        return JSON.parse(localStorage.getItem('highScores')) || [];
        } catch (error) {
        console.error('Error retrieving high scores from local storage:', error);
        return [];
        }
    };

    

  return (
 
     <Table striped >
        <thead>
          <tr style={styles.headers}>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* maybe dynamically generate rows based on highScores array/info */}
          {getHighScoresFromLocalStorage().map((score, index) => (
              <tr key={index} style={styles.data}>
                <td >{score.name}</td>
                <td >{score.score}</td>
              </tr>
          ))}
        </tbody>
      </Table>
     
  );
};

export default HighScoresTable;