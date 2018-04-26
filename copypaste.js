// Generate random number between 0 & 100
function getRandomNumber() {
    return Math.floor((Math.random() * 99) + 1);
}

// Start our game with a random number
var randomNumber = getRandomNumber();

// Start game with 0 guesses
var guessCounter = 0;

// Let the browser know when we click our 'Submit Guess' button we want to check the guess
$('#submitGuess').click(checkGuess);

function checkGuess(e) {
    // Select our form elements
    var guessInput = $('#guessedNumber');
    var guessFeedback = $('#guessFeedback');
    
    // Get the number guessed from the input field
    var guess = guessInput.val();
    
    // Add one to our guess counter (or, guessCounter++)
    guessCounter = guessCounter + 1;

    // Use conditional logic to give guess feedback
    if (guess > randomNumber) {
        guessFeedback.html('You guessed too high')
    } else if (guess < randomNumber) {
        guessFeedback.html('You guessed too low')
    } else {
        guessFeedback.html('You guessed right! It took you ' + guessCounter + ' tries. Start guessing to play again')
        
        // Reset random number and guess counter
        randomNumber = getRandomNumber();
        guessCounter = 0
    }
    
    // Reset guess input
    guessInput.val('');
    
    // Prevent browser from taking you to another page when clicking the button
    e.preventDefault();
}
