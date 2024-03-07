
import React, {useState} from "react";

const MusicLibrary = () => 
{
    const [songs, setSongs] = useState([
        {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
    },
    {
      id: 2,
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
    },
    {
      id: 3,
      title: "Hey Jude",
      artist: "The Beatles",
      album: "The Beatles (The White Album)",
    },
  ]);
    const addSong = (song) => {
        setSongs([...songs, song]);
    }
    const removeSong = (songId) => {
        setSongs(songs.filter((song) => song.id !== songId));
    }
    const playSong = (songId) => {
        // Play the song with the given ID.
      };
    
      const pauseSong = () => {
        // Pause the currently playing song.
      };

      return(
        <div>
            <h1>Music Library</h1>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                       {song.title} by {song.artist}
                       <button onClick={() => playSong(song.id)}>PlaySong</button>
                       <button onClick={() => pauseSong()}>PauseSong</button>  
                       <button onClick={() => removeSong(song.id)}>RemoveSong</button> 
                    </li>
                ))}
            </ul>
            <button onClick={() => addSong({title:"Song", artist: "Arist-Name"})}>Add Song</button>
        </div>
      )
}
    export default MusicLibrary;


