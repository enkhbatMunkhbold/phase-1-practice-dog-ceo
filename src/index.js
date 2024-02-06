const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedData

const fetchPics = () => {
  fetch(imgUrl).then(res => res.json())
  .then(data => renderPics(data.message))
}

const renderPics = pics => {
  const div = document.querySelector('div#dog-image-container')

  pics.forEach(picUrl => {
    const img = document.createElement('img')
    img.src = picUrl
    div.appendChild(img)
  });  
}

const fetchBreeds = () => {
  fetch(breedUrl).then(res => res.json())
  .then(data => renderBreeds(data.message))
}

const renderBreeds = breeds => {  
  const ul = document.querySelector('ul#dog-breeds')
  breedData = Object.keys(breeds)
  for(const breed in breeds) {
    const li = document.createElement('li')
    li.textContent = breed
    li.addEventListener('click', () => li.style.color = "blue")
    ul.appendChild(li)
  }
}

const filterBreeds = () => {
  const dropDown = document.querySelector('select#breed-dropdown')
  const ul = document.querySelector('ul#dog-breeds')
  
  dropDown.addEventListener('change', e => {
    ul.innerHTML = ''
    let searchedBreeds = breedData.filter(breed => breed[0] === e.target.value)
    for(const b of searchedBreeds) {
      const li = document.createElement('li')
      li.textContent = b
      li.addEventListener('click', () => li.style.color = 'blue')
      ul.appendChild(li)
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  fetchPics()
  fetchBreeds()
  filterBreeds()
})


