'use client';
import FiltersComponent from '@/components/FiltersComponent';
import Header from '@/components/Header';
import useProduct from '@/hooks/useProduct';
import { IProduct } from '@/types/IProduct';
import Link from 'next/link';
import CardProduct from '../components/CardProduct/index';
import './../styles/global.css';
import './style.css';

export default function Home() {
  const { fetchProducts, loading, products } = useProduct();
  return (
    <main className={'main'}>
      <Header showBanner={true} />

      <FiltersComponent />

      <div className={'content'}>
        <div className={'searchResults'}>
          {loading && <p>Loading...</p>}
          {!loading &&
            products &&
            products.map((product: IProduct) => (
              <Link href={`product?id=${product.id}`} key={product.id}>
                <CardProduct
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  available={product.available}
                  quantity={product.quantity}
                />
              </Link>
            ))}
          {!loading && !products && <p>No products found!</p>}
        </div>
      </div>
    </main>
  );
}
