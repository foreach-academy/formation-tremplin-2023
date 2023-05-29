//* node-list = array-like object => colllection
//* index, accès à la propriété length mais pas les méthodes sur un tableau

// même principe qu'avec getElementByTagName

const listItems = document.getElementsByClassName('special');
console.log(listItems);

listItems[1].style.color = 'blue';
