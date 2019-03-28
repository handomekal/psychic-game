<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">

        // Array of the list of letters
        var result = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        var wins = 0;
        var losses = 0;
        var guessLeft = 8;
        var guessChoice = [];

        for (var i = 0; i < result.length; i++)

// Variables to keep track of wins, losses, and guesses
            var wins = 0;
        var losses = 0;
        var guesses = 0;

        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesText = document.getElementById("guesses-text");
        var userGuessText = document.getElementById("userGuess-text");
        //

        var result = (userGuess)

        document.onkeyup = function(event) {

            var userGuess = event.key;
            console.log(userGuessText)
            
            var userGuess = userGuess[Math.floor(Math.random() * userGuess.length)];

            var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
           
           winsText.textContent = "wins " + wins;
           lossesText.textContent = "losses " + losses;
           guessesText.textContent = "guesses " + guesses;
           userGuessText.textContent = "userGuess " + userGuess;

           if(options.indexOf(userGuess) > -1) {
               if(userGuess === userGuess) {
                   wins++
                   guessesLeft = 8;
                   userGuess = [];
               }
               if(userGuess != userGuess) {
                   guessLeft --;
                   guessChoice.push(userGuess);
               }
               if(userGuess != userGuess) {
                   guessesLeft = 8;
                   losses ++;
                   userGuess = [];
               }
           } 
            


        };
    </script>