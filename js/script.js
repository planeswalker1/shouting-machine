$('form#form').submit(function(event) {
  event.preventDefault();
  const shoutInput = $('input#shout').val().toUpperCase();
  $('.container').prepend('<h1>' + shoutInput + '</h1>');
});
