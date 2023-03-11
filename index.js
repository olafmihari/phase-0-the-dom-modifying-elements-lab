// Write your code here!
// no longer has DOM node 'main#main'
const mainDel = document.getElementById('main')
mainDel.remove();

// has a 'newHeader' variable that points to an <h1> node:
let newHeader = document.createElement("h1")

// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";


// the 'newHeader' variable that points to the <h1> node has a class of 'victory'
// has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it:
newHeader.textContent = "Eddie is the champion";


// Extra
document.body.append(newHeader);
