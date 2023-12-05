// function welcome() {
//   return <div>Welcome to Candy Crush</div>;
// }
// welcome();

import { useEffect, useState } from "react";
const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const candyCrush = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

const checkForColumnOfThree = () => {
for (let i =0; i < 47; i++) {
    const columnOfThree = [i, i + width * 2]
    const decidedColor = currentColorArrangement[i]
    if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
        columnOfThree.forEach(square => currentColorArrangement[square] = "")
    }
}
}

  function createBoard() {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  }
  useEffect(() => {
    createBoard();
  }, []);

useEffect(() => {
    setInterval(() => {
checkForColumnOfThree()
    }, 100)
    return () => clearInterval(timer)

}, [checkForColumnOfThree])

  console.log(currentColorArrangement);

  return (
    <div>
      <div>Welcome to Candy Crush</div>
      <div className="app">
        <div className="game">
          {currentColorArrangement.map((candyColor, index) => (
            <img 
            key={index} 
            style={{ backgroundColor: candyColor }} 
            src=""
            alt={candyColor}
           />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default candyCrush;
