'use client';
import { IProduct } from '@/types/IProduct';
import React from 'react';
import OrderService from '../services/OrderService';

export default function useOrder() {
  const [search, setSearch] = React.useState('');
  const [order, setOrder] = React.useState<IProduct[]>();
  const [loading, setLoading] = React.useState(false);

  const service = new OrderService();

  return {
    setSearch,
    loading,
    order,
    search,
  };
}
