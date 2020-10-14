import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import ProductCard from '../../components/ProductCard';

import { Product } from '../../pages/Products';

const mockProduct: Product = {
  id: 'product-id',
  images: [
    { url: 'product-image-url' }
  ],
  productVariants: [
    { price: 10 }
  ],
  title: 'Test Product'
}

describe('Product Card Component', () => {

  it('should be able to add product to card', () => {
    const { getByTestId, } = render(<ProductCard product={mockProduct} />)

    const addButtom = getByTestId('addButton');
    const quantityField = getByTestId('quantityField');

    expect(quantityField.textContent).toBe('0')

    act(() => {
      fireEvent.click(addButtom);
    })

    expect(quantityField.textContent).toBe('1')

  })

  it('should be able to remove product to card', () => {
    const { getByTestId, } = render(<ProductCard product={mockProduct} />)

    const addButtom = getByTestId('addButton');
    const quantityField = getByTestId('quantityField');
    const removeButton = getByTestId('removeButton')

    act(() => {
      fireEvent.click(addButtom);
    })

    expect(quantityField.textContent).toBe('1')

    act(() => {
      fireEvent.click(removeButton);
    })

    expect(quantityField.textContent).toBe('0')
  })

  it('not should be able to remove product when quantity is zero', () => {
    const { getByTestId, } = render(<ProductCard product={mockProduct} />)

    const quantityField = getByTestId('quantityField');
    const removeButton = getByTestId('removeButton')

    expect(quantityField.textContent).toBe('0')

    act(() => {
      fireEvent.click(removeButton);
    })

    expect(quantityField.textContent).toBe('0')
  })
})

