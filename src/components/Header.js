import notificationIcon from "../assets/icons/notification-icon.jpg";
import profileIcon from "../assets/icons/netflix-profile-icon.png";

import { BELL_ICON, HOME_ICON, NETFLIX_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeGptSearchToggle } from "../redux/gptSlice";
import { lang } from "../utils/languageConstants";
import { useState } from "react";
import ProfileConfig from "./ProfileConfig";

const Header = () => {
  const [profileConfig, setProfileConfig] = useState(false);

  const dispatch = useDispatch();
  const gptSearchToggle = useSelector((store) => store.gpt.gptSearchToggleBtn);

  const handleGptSearchToggleBtn = () => {
    dispatch(changeGptSearchToggle());
  };

  const handleProfileConfigToggle = () => {
    setProfileConfig(!profileConfig);
  };

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute z-30 w-full">
      <div className="w-full h-16 sm:h-12 md:h-20 lg:h-16 bg-gradient-to-b from-black fixed">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Left Section - Logo and Navigation Links */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div>
              <img
                className="w-24 sm:w-28 md:w-36 lg:w-40"
                alt="netflix-logo"
                src={NETFLIX_LOGO}
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex gap-5 text-white font-semibold text-sm md:text-base">
              <p className="cursor-pointer">{lang[langKey].navHomeBtn}</p>
              <p className="cursor-pointer">{lang[langKey].navTvShowBtn}</p>
              <p className="cursor-pointer">{lang[langKey].navMoviesBtn}</p>
              <p className="cursor-pointer">
                {lang[langKey].navNewAndPopularBtn}
              </p>
              <p className="cursor-pointer">{lang[langKey].navMyListBtn}</p>
            </div>
          </div>

          {/* Right Section - Icons and Logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="flex items-center bg-gray-800/50 p-1 rounded-lg border-2 border-red-600"
              onClick={handleGptSearchToggleBtn}
            >
              {!gptSearchToggle ? (
                <>
                  <p className="text-xs sm:text-sm text-white cursor-pointer ml-2 mr-2">
                    {lang[langKey].gptSearchBtnPlaceholder}
                  </p>
                  <span className="text-xl text-white cursor-pointer ml-1 mr-3">
                    ⌕
                  </span>
                </>
              ) : (
                <img
                  className="w-5 h-5 text-white"
                  alt="home-icon"
                  src={HOME_ICON}
                />
              )}
            </button>

            <img
              className="w-5 sm:w-6 md:w-7 cursor-pointer"
              src={BELL_ICON || notificationIcon}
              alt="notification-icon"
            />

            <img
              className="w-5 sm:w-6 md:w-8 rounded-sm cursor-pointer"
              src={profileIcon}
              alt="netflix-profile-icon"
              onClick={handleProfileConfigToggle}
            />

            <div onClick={handleProfileConfigToggle}>
              <p
                className={`text-white text-lg sm:text-xl cursor-pointer transition-transform duration-300 ease-in-out ${
                  profileConfig ? "-rotate-90" : "rotate-90"
                }`}
              >
                ⏵
              </p>
            </div>

            {profileConfig && (
              <div className="absolute top-0 right-0 md:right-0 z-40">
                <ProfileConfig />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
