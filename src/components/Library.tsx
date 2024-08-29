import { LibraryProps } from "../props/LibraryProps";
import LibrarySong from "./LibrarySong";

const Library: React.FC<LibraryProps> = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    libraryStatus,
}) => {
    return (
        <div className={`library ${libraryStatus ? "active" : ""}`}>
            <h2 style={{ color: "white" }}>All songs</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        setSongs={setSongs}  // Correctly passing the setSongs function
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs}
                        song={song}  // Correctly passing the song object
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
