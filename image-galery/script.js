let url = 'https://api.unsplash.com/search/photos?query=query=canada&orientation=landscape&per_page=30&client_id=jyOlg77Xhpn0vXqlgiEPdFjqkIfnGxbS8GYKXNtB9kQ';

const galleryContainer = document.querySelector('.gallery-container');
const btn = document.querySelector('.btn');
const cross = document.querySelector('.cross');
let val = document.querySelector(".input");

let input = val.oninput = inputChange;

function inputChange(event) {
  if (event.target.value.length)
    cross.style.visibility = 'visible';
  else
    cross.style.visibility = 'hidden';
}

cross.addEventListener('click', () => {
    val.value = '';
    cross.style.visibility = 'hidden';
})

function showImg(i) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.alt = i.alt_description;
    img.src = i.urls.regular;
    galleryContainer.append(img);  
}


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data.results.map((i) => showImg(i));
} 

getData();

function searchSubmit () {
    galleryContainer.innerHTML = '';
    let found = document.getElementsByTagName("input")[0].value;
    url = `https://api.unsplash.com/search/photos?query=query=${found}&orientation=landscape&per_page=30&client_id=jyOlg77Xhpn0vXqlgiEPdFjqkIfnGxbS8GYKXNtB9kQ`;
   getData();
console.log (found);
}

btn.addEventListener('click', searchSubmit);

document.onkeydown = (e) => {
    if(e.keyCode === 13) {
        searchSubmit();
    }
}