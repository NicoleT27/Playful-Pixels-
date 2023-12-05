const width = 8
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import redCandy from '../assets/images/red-candy.png'
import pinkCandy from "../assets/images/pink-candy.png"
import orangeCandy from "../assets/images/orange-candy.png"
import yellowCandy from "../assets/images/yellow-candy.png"
import greenCandy from "../assets/images/green-candy.png"
import rainbowCandy from "../assets/images/rainbow-candy.png"
import blank from '../assets/images/blank.png'


const candyColors = [
  rainbowCandy,
  greenCandy,
  orangeCandy,
  pinkCandy,
  redCandy,
  yellowCandy,
];

const candyCrush = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
const [squareBeingDragged,setSquareBeingDragged] = useState(null)
const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 3];
      const decidedColor = currentColorArrangement[i];
      if (
        columnOfFour.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

   const checkForRowOfFour = () => {
     for (let i = 0; i < 64; i++) {
       const rowOfFour = [i,i + 1,  i + 2, i + 3];
       const decidedColor = currentColorArrangement[i];
        const notValid = [5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64]
    if (notValid.includes(i)) continue
       if (
         rowOfFour.every(
           (square) => currentColorArrangement[square] === decidedColor
         )
       ) {
         rowOfFour.forEach(
           (square) => (currentColorArrangement[square] = blank)
         );
         return true;
       }
     }
   };

const checkForColumnOfThree = () => {
for (let i =0; i <= 47; i++) {
    const columnOfThree = [i, i + width, i + width * 2]
    const decidedColor = currentColorArrangement[i]
    if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
        columnOfThree.forEach(square => currentColorArrangement[square] = blank)
   return true
      }
}
}


const checkForRowOfThree = () => {
  for (let i = 0; i < 64; i++) {
    const rowOfThree = [i, i + 1, i +2];
    const decidedColor = currentColorArrangement[i];
    const notValid = [6,7,14,15,22,23,31,38,39,46,47,54,55,63,64]
    if (notValid.includes(i)) continue
    if (
      rowOfThree.every(
        (square) => currentColorArrangement[square] === decidedColor)) {
      rowOfThree.forEach((square) => (currentColorArrangement[square] = blank));
    return true;
    }
  }
};


const moveIntoSquareBelow = () => {
  for (let i = 0; i <= 55; i++) {
    const firstRow = [0,1,2,3,4,5,6,7]
    const isFirstRow = firstRow.includes(i)
    if(isFirstRow && currentColorArrangement[i] === blank) {
      let randomNumber = Math.floor(Math.random() * candyColors.length)
    currentColorArrangement[i]=candyColors[randomNumber]
    }
   if ((currentColorArrangement[i + width]) === blank) {
    currentColorArrangement[i+ width] = currentColorArrangement[i]
    currentColorArrangement[i] = ''
   }
    
  }
}


const dragStart= (e) => {
 setSquareBeingDragged(e.target)
}

const dragDrop = (e) => {
  setSquareBeingReplaced(e.target)
};

const dragEnd = (e) => {
  const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute("data-id"))
  const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute("data-id"))

currentColorArrangement[squareBeingReplacedId]= squareBeingReplaced.getAttribute("src")
currentColorArrangement[squareBeingDraggedId] =squareBeingDragged.getAttribute("src")

const validMoves = [
  squareBeingDragged -1,
  squareBeingDragged -width,
  squareBeingDragged +1,
  squareBeingDragged + width
]
const validMove = validMoves.includes(squareBeingReplacedId)

const isAColumnOfFour = checkForColumnOfFour()
const isARowOfFour = checkForRowOfFour()
const isAColumnOfThree = checkForColumnOfThree()
const isARowOfThree = checkForRowOfThree();

if(squareBeingReplacedId && validMove && isARowOfThree || isAColumnOfFour || isARowOfFour || isAColumnOfThree) {
  setSquareBeingDragged(null)
  setSquareBeingReplaced(null)
} else{
  currentColorArrangement[squareBeingReplacedId]=squareBeingReplaced.getAttribute("src")
  currentColorArrangement[squareBeingDraggedId] =
    squareBeingDragged.getAttribute("src");
setCurrentColorArrangement([...currentColorArrangement])
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

    useEffect(() => {
      createBoard();
    }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        checkForColumnOfFour();
        checkForRowOfFour();
        checkForColumnOfThree();
        checkForRowOfThree();
        moveIntoSquareBelow();
        setCurrentColorArrangement([...currentColorArrangement]);
      }, 100);
      return () => clearInterval(timer);
    }, [
      checkForColumnOfFour,
      checkForRowOfFour,
      checkForColumnOfThree,
      checkForRowOfThree,
      moveIntoSquareBelow,
      currentColorArrangement,
    ]);

    return (
      <div>
        <div className="welcome">
          Welcome to Candy Crush
          <FontAwesomeIcon icon={faCandyCane} />
        </div>

        <div className="app">
          <div className="game">
            {currentColorArrangement.map((candyColor, index) => (
              <img
                key={index}
                src={candyColor}
                alt={candyColor}
                data-id={index}
                draggable={true}
                onDragStart={dragStart}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={{ dragDrop }}
                onDragEnd={dragEnd}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default candyCrush;
