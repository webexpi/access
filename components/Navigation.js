'use client'

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NavLink } from './NavLink';

import styles from './Navigation.module.css';
import { useEffect, useState } from 'react';

import closeIcon from '@/public/close.svg';
import menuIcon from '@/public/menu.svg';

// menu name and link
const menu = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about'},
  { text: 'Contact', link: '/contact' }
];



export const Navigation = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const currentPage = usePathname();
  
  return (
    <nav>
      <button 
        type='button' 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <Image
          src={isMenuOpen ? closeIcon : menuIcon}
          alt="three bars menu"
          width={25}
          height={25}
          priority
        />
      </button>

      <div 
        className={styles.overlay + ` ${isMenuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <ul 
          className={styles.menu}
          onClick={(event) => event.stopPropagation()}
        >
          { menu.map(item => (

            <NavLink
              handleClick={ () => setIsMenuOpen(false)}
              key={ item.link }
              text={ item.text }
              link={ item.link }
              currentpage={ currentPage }
            />

          ))}
        </ul>
      </div>
    </nav>
  )
}

