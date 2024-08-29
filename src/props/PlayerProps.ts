import { RefObject } from "react";

export interface Song {
    id: string;
    name: string;
    artist: string;
    cover: string;
    color: string[];
    active?: boolean; // Optional if not always present
}




export interface SongInfo {
    currentTime: number;
    duration: number;
    animationPercentage: number;
}

export interface PlayerProps {
    currentSong: Song;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    audioRef: RefObject<HTMLAudioElement>;
    setSongInfo: React.Dispatch<React.SetStateAction<SongInfo>>;
    songInfo: SongInfo;
    songs: Song[];
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
    id: string;
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
}
