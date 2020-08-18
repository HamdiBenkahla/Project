$(document).ready(function(){
  
$('.vid').hide()                  
$('#mama').click(function(){    //here we're going to hide div then we show it while cliking on the <a> tag and show all the element inside it
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
      'url(https://s25910.pcdn.co/wp-content/uploads/2019/06/Things-to-Do-in-Queenstown-New-Zealand.jpg)'];   //here i want to do function that changes automatically the background so i selected some pictures links then i putted them into an array called backgrounds

  body.css('background-image', backgrounds[0]); //here is the jquery code using the css method to choose my first background image when we open the website

var randomize = function(){     //here i create a function and give it a var called randomize this function will have the functionality to change the background image
var index =0;  //i create an index to the array
index = Math.floor(Math.random()*backgrounds.length)  //here the index will take different values randomly depending on the length of our backgrounds array which contain the images links
     body.css('background-image', backgrounds[index]); //using the css method we put the index between square brakets for the array so it will change randomly
      console.log(index)
     setTimeout(randomize, 3500); 
}

  setTimeout(randomize, 3500); //we set a timer to change the background every 3 and half seconds

 });





