import { useRef, useState } from "react";
import Player from "./components/PlayerSong";
import Song from "./components/Song";
import "./styles/app.scss";
import './App.css';
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Navb";
import { Song as SongType, SongInfo } from "./props/types"; // Ensure correct import

function App() {
    const [songs, setSongs] = useState<SongType[]>(data());
    const [currentSong, setCurrentSong] = useState<SongType>(songs[0]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [libraryStatus, setLibraryStatus] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [songInfo, setSongInfo] = useState<SongInfo>({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });

    const timeUpdateHandler = (e: React.SyntheticEvent<HTMLAudioElement>) => {
        const target = e.target as HTMLAudioElement;
        const current = target.currentTime;
        const duration = target.duration;
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);

        setSongInfo({
            currentTime: current,
            duration,
            animationPercentage: animation,
        });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying && audioRef.current) audioRef.current.play();
    };

    return (
        <div>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player
                songs={songs}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                setSongs={setSongs}
                isPlaying={isPlaying}
                audioRef={audioRef}
                songs={songs}
                setCurrentSong={setCurrentSong}
            />
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                src={currentSong.audio}
                ref={audioRef}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
