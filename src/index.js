document.addEventListener('DOMContentLoaded', (e) => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(data => {
            let dogImages = data.message
            dogImages.forEach(doggo => printDogs(doggo))
        }
        )
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res2 => res2.json())
        .then(data2 => {
            let dogBreeds = data2.message
            for (let dog in dogBreeds) {
            const listOfDogs = document.querySelector('#dog-breeds')
            let dogBreed = document.createElement('li')
            dogBreed.textContent = `${dog}`
            dogBreed.classList.add('dogBreed')
            listOfDogs.appendChild(dogBreed)
            }})
            const dogName = document.querySelectorAll('.dogBreed')
            console.log(dogName)   
        }
)


function printDogs(dogs) {
    const container = document.querySelector('#dog-image-container')
    let dogImage = document.createElement('img')
    dogImage.src = `${dogs}`
    container.append(dogImage)
}


