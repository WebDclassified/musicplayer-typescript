import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
import React, { MutableRefObject } from 'react';
import { Song as SongType, SongInfo, Song } from '../props/types'; // Ensure correct import

interface PlayerProps {
    songs: SongType[];
    songInfo: SongInfo;
    setSongInfo: React.Dispatch<React.SetStateAction<SongInfo>>;
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentSong: SongType;
    setCurrentSong: React.Dispatch<React.SetStateAction<SongType>>;
    setSongs: React.Dispatch<React.SetStateAction<SongType[]>>;
}

const Player: React.FC<PlayerProps> = ({
    songs,
    songInfo,
    setSongInfo,
    audioRef,
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
    setSongs
}) => {
    const activeLibraryHandler = (nextPrev: Song) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
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
        console.log("Hey from useEffect form player JS");
    };

    // Event Handlers
    const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        audioRef.current!.currentTime = value;
        setSongInfo({ ...songInfo, currentTime: value });
    };

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current!.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current!.play();
            setIsPlaying(!isPlaying);
        }
    };

    const getTime = (time: number) =>
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

    const skipTrackHandler = async (direction: "skip-forward" | "skip-back") => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current!.play();
    };

    // Adding the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };

    return (
<div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
                    }}
                    className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    size="2x"
                    className="skip-back"
                    icon={faAngleLeft}
                />
                {!isPlaying ? (
                    <FontAwesomeIcon
                        onClick={playSongHandler}
                        size="2x"
                        className="play"
                        icon={faPlay}
                    />
                ) : (
                    <FontAwesomeIcon
                        onClick={playSongHandler}
                        size="2x"
                        className="pause"
                        icon={faPause}
                    />
                )}
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    size="2x"
                    className="skip-forward"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default Player;

