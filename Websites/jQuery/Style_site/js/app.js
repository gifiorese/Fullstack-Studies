const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]'); //^ is "Starts with"
const $pdfs = $('a[href$=".pdf"]');
const $check = $("<label><input type='checkbox'>Allow PDF downloads</label>");

$secureLinks.attr('target', '_blank'); //Opens the link on a new tab
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', (event) => {
        if($(':checked').length === 0){
            event.preventDefault();
            alert('Please check the box to allow PDF downloads :)');
        }
});

$('#links').append($check);

//Explicit
$('a').each((index, link) => {
    const url = $(link).attr('href');
    $(link).parent().append(`(${url})`);
});

/* //Short
$('a').each((index, link) => {
     const url = $(this).attr('href');
    $(this).parent().append(`(${url})`);
    console.log($(this));
}); */

