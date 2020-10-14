import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing';

import Products from '../../pages/Products';

import categoriesQuery from '../../queries/categoriesQuery';
import productsQuery from '../../queries/productsQuery';
import { act } from 'react-dom/test-utils';

const apiMocks = [
  {
    request: {
      query: categoriesQuery,
    },
    result: {
      data: {
        allCategory: [
          {
            title: 'Categoria 1',
            id: "1"
          },
          {
            title: 'Categoria 2',
            id: "2"
          }
        ]
      }
    }
  },
  {
    request: {
      query: productsQuery,
      variables: {
        id: "252",
        search: "",
        categoryId: null
      }
    },
    result: {
      data: {
        poc: {
          id: "252",
          products: [
            {
              id: "1",
              title: "Produto 1",
              images: [
                {
                  url: 'url-produto-1'
                }
              ],
              productVariants: [
                {
                  price: 10,
                  subtitle: 'Produto 1'
                }
              ]
            },
            {
              id: "2",
              title: "Produto 2",
              images: [
                {
                  url: 'url-produto-2'
                }
              ],
              productVariants: [
                {
                  price: 10,
                  subtitle: 'Produto 2'
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    request: {
      query: productsQuery,
      variables: {
        id: "252",
        search: "",
        categoryId: "1"
      }
    },
    result: {
      data: {
        poc: {
          id: "252",
          products: [
            {
              id: "1",
              title: "Produto 1",
              images: [
                {
                  url: 'url-produto-1'
                }
              ],
              productVariants: [
                {
                  price: 10,
                  subtitle: 'Produto 1'
                }
              ]
            }
          ]
        }
      }
    }
  }
]

describe('Products Page', () => {
  it('should be able to fetch categories from API', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/products?distributor=252"]} >
        <MockedProvider mocks={apiMocks}>
          <Products />
        </MockedProvider>
      </MemoryRouter >
    )

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve))
    })
    expect(getByText('Categoria 1')).toBeTruthy();
    expect(getByText('Categoria 2')).toBeTruthy();
  })

  it('should be able to fetch products from API', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/products?distributor=252"]} >
        <MockedProvider mocks={apiMocks}>
          <Products />
        </MockedProvider>
      </MemoryRouter >
    )

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve))
    })
    expect(getByText('Produto 1')).toBeTruthy();
    expect(getByText('Produto 2')).toBeTruthy();
  })
})
