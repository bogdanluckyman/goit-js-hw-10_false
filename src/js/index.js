import {fetchBreeds, onFetchBreeds} from './cat-api'

const breedSelect = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')

breedSelect.addEventListener('change', changeBreed)


function changeBreed(evt) {
    const id = evt.currentTarget.value;
    fetchBreeds(id)
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
}


onFetchBreeds().then(data => console.log(data)).catch(error => console.log(error))

onFetchBreeds()
.then(data => {            
    const breedSelect = document.querySelector('.breed-select'); 
    for (let i = 0; i < data.length; i++) {
        const { name, id } = data[i];
        const opt = `<option value="${id}">${name}</option>`;
        breedSelect.insertAdjacentHTML('beforeend', opt);
    }
})
.catch(error => console.log(error));
