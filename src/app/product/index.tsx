'use client';
import useProduct from '@/hooks/useProduct';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export default function Product() {
  const { loading, selectProduct } = useProduct();
  return (
    <main className={'main'}>
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
      <div className="bannerHeader">
        <img src="/bg.png" alt="banner" className="imageBanner" />
      </div>
    </main>
  );
}
