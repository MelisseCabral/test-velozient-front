import Link from 'next/link';
import { BiSearchAlt2 } from 'react-icons/bi';
import { DiSmashingMagazine } from 'react-icons/di';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import styles from './page.module.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    image: 'https://picsum.photos/200/300',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          e
          <DiSmashingMagazine size={24} />
          HOP
        </a>

        <div className={styles.searchDiv}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <BiSearchAlt2 size={20} className={styles.iconInput} />
        </div>

        <div className={styles.headerMenu}>
          <Link href={'/cart'}>
            <FiShoppingCart size={24} />
          </Link>
          <Link href={'/account'}>
            <FiUser size={24} />
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.infoSearch}></div>
        <div className={styles.searchResults}>
          {products.map((product, index) => (
            <div key={index} className={styles.product} key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.imageProduct}
              />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <h4> ${product.price}</h4>
              </div>
              <button className={styles.buttonProduct}>
                <FiShoppingCart size={18} />
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
