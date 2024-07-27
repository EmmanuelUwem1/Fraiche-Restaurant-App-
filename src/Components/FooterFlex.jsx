import "../App.css"
import ContactFlex from "./ContactFlex";
import FraicheHandleFlex from "./FraicheHandleFlex";
import WorkingHoursFlex from "./WorkingHoursFlex";

function FooterFlex() {
  return (
    <div className="flex-container">
      <ContactFlex />
      <FraicheHandleFlex />
      <WorkingHoursFlex />
    </div>
  );
}
export default FooterFlex;
