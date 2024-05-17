//https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png
const container = document.querySelector('#container');
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png'

for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    pokemon.style.display = 'inline-block';
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
//div
    //img
    //label
