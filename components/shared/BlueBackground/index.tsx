import React from 'react';
import styles from '../../../styles/Background.module.css';

const BlueBackground: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.main}>
        { children }
      </div>
    </div>
  )
}

export default BlueBackground;