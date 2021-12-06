let words = ['dorm','row', 'slippery', 'moist', 'radiation', 'tension', 'conservation', 'bean', 'palm', 'sink', 'rifle', 'spare', 'dressing', 'start', 'accept', 'slogan', 'lifestyle', 'stereotype', 'coco', 'kick', 'cultural', 'model', 'dare', 'divide'];
  


     var numberOfWordItems = words.length;
     var lists = document.getElementsByClassName('secret');

     //pulls list from html
     for(var i = 0; i < lists.length; i++){
        var random = Math.floor(Math.random()*24); //gets random number from 1-24
         lists[i].textContent = words[random];
         
         
     }



    // var number = Math.floor(Math.random() * 14);
//console.log(number);

//console.log(words.length)