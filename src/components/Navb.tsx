
import React from "react";
import { NavProps } from "../props/LibraryProps";

const Nav: React.FC<NavProps> = ({ setLibraryStatus, libraryStatus}) => {
    return(
        <nav>
            <h1> Music Player</h1>
            <button 
            onClick={() => {
                setLibraryStatus(!libraryStatus);
            }}
            >
                <h4>Library</h4>
            </button>
        </nav>

    )
}

export default Nav