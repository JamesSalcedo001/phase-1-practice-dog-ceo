const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let dogBreeds = []

document.addEventListener("DOMContentLoaded", dogFetch)

function dogFetch() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const dogContainer = document.getElementById("dog-image-container")
        data.message.forEach(imgUrl => {
            const dogImg = document.createElement("img")
            dogImg.src = imgUrl
            dogContainer.append(dogImg)
        })
    })
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", breedFetch)

function breedFetch() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        dogBreeds = Object.keys(data.message)
        breedRender(dogBreeds)
    })
}

function breedRender(dogBreeds) {
    const dogList = document.getElementById("dog-breeds") 
        dogBreeds.map(dog => {
            const li = document.createElement("li")
            li.textContent = dog
            dogList.append(li)
        })
}


document.addEventListener("click", e => {
    if(e.target.matches("li")) {
        e.target.style.color = "red"
    }
});


document.addEventListener("change", e => {
    const dogList = document.getElementById("dog-breeds") 
    if(e.target.matches("#breed-dropdown")) {
        dogList.replaceChildren();
        const breedFilter = dogBreeds.filter(dog => dog[0] === e.target.value)
        breedRender(breedFilter)
    }
})


dogFetch();
breedFetch();