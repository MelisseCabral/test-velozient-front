'use client';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import './../../styles/global.css';
import './styles.css';

export default function Header(props: { showBanner: boolean }) {
  return (
    <div className={'headerContainer'}>
      <div className={'header'}>
        <Link href={'/'} className={'logo'}>
          <h3>homedec</h3>
        </Link>

        <div className={'headerMenu'}>
          <Link href={'/'}>Home</Link>
          <Link href={'/products'}>Products</Link>
          <Link href={'/about'}>About</Link>
        </div>
        <div className={'headerMenu'}>
          <Link href={'/cart'}>
            <FiShoppingCart size={24} />
          </Link>
          {/* <Link href={'/account'}>
              <FiUser size={24} />
            </Link> */}
        </div>
      </div>
      {props.showBanner && (
        <div className="bannerHeader">
          <img src="/banner.png" alt="banner" className="imageBanner" />
        </div>
      )}
    </div>
  );
}
