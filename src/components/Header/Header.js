import "./Header.css"
import {FaSearch, FaWindowClose} from "react-icons/fa";
import {useState} from "react";

function Header() {
    const [search, setSearch] = useState(false);
    return (
        <div className="header">
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Watchlist</li>
                </ul>
            </div>
            <div className="search-avatar">
                <button className="" onClick={() => setSearch(true)}><FaSearch/></button>
                <div className={`search-box ${search ? "show" : ""}`}>
                    <input type="text" className="search-txt"/>
                    <button onClick={() => setSearch(false)}><FaWindowClose/></button>
                </div>

                <div className="avatar">
                    <span>Leslie Alexander</span>
                    <img className="avatar-image" src="https://picsum.photos/200/200"/>
                </div>
            </div>
        </div>
    );
}

export default Header;