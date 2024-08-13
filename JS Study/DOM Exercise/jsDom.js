const div = document.createElement('div');
div.style.backgroundColor = 'red';
div.classList.add('center');
const h1 = document.createElement('h1');
// const text = h1.innerText("Hello Everyone");

h1.setAttribute('title', 'hi everyone');
const img = document.createElement('img');
img.classList.add('center');
div.append(h1);
div.append(img);


