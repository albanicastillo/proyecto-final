import './style.css'




// Con el import './style.css' me aparece un error en consola con esta descripción:
// "Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/css". Strict MIME type checking is enforced for module scripts per HTML spec."
// y las canciones desaparecen de la lista, sin embargo cuando lo comento ese error desaparece y la lista de canciones vuelve a aparecer. 

// tambien tengo problemas para lograr que las canciones puedan reproducirse al hacer click sobre cualquiera de ellas, no logro dar con la logica correcta para llevar eso a cabo.



// El error al importar el './style.css' fue porque moviste de lugar el main.js pero no el style.css
// El segundo error fue porque importaste los estilos desde el HTML, en vite no debe ser así, debes hacerlo en este mismo archivo



// fetch ('https://leonardoapi.onrender.com/music')
//     .then(response => response.json())
//     .then(data => mostrarData(data))

// const mostrarData = (data) => {
//     console.log(data)
// }


document.addEventListener('DOMContentLoaded', () => {
    const elementoDOM = document.getElementById('track-list')
    const currentSong = document.getElementsByClassName('current')
    
    fetch ('https://leonardoapi.onrender.com/music')
        .then( (res) => res.json())
        .then( (data) => {
            data.map( (song) => {
            //     elementoDOM.innerHTML += `
            //     <div class="playsong">
            //     <div id="track-list">
            //     <img src="${song.path.front}">
            //     <div class="nm-art">
            //         <h3 class="name">${song.title}</h3>
            //         <h3 class="name">${song.author}</h3>
            //         </div>
            //     </div>
            //     <i class="bi bi-heart-fill"></i>
            //     </div>
            //     `
                elementoDOM.appendChild(
                    CardSong(song)
                )
            })
        })
    
    const playsong = document.querySelector('.playsong');
    playsong.addEventListener('click', () => {
        console.log('Play a ' + 'song.title')
    });
    playsong.appendChild(elementoDOM)

    return playsong
});
    
  
      






const CardSong = (song) => {
    const container= document.createElement('div')
    container.classList.add('playsong')
    container.innerHTML = `
    <div class="playsong">
    <div id="track-list">
    <img src="${song.path.front}">
    <div class="nm-art">
        <h3 class="name">${song.title}</h3>
        <h3 class="name">${song.author}</h3>
        </div>
    </div>
    <i class="bi bi-heart-fill"></i>
    </div>
    `
    
    const containerButton = document.createElement('button')
    containerButton.classList.add('playsong')
    
    const playsong = document.createElement('button')
    playsong.classList.add('playsong')
    playsong.innerHTML = `<div class="playsong">
    <div id="track-list">
    <img src="${song.path.front}">
    <div class="nm-art">
        <h3 class="name">${song.title}</h3>
        <h3 class="name">${song.author}</h3>
        </div>
    </div>
    </div>`
    playsong.addEventListener('click', () => {
        console.log('Play a ' + song.title)
    })
    
    const buttonLike = document.createElement('button')
    buttonLike.classList.add('bi', 'bi-heart-fill')
    buttonLike.innerHTML = `i`
    buttonLike.addEventListener('click', () => {
        console.log('Like a ' + song.title)
    })
    
    containerButton.appendChild(playsong)
    containerButton.appendChild(buttonLike)

    // Aquí debiste meter el contenedor de los botones en el contenedor principal
    // playsong.appendChild(containerButton)
    container.appendChild(containerButton)

    // Tienes que retornar el contenedor
    // return playsong
    return container
}




// funcionalidad para los botones

// let masterPlay = document.getElementById('masterPlay');

// masterPlay.addEventListener('click', () => {
//     if (music.paused || music.currentTime <= 0) {
//         music.play();
//         masterPlay.classList.remove('bi bi-play-fill')
//         masterPlay.classList.add('bi bi-pause-fill')
//     } else {
//         music.pause();
//         masterPlay.classList.remove('bi bi-play-fill')
//         masterPlay.classList.add('bi bi-pause-fill')
//     }
// });

// let index = 0;
// let currentSong = document.getElementsByClassName('current');
//     currentSong.addEventListener('click', (el) => {
//         // index = el.target.id;
//         img.src = `${song.path.front}`;
//         h3.src = `${song.title}`;
//         h3.artist.src = `${song.author}`;
//         music.play();
//     })