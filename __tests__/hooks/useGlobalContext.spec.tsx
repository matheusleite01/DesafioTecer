import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalProvider from '@/context/GlobalContext';
import useGlobalContext from '@/hooks/useGlobalContext';
import { ProductProps } from '@/types';

const mockProduct: ProductProps = {
  id: '1',
  title: 'Test Product',
  description: 'Description for test product',
  price: 100,
  image: '/test-image.jpg',
  rating: {
     count: 2,
     rate: 3
  }
};

const TestComponent = () => {
  const { cartDataProducts, insertCartProducts, removeCartProducts } = useGlobalContext();

  return (
    <div>
      <button onClick={() => insertCartProducts(mockProduct)}>Add Product</button>
      <button onClick={() => removeCartProducts('1')}>Remove Product</button>
      <ul>
        {cartDataProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe('useGlobalContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a product to the cart', () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    const addButton = screen.getByText('Add Product');
    addButton.click();

    expect(screen.getByText('Add Product')).toBeInTheDocument();
  });

  it('should remove a product from the cart', () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    const addButton = screen.getByText('Add Product');
    const removeButton = screen.getByText('Remove Product');

    addButton.click();
    removeButton.click();

    expect(screen.queryByText('Test Product')).not.toBeInTheDocument();
  });

  it('should persist cart data in localStorage', () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    const addButton = screen.getByText('Add Product');
    addButton.click();

    expect(localStorage.getItem('cartDataProducts')).toContain('Test Product');
  });

  it('should load cart data from localStorage on initialization', () => {
    localStorage.setItem('cartDataProducts', JSON.stringify([mockProduct]));

    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
