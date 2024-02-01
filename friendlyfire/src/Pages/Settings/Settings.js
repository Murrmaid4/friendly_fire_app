// to avoid additional pages, we can make this a collapsible menu/accordian settings page
// will need to look into toggle buttons for react for this, settings will be attached to states in backend phase 
// search input can be added (but can hide if we don't get functioning in back end dev phase)
import React, { useState } from 'react';
import Toggle from 'react-toggle';
import './Settings.css';

const Settings = () => {
  const [notificationsExpanded, setNotificationsExpanded] = useState(false);
  const [accessExpanded, setAccessExpanded] = useState(false);
  const [accSetExpanded, setAccSetExpanded] = useState(false);
  //creating a search bar 
 

  const toggleNotifications = () => {
    setNotificationsExpanded(!notificationsExpanded);
  };

  const toggleAccess = () => {
    setAccessExpanded(!accessExpanded);
  };

  const toggleAccSet = () => {
    setAccSetExpanded(!accSetExpanded);
  };


  return (
    <div>
      <div className="settings-header">
        Settings
      </div>

      {/* Notifications */}
      <div
        className="menu-header"
        onClick={toggleNotifications}
        style={{ cursor: 'pointer' }}
      >
        Notifications
      </div>
      <div
        className="menu-items"
        style={{ maxHeight: notificationsExpanded ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
      >
        <div>
      All Notifications
            {/*Make toggle hidden*/}

      {notificationsExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    <div>
      Messages 
      {notificationsExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    <div>
      New Matches
      {notificationsExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    <div>
      New Likes
      {notificationsExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
  </div>

      <div className="section-divider"></div>

      {/* Accessibility */}
      <div
        className="menu-header"
        onClick={toggleAccess}
        style={{ cursor: 'pointer' }}
      >
        Accessibility
      </div>
      <div
        className="menu-items"
        style={{ maxHeight: accessExpanded ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
      >
        <div>
          Light Mode
          {accessExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    <div>
          Automatically Play Video
          {accessExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
      <div>
          Sync Contrast Settings
          {accessExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    <div>
          Reduce Animations
          {accessExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
    </div>
    </div>
      </div>

      <div className="section-divider"></div>

      {/* Account Settings */}
      <div
        className="menu-header"
        onClick={toggleAccSet}
        style={{ cursor: 'pointer' }}
      >
        Account Settings
      </div>
      <div
        className="menu-items"
        style={{ maxHeight: accSetExpanded ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
      >
        <div>
          Pause Account
          {accSetExpanded && (
      <Toggle
        defaultChecked={false}
        value='no'
      />
      )}
          <p>Turning this on will pause your account from being <br />
            viewed by others.
            You will not be able to match <br /> with anyone new.
            Existing matches will still be <br />able to view your profile.  </p>
        </div>
        <div>Change E-mail
        </div>
        <div>Change Password
         </div>
      </div>

      <div className="section-divider"></div>

      {/* Log out */}
      <div
        className="menu-header"
        style={{ cursor: 'pointer' }}
      >
        Log out
      </div>
    </div>
  );
};

export default Settings;