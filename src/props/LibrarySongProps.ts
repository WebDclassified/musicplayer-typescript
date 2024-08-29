// In your props file (e.g., types.ts or LibrarySongProps.ts)

export interface Song {
    id: string;
    name: string;
    artist: string;
    cover: string;
    audio: string;
    color: [string, string];
    active: boolean;
}

export interface LibrarySongProps {
    song: Song;
    songs: Song[];
    setCurrentSong: (song: Song) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
    id: string;
}
