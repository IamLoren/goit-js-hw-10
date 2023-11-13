const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds(breed) { 
    const END_POINT = 'users';
    const searchParams = new URLSearchParams({
        _limit: limit,
        _page: page,
    })
    
    return fetch(`${BASE_URL}/${END_POINT}?${searchParams}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
       return response.json();
    })
    }