$(document).ready(function(){


var body = $('body');
 var backgrounds = [
      'url(https://nouitravel.com/wp-content/uploads/2019/05/ce-travel.jpg)', 
      'url(http://static.jsbin.com/images/popout.png)',
      'url(https://www.nps.gov/cany/planyourvisit/images/_DSC2811.jpg)',
      'url(https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/09/Ireland-backpacking-@gregda-Lough-Tay-Dublin.png)',
      'url(https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/09/Edit-0503b-1170x657.jpg)',
      'url(https://s25910.pcdn.co/wp-content/uploads/2019/06/Things-to-Do-in-Queenstown-New-Zealand.jpg)'];


function changeBack(){
var index = 0;
 body.css('background', backgrounds[index])
 index = index + 1
}










});
