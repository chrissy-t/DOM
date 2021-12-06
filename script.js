/*To practice DOM manipulation, we want to create a web page for seeding a crypto wallet.
Crypto wallets typically have a,phrase of 12 words which allow the owners of the wallet 
private access to its content. 
Create a web page with 12 HTML elements of the same class and use JavaScript to populate them.
In your JavaScript create an array of 24 words and then use a query selector to return all the 12 
elements as a NodeList. 
Finally, use a FOR loop to iterate through the NodeList and insert into the HTML a random word from 
the array of words
Bonus: For your random word selection, ensure that no word is repeated */


//First Try
/*var words = ['dorm, row, slippery, moist,radiation, tension, conservation, bean, palm, sink, rifle, spare, dressing, start, accept, slogan, lifestyle, stereotype, coco, kick, cultural, model, dare, divide'];
var words = document.querySelectorAll('secret');
if(words.length > 0){
for (var i=0; i<words.length; i++){
words[i].className = 'secret'
}
}*/

//second try

//made array with names for the list
function listWords(){
    let words = ['dorm','row', 'slippery', 'moist', 'radiation', 'tension', 'conservation', 'bean', 'palm', 'sink', 'rifle', 'spare', 'dressing', 'start', 'accept', 'slogan', 'lifestyle', 'stereotype', 'coco', 'kick', 'cultural', 'model', 'dare', 'divide'],
    //made a container for the list
   // wordsContainer = document.createElement('secret'),
   // wordsElement = document.createElement('secret'),
    //this is supposed to be the set up for a loop to go through the words in the list
     numberOfWordItems = words.length,
     divs = document.querySelectorAll('ul'),
       listItem,
        i;
       //adding the list to the webpage
     document.getElementsByClassName('secret')[0].appendChild(wordsContainer);
        wordsContainer.appendChild(wordsElement);
        for (i = 0; i < divs.length; ++i) {
        
            listItem = document.createElement('li');
    
            
            listItem.innerHTML = words[i];
    
           
            wordsElement.appendChild(listItem);
        }
    }
    listWords();
    
    