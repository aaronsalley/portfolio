import AmarisWorksLogo from "../assets/images/brand--AmarisWorks.svg";
import ANMLogo from "../assets/images/brand--Asa_Nisi_Masa_Films.svg";
import BHLogo from "../assets/images/brand--B&H.svg";
import BNYMellonLogo from "../assets/images/brand--BNYMellon.svg";
import BKCharterLogo from "../assets/images/brand--Brooklyn_Charter_School.png"; // TODO: replace
import ColeHaanLogo from "../assets/images/brand--Cole_Haan.svg";
import CrewcialLogo from "../assets/images/brand--Crewcial.svg";
import DavincianLogo from "../assets/images/brand--DaVincian_Healthcare.svg";
import IntryLogo from "../assets/images/brand--Intry.svg";
import ITWFoundLogo from "../assets/images/brand--Isaac_T_Watson_Foundation.svg";
import LaFondazioneLogo from "../assets/images/brand--laFondazione_NY.svg";
import LandmarkLogo from "../assets/images/brand--Landmark_venues.svg";
import LumifiLogo from "../assets/images/brand--LumiFi.svg";
import MSKLogo from "../assets/images/brand--MSK.svg";
import MTFLogo from "../assets/images/brand--MTF.svg";
import MTFJoesPubLogo from "../assets/images/brand--MTF_at_JoesPub.png"; // TODO: replace
import RaoStudiosLogo from "../assets/images/brand--Rao_Studios.svg";
import RhinoLogo from "../assets/images/brand--Rhino_Transfers.svg";
import RipcordLogo from "../assets/images/brand--Ripcord.svg";
import CompassLogo from "../assets/images/brand--Compass.svg";
import RubiconLogo from "../assets/images/brand--RubiconMD.svg";
import SportnduckLogo from "../assets/images/brand--Sportnduck.svg";
import StoneHouseLogo from "../assets/images/brand--Stone_House.svg";
import UnzippedTruthLogo from "../assets/images/brand--The_Unzipped_Truth.svg";
import URGLogo from "../assets/images/brand--URG_Corporation.png"; // TODO: replace
import WildchildLogo from "../assets/images/brand--Wildchild.svg";

export default function Brands() {
  const props = {
    height: 32,
    width: "auto",
    fill: "black",
  };

  return (
    <aside>
      <h2>{`Some brands I’ve had the pleasure to work with`}</h2>
      <div>
        <StoneHouseLogo {...props} />
        <RaoStudiosLogo {...props} />
        <LaFondazioneLogo {...props} />
        <UnzippedTruthLogo {...props} />
        <DavincianLogo {...props} />
        <ANMLogo {...props} />
        <MTFLogo {...props} />
        <WildchildLogo {...props} />
        <RubiconLogo {...props} />
        <BNYMellonLogo {...props} />
        <MSKLogo {...props} />
        <CompassLogo {...props} />
        <BHLogo {...props} />
        <ColeHaanLogo {...props} />
        <ITWFoundLogo {...props} />
        <IntryLogo {...props} />
        <CrewcialLogo {...props} />
        <LumifiLogo {...props} />
        <LandmarkLogo {...props} />
        <RipcordLogo {...props} />
        <SportnduckLogo {...props} />
        <RhinoLogo {...props} />
        <AmarisWorksLogo {...props} />
        {/* <MTFJoesPubLogo {...props} /> */}
        {/* <URGLogo {...props} /> */}
        {/* <BKCharterLogo {...props} /> */}
      </div>
    </aside>
  );
}
