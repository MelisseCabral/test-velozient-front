'use client';
import { FC, HTMLAttributes, ReactNode } from 'react';
import './styles.css';

interface ICardProduct extends HTMLAttributes<HTMLDivElement> {
  /*
   * Name of the input
   */
  name: string;
  /*
   * Value of the input
   */
  description?: string;
  imageUrl?: string;
  price?: number;

  /*
   * Type of the input
   */
  category?: string;

  rate?: string | ReactNode;

  available?: boolean;
  quantity?: number;
  onClick?: () => void;
}

const CardProduct: FC<ICardProduct> = ({
  id,
  name,
  description = '',
  imageUrl = '',
  price = 0,
  rate = '',
  available,
  quantity = 0,
  onClick = () => {},

  ...rest
}): JSX.Element => {
  return (
    <div className={'product'} key={id} onClick={onClick}>
      <img
        src={'/catalog/cadeira_monaco.jpeg'}
        alt={name}
        className={'product__image'}
      />
      <div className={'product__info'}>
        <h4 className="product__title">{name}</h4>
        <h3 className="product__price"> ${price.toFixed(2)}</h3>
      </div>
      <span className={'product__rate'}>{rate}</span>
    </div>
  );
};

export default CardProduct;
