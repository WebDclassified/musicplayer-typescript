import { v4 as uuidv4 } from 'uuid';
import { Song } from './props/types'; // Adjust path as needed

function chillHop(): Song[] {
    return [
        {
            name: "Sunrise Serenade",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Harmony Harp",
            audio: "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Urban Groove",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Beatmaster B",
            audio: "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Mystic Echo",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Harmony Harp",
            audio: "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Electro Vibes",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Synthwave Sensation",
            audio: "https://www.youtube.com/watch?v=Hijl5aosMG8&list=RDAfPWidxFD-k&index=27",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Jazzy Whispers",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Smooth Sax Serenade",
            audio: "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Tropical Breez",
            cover: "https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_1280.png",
            artist: "Island Rhythms",
            audio: "https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
