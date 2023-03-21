'use client';
import Input from '@/components/Input';
import useProduct from '@/hooks/useProduct';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsDistributeVertical, BsGrid, BsSliders } from 'react-icons/bs';
import './styles.css';

export default function FiltersComponent() {
  const { fetchProducts, loading, products } = useProduct();
  
  return (
    <div className="searchContainer">
      <div className="barFilter">
        <BsSliders size={24} />
        Filters
        <div className="barFilter">
          <div className="icons">
            <BsGrid size={16} />
            <BsDistributeVertical size={16} />
          </div>
          <div className="showingContainer">
            Showing {products ? products.length : 0} of 100
          </div>
        </div>
      </div>
      <Input
        type="text"
        className={'searchInput'}
        placeholder="Search"
        onChange={(e: { target: any }) => {
          fetchProducts(e.target.value);
        }}
        endAdornment={<BiSearchAlt2 size={24} />}
        name={'Search'}
      />
    </div>
  );
}
