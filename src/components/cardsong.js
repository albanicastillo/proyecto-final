export const CardSong = ({ data, eventLike, eventPlay }) => {
    const song = document.createElement("div")
    song.classList.add("playsong")
    song.innerHTML = `
    <div id="track-list">
    <img src="${data.path.front}">
    <div class="nm-art">
        <h3 class="name title">${data.title}</h3>
        <h3 class="name">${data.author}</h3>
        </div>
        </div>
      <div class="duration">
        <h3 class="name">${data.duration}</h3>
        <h3 class="name">From album - ${data.album}</h3>     
      </div>                  
    `
    song.addEventListener("click", eventPlay)


    return song
  }
