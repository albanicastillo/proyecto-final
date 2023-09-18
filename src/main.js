import './style.css'
import { reloadButtonPlay, setCurrentSong } from './components/currentsong'
import { CardSong } from './components/cardsong'
import { getData } from "./services"




const trackList = document.getElementById("track-list")

getData(data => {
  data.map(song => {
    trackList?.appendChild(
      CardSong({
        data: song,
        eventPlay: () => {
          setCurrentSong(song)
          reloadButtonPlay()
        },
        eventLike: () => console.log("Like")
      })
    )
  })
})





