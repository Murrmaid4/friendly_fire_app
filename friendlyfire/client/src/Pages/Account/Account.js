import React from 'react'
import Logo from '../../assets/StackedLogo.svg';
import { Link } from 'react-router-dom';
import SettingsIcon from "../../assets/setting.svg";
import './Account.css';


 const Account = () => {
  return (
    <div>
    <div className="settings-icon">
        {/* Link to the Settings page */}
        <Link to="/settings" className="settings-icon-link">
  {/* Settings icon*/}
  <div className="settings-icon-container">
    <img
      src={SettingsIcon}
      alt="Settings Icon"
      className="settings-icon"
    />
  </div>
</Link>
      </div>
  
        <h1>My Character Sheet</h1>

        <div>
          {/* div for user profile picture, logo as placeholder for now */}
        <img src={Logo} alt="friendlyfire app logo"/>
        </div>

    </div>
  );
}

export default Account