'use client';
import { IProduct } from '@/types/IProduct';
import React, { useEffect } from 'react';
import ProductService from '../services/ProductService';

export default function useProduct() {
  const [search, setSearch] = React.useState('');
  const [products, setProducts] = React.useState<IProduct[]>();
  const [loading, setLoading] = React.useState(false);

  const service = new ProductService();
    
  useEffect(() => {
    fetchProducts('');
  }, []);

  function fetchProducts(search: string) {
    setLoading(true);
    service.getProducts(search).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }

  function getProductById(id: string) {
    return service.getProduct(id).then((data) => {
      return data;
    });
  }

  return {
    setSearch,
    fetchProducts,
    getProductById,
    loading,
    products,
    search,
  };
}
