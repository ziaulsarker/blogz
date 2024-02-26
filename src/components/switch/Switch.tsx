"use client";
import React, { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import SwitchProps from "./Switch.props";
import styles from "./Switch.module.scss";
import clsx from "clsx";

function Switch({ variant = "square" }: SwitchProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useLayoutEffect(() => {
    const haseTheme = localStorage.getItem("theme");
    const isDarkTheme = haseTheme === "dark";
    document.body.dataset.theme = isDarkTheme ? "dark" : "light";
    isDarkTheme && setIsChecked(true);
  }, []);

  const trackClasses = clsx(
    {
      [styles["track--right"]]: isChecked,
    },
    styles.track
  );

  const handleOnChange = (event: React.SyntheticEvent) => {
    const _isChecked = (event.target as HTMLInputElement).checked;
    setIsChecked(_isChecked);
    localStorage.setItem("theme", _isChecked ? "dark" : "light");
    document.body.dataset.theme = _isChecked ? "dark" : "light";
  };

  return (
    <div className={styles.switch}>
      <label htmlFor="theme-switch">
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
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default React.memo(Switch);
