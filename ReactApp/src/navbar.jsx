import React from 'react';
import './css/NavBar.css';
import logo from './assets/logo.png';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="container-nav1">
        <nav className="nav1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="menu-icon" id="menu-icon">&#9776;</div>
          <ul className="nav1-list">
            <li><a href="#" class="srb"><button className='lng-button' onClick={() => changeLanguage('srb')}>Srpski</button></a></li>
            <li><a href="#" class="eng"><button className='lng-button' onClick={() => changeLanguage('eng')}>English</button></a></li>
            <li><a href="#" class="hu"><button className='lng-button' onClick={() => changeLanguage('hu')}>Magyar</button></a></li>
          </ul>
        </nav>
      </div>
      <div className="container-nav2">
        <nav className="nav2">
          <div className="menu-icon2" id="menu-icon2">&#9776;</div>
          <ul className="nav-menu nav2-list">
            <li className="v-row"><a href="#"><span className="upperc">{t('O nama')}</span> <span className="lowerc">{t('vizija za uspeh')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('DVG proizvodi')}</span> <span className="lowerc">{t('naši proizvodi')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('Brendovi')}</span> <span className="lowerc">{t('koje zasupamo')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('Distribucija')}</span> <span className="lowerc">{t('logistika i operativa')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('Saradnja')}</span> <span className="lowerc">{t('proširenje ponude')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('Novosti')}</span> <span className="lowerc">{t('aktuelnosti')}</span></a></li>
            <li className="v-row"><a href="#"><span className="upperc">{t('Kontakt')}</span> <span className="lowerc">{t('kontaktirajte nas')}</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
