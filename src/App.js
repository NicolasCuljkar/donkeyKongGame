import logo from './logo.svg';
import './App.css';
import { GameManager } from './GameManager';
import { PositionScore } from './PositionScore';
import { render } from '@testing-library/react';

function App() {

  const positionScore = PositionScore(1,1)
  const gameManager = GameManager(positionScore)


  const [gameOver, SetGameOver] = useState(false);

  function SetGameOver() {
    
  }

  function game() {

  }

  return (

  <game>
  while (gameManager) {
        
      }
  </game>
    
  

  );
}

export default App;
