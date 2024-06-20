import React from 'react';
import './css/App.css';
import NavBar from './navbar';
import './translate/i18n'; // Importálva a i18n konfiguráció a fordításhoz
import Video from './assets/Video.png';
import DVG from './assets/DVG_company.png';
import PICS1 from './assets/pics1.png';
import PICS2 from './assets/pics2.png';
import PICS3 from './assets/pics3.png';
import PICS4 from './assets/pics4.png';
import PICS5 from './assets/pics5.png';
import PICS6 from './assets/pics6.png';
import PICS7 from './assets/pics7.png';
import PICS8 from './assets/pics8.png';
import logo2 from './assets/logo2.png';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <NavBar changeLanguage={changeLanguage} />
      <div className="image-container">
        <img src={Video} alt="" width="100%" height="705px" />
        <a href="#dvg-section">
          <svg id="scrollIcon" className="icon-overlay" width="47" height="47" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.9633" cy="18.5504" r="16.6361" transform="rotate(180 17.9633 18.5504)" stroke="#F2F2F2" strokeWidth="1.08134" strokeLinejoin="round" />
            <path d="M18.4832 25.3086L18.4832 11.7918" stroke="#F2F2F2" strokeWidth="1.08134" strokeLinejoin="round" />
            <path d="M12.2446 20.1099C14.6809 22.5462 16.0469 23.9121 18.4831 26.3484L24.7217 20.1099" stroke="#F2F2F2" strokeWidth="1.08134" strokeLinejoin="round" />
          </svg>
        </a>  
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <img src={DVG} alt="image" className="col-img" />
          </div>
          <div className="col-2" id="dvg-section">
            <span className="dvg">{t('DVG Company')}</span>
            <span className="red-line"><hr className="red-line-2" /></span>
            <p className="col-2-text">{t('Veleprodaja i maloprodaja kozmetike i kućne hemije')}</p>
            <span className="grey-line"><hr className="grey-line-2" /></span><br />
            <span className="col-2-text-2">{t('DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.')}</span>
            <br /> <input type="button" value={t('Saznajte više o nama')} className="red-button" />
          </div>
        </div>
      </div>

<div className="container-2">
  <div className="row-test">
    <div className="overlay"></div>
  </div>
  <h3 className="h3">{t('POUZDANA DISTRIBUCIJA')}</h3>
</div>

<div className="container-3">
    <div className="test2">
        <img src={PICS1} alt="image" width="401px" height="278px" className="pics1"/> 
        <span className="text1">{t('Postanite naš partner')}</span>
    </div>
    <div className="test2">
        <img src={PICS2} alt="image" width="400px" height="278px" className="pics2"/> 
        <span className="text2">{t('naši proizvodi')}</span>
    </div>
    <div className="test2 redline-pics">
        <img src={PICS3} alt="image" width="401px" height="278px" className="pics3"/> 
        <hr className="redline-pics3"/> 
        <span className="text3">{t('uvoz iz mađarske')}</span>
    </div>
</div>

<div className="container-4">
    <div className="row3">
        <div className="column">
            <h2>{t('DVG Company')}</h2>
            <h5>{t('u brojkama')}</h5>
        </div>
    </div>
    <div className="row4">
    <div className="text-overlay">
        <div className="item">
            <h1>3.000<span className="m2">m<sup>2</sup></span></h1>
            <p>{t('Magacinskog prostora')}</p>
        </div>
        <div className="item">
            <h1>20</h1>
            <p>{t('Vozila')}</p>
        </div>
        <div className="item">
            <h1>8</h1>
            <p>{t('Komercijalista')}</p>
        </div>
        <div className="item">
            <h1>170</h1>
            <p>{t('Brendova')}</p>
        </div>
    </div>
</div>
</div>


<div className="container-5 slider-container">
    <div className="row5 container-11">
        <h7 className="ct-5-text">Naši proizvodi</h7>
        <div className="ct-5-text2-container">
            <h6 className="ct-5-text2">Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI kupci.</h6>
        </div>
    </div>
    <div className="row6 container-11">
        <div className="swiper swiper-container2 card-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="column-white" data-aos="fade-right">
                        <img className="pics4" src={PICS4} alt="image"/>
                        <h7 className="oprema-text">KESE I FOLIJE</h7>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="column-white" data-aos="fade-right">
                        <img className="pics5" src={PICS5} alt="image"/>
                        <h7 className="oprema-text">ZA KUHINJU</h7>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="column-white">
                        <img className="pics6" src={PICS6} alt="image"/>
                        <h7 className="oprema-text">UBRUSI I TOALET PAPIRI</h7>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="column-white" data-aos="fade-left">
                        <img className="pics7" src={PICS7} alt="image"/>
                            <h7 className="oprema-text">KOZMETIKA</h7>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="column-white" data-aos="fade-left">
                        <img className="pics8" src={PICS8} alt="image"/>
                        <h7 className="oprema-text">PLASTIČNE KANTE</h7>
                    </div>
                </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
            <div className="swiper-pagination"></div>
    </div>
    <img src={logo2} alt="logo" class="logo2"/>
</div>






</div>
  );
}

export default App;
