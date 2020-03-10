// Write your code here!
document.querySelector('main#main').remove();
let newHeader = document.querySelector('h1#victory');
newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
