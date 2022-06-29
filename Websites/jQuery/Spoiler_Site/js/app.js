//Create the spoiler button
const $btn = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($btn);

//Hide the spoiler text
$('.spoiler span').hide();

//When the button is pressed
$('.spoiler').on('click', 'button', (event) => {
    //Show the spoiler
    $(event.target).prev().show();
    //Hide the button
    $(event.target).hide();
});




