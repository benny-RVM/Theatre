// components/TopNav.js

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import userImage from "../../../public/images/navIcons/UserIcon.svg";
const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <p>Logo</p>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/aboutUs">
          <p>About</p>
        </Link>
        <Link href="/services">
          <p>Services</p>
        </Link>
        <Link href="/services">
          <p>Products</p>
        </Link>
        <Link href="/services">
          <p>Projects</p>
        </Link>
        <Link href="/contactUs">
          <p>Contact</p>
        </Link>
      </div>
      <div className={styles.userIcon}>
        <Image
          src={userImage}
          alt="User Icon"
          className={styles.navLogo}
          
        />
      </div>
      <div className={styles.mobileMenu}>
        {/* Mobile menu button */}
        <button>Menu</button>
      </div>
    </nav>
  );
};

export default TopNav;
