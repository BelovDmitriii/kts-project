import React from 'react';
import SvgLogoImg from './LogoImg/LogoImg';
import SvgLogoName from './LogoName/LogoName';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.container_logo}>
      <div className={styles.container_logo__logoImg}>
        <SvgLogoImg />
      </div>
      <div className={styles.container_logo__name}></div>
        <SvgLogoName />
    </div>
  );
}

export default Logo;