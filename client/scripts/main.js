'use strict';

(function() {

  console.log('Welcome to Yeogurt');

})();

var ticks = 0;
var shopActivated = false;

function tickMe() {
	ticks++;
	document.getElementById('ticks').innerHTML = 'Ticks: '+ ticks;
	if (ticks === 10) {
        document.getElementById('shop').style.display = 'block';
	}

}

var tick = 'tick';
window.setInterval(function(){
  if (tick === 'tick') {
    tick = 'tock';
  } else {
  	tick = 'tick';
  } 
  document.getElementById('ticker-noise').innerHTML = tick;
}, 1000);