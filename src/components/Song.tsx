import React from "react";
import { Song as SongType } from "../props/SongProps"; // Adjust the path as needed

interface SongProps {
    currentSong: SongType;
}

const Song: React.FC<SongProps> = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
