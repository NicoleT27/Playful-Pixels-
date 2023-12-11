export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
export function checkPassword(input) {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }

  export function calculateWinner(squares) {
    const winningPatterns = [
      [0, 1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let i=0; i < winningPatterns.length; i++) {
      const [a,b,c] = winningPatterns[i];

      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    } 

    return null;
  }

