/*To practice DOM manipulation, we want to create a web page for seeding a crypto wallet.
Crypto wallets typically have a,phrase of 12 words which allow the owners of the wallet 
private access to its content. 
Create a web page with 12 HTML elements of the same class and use JavaScript to populate them.
In your JavaScript create an array of 24 words and then use a query selector to return all the 12 
elements as a NodeList. 
Finally, use a FOR loop to iterate through the NodeList and insert into the HTML a random word from 
the array of words
Bonus: For your random word selection, ensure that no word is repeated */




//second try

//made array with names for the list

    let words = ['dorm','row', 'slippery', 'moist', 'radiation', 'tension', 'conservation', 'bean', 'palm', 'sink', 'rifle', 'spare', 'dressing', 'start', 'accept', 'slogan', 'lifestyle', 'stereotype', 'coco', 'kick', 'cultural', 'model', 'dare', 'divide'];
    var numberOfWordItems = words.length;
    var lists = document.getElementsByClassName('secret');

    //pulls list from html
    for(var i = 0; i < lists.length; i++){
       var random = Math.floor(Math.random()*24); //gets random number from 1-24
        lists[i].textContent = words[random];
        
        
    }