import React from "react";
import BookIcon from "@material-ui/icons/BookOutlined";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import SettingsIcon from "@material-ui/icons/Settings";

const menuOptions = [
  {
    name: "Accounts",
    icon: <FingerprintIcon />,
    subOptions: ["Sign Up", "Log In", "Log out"],
    hint: null,
  },
  {
    name: "Journals",
    icon: <BookIcon />,
    subOptions: ["Create", "Use", "Change", "Scrap"],
  },
  {
    name: "Preferences",
    icon: <SettingsIcon />,
    subOptions: ["Change Theme"],
  },
];

export default menuOptions;
