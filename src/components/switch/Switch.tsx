"use client"
import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import SwitchProps from './Switch.props'
import styles from "./Switch.module.scss";
import clsx from 'clsx';
import {useThemeContext} from '../../providers/LocalStorageProviders';


function Switch({variant = 'square'}: SwitchProps) {
  const {checked, setChecked} = useThemeContext()
  const [isChecked] = useState(checked)

  const classes = clsx({
    [styles[`switch--${variant}`]]: !!variant,
  }, styles.switch);

  const trackClasses = clsx({
    [styles['track--right']]: checked
  }, styles.track);

  const handleOnChange = (event: React.SyntheticEvent) => setChecked((prev: boolean) => !prev);
 
  return (
    <div className={classes}>
      <label htmlFor="theme-switch"> 
        <span className={styles.lightSwitch}><FontAwesomeIcon icon={faSun} /> </span>
        <span className={styles.darkSwitch}><FontAwesomeIcon icon={faMoon} /></span> 
        <span className={trackClasses}></span>
      </label>
      <input 
        type="checkbox" 
        id="theme-switch" 
        checked={isChecked} 
        onChange={handleOnChange} 
      /> 
    </div>
  )
}

export default React.memo(Switch);