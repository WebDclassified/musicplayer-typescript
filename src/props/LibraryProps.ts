import { Song } from "./LibrarySongProps"; // Adjust the import path as necessary

export interface LibraryProps {
    songs: Song[];
    setCurrentSong: (song: Song) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>; // Correct type
    libraryStatus: boolean;
    setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
}


 export interface NavProps {
    setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
    libraryStatus: boolean;
}

