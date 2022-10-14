import React from "react";
import { useState } from "react";
import './Nav.scss';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import EditIcon from '@material-ui/icons/Edit';

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hoverNotif, setHoverNotif] = useState(false);
  const [hoverProfil, setHoverProfil] = useState(false);

  function profil(){
    hoverProfil ? setHoverProfil(false) : setHoverProfil(true);
  }

  function notif(){
    hoverNotif ? setHoverNotif(false) : setHoverNotif(true);
  }

  function transitionNav(){
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() =>{
    document.addEventListener("scroll", transitionNav);
  });

  function handleCLick() {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };


  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
    <button className="nav__burger" onClick={handleCLick}>
    <MenuIcon />
    </button>
    <img src="./images/logo.png" className="nav__logo" alt="Netflix"/>
    <nav className="nav__links">
     <a href="/" className="nav__link" data-testid="nav-link">
     Accueil
     </a>
     <a href="/" className="nav__link" data-testid="nav-link">
     Séries
     </a>
     <a href="/" className="nav__link" data-testid="nav-link">
     Films
     </a>
     <a href="/" className="nav__link" data-testid="nav-link">
     Nouveautés les plus regardées
     </a>
     <a href="/" className="nav__link" data-testid="nav-link">
     Ma liste
     </a>
    </nav>
    <div className="nav__actions">
    <a href="/" className="nav__action" data-testid="search"><SearchIcon /></a>
    <a href="/" className="nav__action" data-testid="direct-btn">DIRECT</a>
    <a href="/" className="nav__action" data-testid="youth-btn">Jeunesse</a>

    <div onMouseEnter={notif} onMouseLeave={notif}>
    <a href="/" className="nav__action nav__notifIcon"><NotificationsIcon /></a>
    <div className={`${hoverNotif ? "nav__notif--show" : "nav__notif--none"}`}>Aucune Notification récente</div>
    </div>

    <a href="/" className="nav__action" onMouseEnter={profil} onMouseLeave={profil}><img src="./images/avatar.jpg"/></a>
    <div className={`${hoverProfil ? "nav__profil--show" : "nav__profil--none"}`}>
    <div className="nav__profil--border">
    <a href="/" className="nav__links"><img src="./images/Jeunesse.png" className="img__young nav_icons"/>Jeunesse</a>
    <a href="/" className="nav__links"><EditIcon className="nav_icons"/>Gérer les profils</a>
    </div>
    <div className="nav__profil--border">
    <a href="/" className="nav__links"><PersonIcon className="nav_icons"/>Compte</a>
    <a href="/" className="nav__links"><HelpOutlineIcon className="nav_icons"/>Centre d'aide</a>
    </div>
    <a href="/" className="nav__links">Se déconnecter</a>
    </div>
    </div>

    </div>
  );
}

export default Nav;
