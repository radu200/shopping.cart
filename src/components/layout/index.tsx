import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  cartQuantity?: number;
};

const Layout = ({ children, cartQuantity }: Props) => (
  <div className="container mt-2 mx-auto px-4">
    <div className="flex justify-between">
      <strong>Shop</strong>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <a className="underline">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a className="underline">Your Cart {cartQuantity || 0}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    {children}
  </div>
);

export default Layout;