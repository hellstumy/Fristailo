import Track from "./Track";

function MusicList({ tracks, onSelectTrack }) {
  return (
    <div className="music_list">
      <p>Playlist</p>
      {tracks.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        tracks.map((track, index) => (
          <Track 
            key={track.id} 
            track={track} 
            onClick={() => onSelectTrack(index)}  
          />
        ))
      )}
    </div>
  );
}

export default MusicList;
