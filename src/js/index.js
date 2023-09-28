import {fetchBreeds, fetchCatByBreed} from './cat-api'

const breedSelect = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

breedSelect.addEventListener('change', changeBreed)


function changeBreed(evt) {
    const id = evt.currentTarget.value;
    fetchCatByBreed(id)
        .then(data => {
            data.map(({name})=> console.log(name))
        })
        .catch(error => console.log(error))
}

fetchBreeds()
    .then(data => { 
        data.map(({ name, id }) => {
        const opt = `<option value="${id}">${name}</option>`;
        breedSelect.insertAdjacentHTML('beforeend', opt);
    })
})
.catch(error => console.log(error));
