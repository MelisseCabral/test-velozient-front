'use client';
import Button from '@/components/Button';
import Header from '@/components/Header';
import InputNumber from '@/components/InputNumber';
import useProduct from '@/hooks/useProduct';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { IProduct } from '../../types/IProduct';
import './../../styles/global.css';
import './styles.css';

export default function Product() {
  const { getProductById, loading } = useProduct();
  const [selectProduct, setSelectProduct] = React.useState<IProduct>();

  const router = useRouter();

  useEffect(() => {
    const id = router.asPath.split('=')[1];
    getProductById(id).then((data) => {
      setSelectProduct(data);
    });
  }, []);

  return (
    <main className={'main'}>
      <Header showBanner={false} />

      {selectProduct && (
        <div className={'content'}>
          <div className={'productImage'}>
            <img src={'/catalog/cadeira_monaco.jpeg'} alt="product" />
          </div>
          <div className={'productInfo'}>
            <h1 className="title">{selectProduct.name}</h1>
            <p className="price">${selectProduct.price.toFixed(2)}</p>
            <p className="subtitle">{selectProduct.description}</p>
            <div className="bottomActions">
              <div className="action">
                <InputNumber type="number" defaulValue={1} name={'quantity'} />
                <Button label="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
