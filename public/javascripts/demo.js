/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
	var $body = $('body');
  $('#particles').particleground({
    dotColor: '#fff',
    lineColor: '#fff'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});