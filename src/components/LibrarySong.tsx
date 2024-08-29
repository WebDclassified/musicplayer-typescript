import React from "react";
import { LibrarySongProps } from "../props/LibrarySongProps";

const LibrarySong: React.FC<LibrarySongProps> = ({
    song,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    id,
}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);

        // Set the active song
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        // Play the song if it's playing
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
