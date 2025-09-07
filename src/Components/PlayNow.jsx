import prev from '../assets/prev.svg'
import play from '../assets/play.svg'
import next from '../assets/next.svg'
import pause from '../assets/pause.svg'
import { useState, useRef, useEffect } from 'react'
function PlayNow({ currentTrack, onNext, onPrev }){

      
    const [isPlaying, setIsPlaying, ] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

    if(!currentTrack) {
            return <div className="playnow non">No track selected</div>;
        }

    return(
        
        <div className="playnow">
            <div className="tittle">
          <h1>Fristailo</h1>
          <span></span>
        </div>
        <div class="music_now">
            <img class='Cover_now' src={currentTrack.albumCover} alt="" />
          <div class="music_info">
            <h2>{currentTrack.title}</h2>
            <h3>{currentTrack.artist}</h3>
            <audio ref={audioRef} style={{display:"none"}} controls autoPlay src={currentTrack.audioUrl}></audio>
            <div class="controls" audio={currentTrack.audioUrl}>
              <button onClick={onPrev}  class="prev"> <img src={prev} alt="" /> </button>
              <button onClick={() => setIsPlaying(!isPlaying)} class="play">{isPlaying ? <img src={pause}/>:<img src={play}/>}</button>
              <button onClick={onNext} class="next"><img src={next} alt="" /></button>
            </div>
            
          </div>
        </div>
       </div>
    )
}
export default PlayNow