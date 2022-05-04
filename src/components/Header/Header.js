import "./Header.css"
import {FaSearch, FaWindowClose} from "react-icons/fa";
import {useState} from "react";

function Header() {
  const [search, setSearch] = useState(true);
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

      <div className="search-box">
        <input type="text" className="search-txt"/>
        <button><FaWindowClose/></button>
      </div>

      <div className="avatar flex items-center gap-2">
        <span>Leslie Alexander</span>
        <img className="h-16 rounded-full" src="https://picsum.photos/200/200"/>
      </div>
    </div>
  );
}

export default Header;