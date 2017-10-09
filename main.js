$(document).ready(function(){
        //switching keyboards
    $('#keyboard-upper-container').hide();
    $('html').on('keydown',function(e){ 
        if (e.which == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show ();
        };   
    });
    $('html').keyup(function(e){
        if (e.which == 16) {
            $('#keyboard-lower-container').toggle();
            $('#keyboard-upper-container').toggle();   
        };
    });

    $('#yellow-block').animate({
        left: '+=8'
    });
    $('html').keypress(function() {
        $('#yellow-block').animate({
            left: '+=15'
        }, 'fast'); 
    })
        //hightlight characters on html with keystroke
    $('html').on('keypress', function(e){
        var characterId = e.which;
        $('#'+characterId).addClass('highlight');
    });
    $('html').on('keyup', function(){
        $('.highlight').removeClass('highlight');
    });

        //sentence display    
    var sentenceIndex = 0;
    $(sentenceIndex).addClass('reset');
    var sentence = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $('#sentence').text(sentence[sentenceIndex]);
    var letterIndex = 0;
    $(letterIndex).addClass('reset');
    var wrongCount = 0;
    $(wrongCount).addClass('reset');
    var sentenceNonArray = (sentence).join(' ');
    var wordCount = (sentenceNonArray).split(' ');
    console.log(sentenceNonArray);
    console.log(wordCount);
    console.log(wordCount.length);


    //Timer and Words per minute
    var seconds = 0;
    //Timer and Words per minute ending
    


    var letterCharacter = sentence[sentenceIndex].charAt(letterIndex);        
    console.log(letterCharacter);            
    $('#target-letter').text(letterCharacter);
    
    console.log(sentence[sentenceIndex].length);

    $('html').keypress(function(e){ 
        var characterId = e.which;
        if ($('#'+characterId).text() == letterCharacter) {
            console.log('right');
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>'); 
        } else if ($('#'+characterId).text() !== letterCharacter) {
            console.log('wrong');
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            wrongCount++;
        } else {
            //once it is finished it continues with giving wrong
            $('#feedback').append('Finished!');
        }
        letterIndex++;
        letterCharacter = sentence[sentenceIndex].charAt(letterIndex);
        $('#target-letter').text(letterCharacter);
        $('#sentence').text(sentence[sentenceIndex]);
        
        // skipping first letter in each new sentence! Counts 'spaces' as incorrect
        if (letterIndex == sentence[sentenceIndex].length){
            sentenceIndex++;
            $('#yellow-block').animate({
                left: '-=' + ((letterIndex + 1)* 15)
            });
            letterIndex = -1; 
            };
        if (sentenceIndex == sentence.length) {
            var wordsPerMinute = Math.floor(wordCount.length / (seconds / 60) - (2 * wrongCount));
            console.log(Math.floor(wordCount / seconds / 60));
            alert('Words Per Minute = ' + wordsPerMinute);
            function playAgain() {
                var confirm = confirm('Would you like to play again?');
                    if (confirm == true) {
                        window.location.reload();
                    } else {
                        $('#feedback').text(wordsPerMinute);
                    };
            };
        };
        console.log(wrongCount);
    });

        //Timer and Words per minute
    var seconds = 0;
    $('html').one('keypress', function() {
    var timerTest = setInterval(function(){ myTimer() }, 1000);
    
    function myTimer() {
        seconds++;
        console.log(seconds);
    };
    });
    

    //confirm not working
    });
    $("#confirm").on("click", function () {
        if (window.confirm("Would you like to play again?")) {
            console.log('hi');
            window.location.reload();
        };
});