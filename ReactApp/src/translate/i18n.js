import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Fordítások definiálása különböző nyelveken
const resources = {
  eng: {
    translation: {
      "Welcome": "Welcome to My Website",
      "Language": "Language",
      "O nama": "About Us",
      "DVG proizvodi": "DVG Products",
      "Brendovi": "Brands",
      "Distribucija": "Distribution",
      "Saradnja": "Cooperation",
      "Novosti": "News",
      "Kontakt": "Contact",
      "vizija za uspeh": "vision for success",
      "naši proizvodi": "our products",
      "koje zasupamo": "we represent",
      "logistika i operativa": "logistics and operations",
      "proširenje ponude": "expanding the offer",
      "aktuelnosti": "current events",
      "kontaktirajte nas": "contact us",
      "DVG Company": "DVG Company",
      "Veleprodaja i maloprodaja kozmetike i kućne hemije": "Wholesale and retail of cosmetics and household chemicals",
      "DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.": "DVG Company d.o.o. is a trading company established in 2008 in Subotica. The primary activity of the company is the wholesale of cosmetics and household chemicals. It is entirely privately owned, with its headquarters in Subotica. There is the distribution center and business premises, with a total of 3000 m2 of warehouse space that meets all segments in terms of storage, safeguarding, and distribution of goods.",
      "Saznajte više o nama": "Learn more about us",
      "POUZDANA DISTRIBUCIJA": "RELIABLE DISTRIBUTION",
      "Postanite naš partner": "Become our partner",
      "naši proizvodi": "our products",
      "uvoz iz mađarske": "import from Hungary",
      "DVG Company": "DVG Company",
      "u brojkama": "in numbers",
      "Magacinskog prostora": "Warehouse space",
      "Vozila": "Vehicles",
      "Komercijalista": "Sales representatives",
      "Brendova": "Brands"
    }
  },
  srb: {
    translation: {
      "Welcome": "Dobrodošli na našu stranicu",
      "Language": "Jezik",
      "O nama": "O nama",
      "DVG proizvodi": "DVG proizvodi",
      "Brendovi": "Brendovi",
      "Distribucija": "Distribucija",
      "Saradnja": "Saradnja",
      "Novosti": "Novosti",
      "Kontakt": "Kontakt",
      "vizija za uspeh": "vizija za uspeh",
      "naši proizvodi": "naši proizvodi",
      "koje zasupamo": "koje zasupamo",
      "logistika i operativa": "logistika i operativa",
      "proširenje ponude": "proširenje ponude",
      "aktuelnosti": "aktuelnosti",
      "kontaktirajte nas": "kontaktirajte nas",
      "DVG Company": "DVG Company",
      "Veleprodaja i maloprodaja kozmetike i kućne hemije": "Veleprodaja i maloprodaja kozmetike i kućne hemije",
      "DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.": "DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.",
      "Saznajte više o nama": "Saznajte više o nama",
      "POUZDANA DISTRIBUCIJA": "POUZDANA DISTRIBUCIJA",
      "Postanite naš partner": "Postanite naš partner",
      "naši proizvodi": "naši proizvodi",
      "uvoz iz mađarske": "uvoz iz mađarske",
      "DVG Company": "DVG Company",
      "u brojkama": "u brojkama",
      "Magacinskog prostora": "Magacinskog prostora",
      "Vozila": "Vozila",
      "Komercijalista": "Komercijalista",
      "Brendova": "Brendova"
    }
  },
  hu: {
    translation: {
      "Welcome": "Üdvözöljük a weboldalunkon",
      "Language": "Nyelv",
      "O nama": "Rólunk",
      "DVG proizvodi": "DVG termékek",
      "Brendovi": "Márkák",
      "Distribucija": "Terjesztés",
      "Saradnja": "Együttműködés",
      "Novosti": "Hírek",
      "Kontakt": "Kapcsolat",
      "vizija za uspeh": "sikerre vezető vízió",
      "naši proizvodi": "termékeink",
      "koje zasupamo": "amelyeket képviselünk",
      "logistika i operativa": "logisztika és üzemeltetés",
      "proširenje ponude": "ajánlat bővítése",
      "aktuelnosti": "aktuális események",
      "kontaktirajte nas": "lépjen kapcsolatba velünk",
      "DVG Company": "DVG Vállalat",
      "Veleprodaja i maloprodaja kozmetike i kućne hemije": "Kozmetikai és háztartási vegyiáru nagy- és kiskereskedelem",
      "DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.": "A DVG Vállalat d.o.o. egy 2008-ban Szabadkán alapított kereskedelmi vállalkozás. A vállalat elsődleges tevékenysége a kozmetikai és háztartási vegyiáru nagykereskedelme. Teljes mértékben magántulajdonban van, székhelye Szabadkán található. Itt található az elosztó központ és az irodák, összesen 3000 m2 raktárterülettel, amely minden szempontból megfelel az áruk tárolására, őrzésére és elosztására.",
      "Saznajte više o nama": "Tudjon meg többet rólunk",
      "POUZDANA DISTRIBUCIJA": "MEGBÍZHATÓ TERJESZTÉS",
      "Postanite naš partner": "Legyen a partnerünk",
      "naši proizvodi": "termékeink",
      "uvoz iz mađarske": "import Magyarországról",
      "DVG Company": "DVG Vállalat",
      "u brojkama": "számokban",
      "Magacinskog prostora": "Raktárterület",
      "Vozila": "Járművek",
      "Komercijalista": "Értékesítési képviselők",
      "Brendova": "Márkák",
      "DVG Company": "DVG Vállalat",
      "u brojkama": "számokban",
      "Magacinskog prostora": "Raktárterület",
      "Vozila": "Járművek",
      "Komercijalista": "Értékesítési képviselők",
      "Brendova": "Márkák"  
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "eng", // Kezdő nyelv
    interpolation: {
      escapeValue: false // React már automatikusan szökik
    }
  });

export default i18n;
