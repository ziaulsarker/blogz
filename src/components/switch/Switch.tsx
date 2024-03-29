"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import SwitchProps from "./Switch.props";
import styles from "./Switch.module.scss";
import clsx from "clsx";
import setTheme from "src/serverActions/setThemeAction";

function Switch({ variant = "square", theme }: SwitchProps) {
  const isChecked = theme === "dark";

  const trackClasses = clsx(
    {
      [styles["track--right"]]: isChecked,
    },
    styles.track
  );

  const tackThemClassesRoll = clsx(
    styles[`theme-switch-${isChecked ? "dark" : "light"}`]
  );

  const handleOnChange = (event: React.SyntheticEvent) => {
    const isDarkMode = (event.target as HTMLInputElement)?.checked;
    setTheme(isDarkMode);
  };

  return (
    <div className={styles.switch}>
      <label htmlFor="theme-switch" className={tackThemClassesRoll}>
        <span className={styles.lightSwitch}>
          <FontAwesomeIcon icon={faSun} />
        </span>
        <span className={styles.darkSwitch}>
          <FontAwesomeIcon icon={faMoon} />
        </span>
        <span className={trackClasses}></span>
      </label>
      <input
        type="checkbox"
        id="theme-switch"
        name="theme"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default React.memo(Switch);
