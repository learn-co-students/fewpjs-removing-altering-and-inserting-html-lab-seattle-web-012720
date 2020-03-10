document.querySelector('main').remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
document.body.appendChild(newHeader);
newHeader.innerHTML = "Jazz is the champion"

// let newHeader = document.querySelector('head')
// newHeader.createElement('h1#victory')