$(document).ready(function(){
  
$('.vid').hide()
$('#mama').click(function(){
    $('#zaza').hide()
    $('#show').show()

})

$('#home').click(function(){
    $('#show').hide()
    $('#zaza').show()

})

$('.Italy').hide()
$('#Positano').click(function(){
    $('#zaza').hide()
    $('#ItalyShow').show()

})

$('#Rome').click(function(){
    $('#ItalyShow').hide()
    $('#zaza').show()

})





var body = $('body');
 var backgrounds = [ 
      'url(https://i.pinimg.com/originals/12/c7/c3/12c7c30ba7e9a85b2ca11d0963545b29.jpg)',
      'url(https://travelgreecetraveleurope.com/wp-content/uploads/2016/04/Ischia-Island-Italy-Mediterranean-Sea-Europe.jpg)',
      'url(https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/09/Ireland-backpacking-@gregda-Lough-Tay-Dublin.png)',
      'url(https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/09/Edit-0503b-1170x657.jpg)',
      'url(https://s25910.pcdn.co/wp-content/uploads/2019/06/Things-to-Do-in-Queenstown-New-Zealand.jpg)'];

  body.css('background-image', backgrounds[0]);





var randomize = function(){
var index =0;
index = Math.floor(Math.random()*backgrounds.length)
     body.css('background-image', backgrounds[index]);
     
     console.log(index)
     setTimeout(randomize, 3500);
}

  setTimeout(randomize, 3500);

 });





