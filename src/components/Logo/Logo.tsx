import React from 'react';
import logo from '../../assets/Vector_white.svg'
import styles from './Logo.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

const Logo = () => {

    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);
    const link = 'https://www.linkedin.com/in/dmytro-karpyuk-579a59184/';

    return (
        <div className={isInfoMode ? styles.wrp_mode : styles.wrp}>
            <img src={logo} alt='...' className={isInfoMode ? styles.logo_mode : styles.logo}/>
            <div className={styles.title_wrp}>
                <span className={isInfoMode ? styles.title_mode : styles.title}><b>GitHub</b> Search</span>
                <span className={isInfoMode ? styles.author_title_mode : styles.author_title}>
                    Implemented by <a href={link} target='_blank' rel="noreferrer"><b>Dmytro Karpyuk</b></a>
                </span>
            </div>
        </div>
    );
};

export default Logo;