import './App.css'
import MusicList from './Components/MusicList'
import PlayNow from './Components/PlayNow'
import { useEffect, useState } from 'react'

function App() {
    const [tracks, setTracks] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0);

    ;

useEffect(() => {
  fetch("https://688d1e71cd9d22dda5cf7ac4.mockapi.io/music")
    .then((res) => res.json())
    .then((data) => {
      console.log("Данные из API:", data);
      setTracks(data);
      setCurrentIndex(0);
    })
    .catch((err) => console.error("Ошибка загрузки треков:", err));
}, []);

  const handleSelectTrack = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  }

  return (
    <>  
       <div class="container">
        <PlayNow
        currentTrack={tracks[currentIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
        <MusicList onSelectTrack={handleSelectTrack} tracks={tracks} />
     </div>
    </>
  )
}

export default App
