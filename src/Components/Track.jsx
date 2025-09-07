import playmini from '../assets/play_mini.svg'
function Track({ track, onClick  }){
    return(
        <div class="track" onClick={onClick}>
            <div class="track_info"  >
              <img class='mini_cover' src={track.albumCover} alt="" />
              <div className="trach_tittle">
                <h4>{track.title}</h4>
              <h5>{track.artist}</h5>
              </div>
            </div>
            <button class='mini_play'><img src={playmini} alt="" /></button>
          </div>
    )
}
export default Track;