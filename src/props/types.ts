// props/types.ts
export interface Song {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: [string, string]; // Ensure this matches your usage
    id: string;
    active: boolean;
}

export interface SongInfo {
    currentTime: number;
    duration: number;
    animationPercentage: number;
}



export interface PlayerProps {
    songs: Song[];
    songInfo: SongInfo;
    setSongInfo: React.Dispatch<React.SetStateAction<SongInfo>>;
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentSong: Song;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
}