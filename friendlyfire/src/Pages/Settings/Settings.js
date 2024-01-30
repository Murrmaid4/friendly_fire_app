// to avoid additional pages, we can make this a collapsible menu/accordian settings page
// will need to look into toggle buttons for react for this, settings will be attached to states in backend phase 
// search input can be added (but can hide if we don't get functioning in back end dev phase)
import React, { useState } from 'react';
import "./Settings.css";

const Settings = () => {
const [notificationsExpanded, setNotificationsExpanded] = useState(false);
const [accessExpanded, setAccessExpanded] = useState(false);
const [accSetExpanded, setAccSetExpanded] = useState(false);

const toggleNotifications = () => {
  setNotificationsExpanded(!notificationsExpanded);
};

const toggleAccess = () => {
  setAccessExpanded(!accessExpanded);
};

const toggleAccSet = () => {
  setAccSetExpanded(!accSetExpanded);
};
//Need to add a search input and toggle button
//notifications
return (
  <div>
  <p>Settings</p>
    <div 
    className="menu-header" 
    onClick={toggleNotifications}
    style={{ cursor: 'pointer' }}>
      Notifications
    </div>
    {notificationsExpanded && (
      <div className="menu-items">
        {/*<div>All notifications</div>*/}
        <div>Notifications </div>
        <div>Messages</div>
        <div>New Matches</div>
        <div>New Likes</div>
      </div>
    )}
    <hr />
    
    {/* Accessibility */}
    <div className="menu-header" 
    onClick={toggleAccess}
    style={{cursor: 'pointer' }}>
     Accessibility
    </div>
    {accessExpanded && (
      <div className="menu-items">
        <div>Light Mode</div>
        <div>Automatically Play Video</div>
        <div>Sync Contrast Settings</div>
        <div>Reduce Animations</div>
      </div>
    )}

<hr />
 {/* Account Settings */}
    <div className="menu-header" 
    onClick={toggleAccSet}
    style={{cursor: 'pointer' }}>
     Account Settings
    </div>
    {accSetExpanded&& (
      <div className="menu-items">
        <div>Pause Account
          <p>Turning this on will pause your account from being  <br />
            viewed by others.
            You will not be able to match  <br /> with anyone new. 
            Existing matches will still be  <br />able to view your profile.  </p>
        </div>
        <div>Change E-mail</div>
        <div>Change Password </div>
      </div>
    )}
    
    <hr />
       {/* Log out */}
    <div className="menu-header" 
    style={{cursor: 'pointer' }}>
     Log out
    </div>
  </div>
);
};

export default Settings;
