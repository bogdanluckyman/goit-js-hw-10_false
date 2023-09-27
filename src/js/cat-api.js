export function fetchBreeds(id) {
    
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_gENyqxI4CKTup2rVYxuz2kdHYhpulfAjA9RU9PsgU0gFtQRExezYdbdcj24XVkhs';

    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${id}`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })
};

export function onFetchBreeds() {
   
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_gENyqxI4CKTup2rVYxuz2kdHYhpulfAjA9RU9PsgU0gFtQRExezYdbdcj24XVkhs';

    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })
};