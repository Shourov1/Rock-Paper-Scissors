const game = ()=> {
	let pScore = 0;
	let cScore = 0;


	//Start the game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button"); 
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");


		playBtn.addEventListener("click", ()=> {
		  introScreen.classList.add("fadeOut");
		  match.classList.add('fadeIn');
		});
	};

//Play Match
const playMatch = () => {
	const options = document.querySelectorAll('.options button');
	const playerHand = document.querySelector('.player-hand');
	const computerHand = document.querySelector('.computer-hand');
	const hands = document.querySelectorAll('.hands img');

	hands.forEach(hand =>{
		hand.addEventListener('animationend', function(){
			this.style.animation = '';
		});
	});
	//Computer Options
	const computerOptions = ['rock', 'paper', 'scissors'];

	options.forEach(option=>{
		option.addEventListener('click', function(){
			//Computer selections
			const computerNumber = Math.floor(Math.random() * 3);
			const computerChoice = computerOptions[computerNumber]; 
			
			setTimeout(() => {
				//compare hands
			compareHands(this.textContent, computerChoice);


			//Update images
			playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
 
			}, 2000);

          //ANimation
          playerHand.style.animation = 'shakePlayer 2s ease';
          computerHand.style.animation = 'shakeComputer 2s ease';

		});
	});
};	


const updateScore = () => {
	const playerScore = document.querySelector('.player-score p');
	const computerScore = document.querySelector('.computer-score p');
	playerScore.textContent = pScore;
	computerScore.textContent = cScore;
}


const compareHands = (playerChoice, computerChoice) => {
	const winner = document.querySelector(".winner");
	//For a tie
	if(playerChoice === computerChoice) {
		winner.textContent = 'It is a tie';
		return; 
	}
	if(playerChoice === 'rock'){
		if (computerChoice === 'scissors'){
			winner.textContent = 'Players Wins!';
			pScore++;
			updateScore();
			checkGameEnd();
			return;
		}else{
			winner.textContent = 'Computer Wins!';
			cScore++;
			updateScore();
			checkGameEnd();
			return;
		}
	}
	//check for paper
	if(playerChoice === 'paper'){
		if (computerChoice === 'scissors'){
			winner.textContent = 'Computer Wins!';
			cScore++;
			updateScore();
			checkGameEnd();
			return;
		}else{
			winner.textContent = 'Player Wins!';
			pScore++;
			updateScore();
			checkGameEnd();
			return;
		}
	}
	//Check for Scissors
	if(playerChoice === 'scissors'){
		if (computerChoice === 'rock'){
			winner.textContent = 'Computer Wins!';
			cScore++;
			updateScore();
			checkGameEnd();
			return;
		}else{
			winner.textContent = 'Player Wins!';
			pScore++;
			updateScore();
			checkGameEnd();
			return;
		}
	}
}

function checkGameEnd() {

	const winner = document.querySelector(".winner");

    if (pScore === 5 || cScore === 5) {
        winner.textContent = 'Draw Game! Try again!'
        pScore = 0;
        cScore = 0;
    }

    if (pScore === 5) {
        winner.textContent = 'You Win! Play again!';
        pScore = 0;
        cScore = 0;


    } else if (cScore === 5) {
        winner.textContent = 'Computer Win! Try again!'
        pScore = 0;
        cScore = 0;

    }
};


 //Is call all the inner function
 startGame();
 playMatch();

};


//Start the game
game();
