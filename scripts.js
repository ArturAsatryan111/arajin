const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

setInterval (function(){ 
  hours.textContent =  new Date().getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
  minutes.textContent = ":" + new Date().getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); ;    
  seconds.textContent = ":" + new Date().getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); ;
},1000)