import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom';

import CATEGORIES from '../../queries/categoriesQuery';
import PRODUCTS from '../../queries/productsQuery';

import Header from '../../components/Header'

import { Container, CategoriesList, CategoriesButton, ProductsGrid, ProductsCard } from './styles';

interface Category {
  id: string;
  title: string;
}

interface CategoriesData {
  allCategory: Category[];
}

interface ProductVariants {
  price: number;
}

interface ProductImage {
  url: string;
}

interface Product {
  id: string;
  title: string;
  images: ProductImage[];
  productVariants: ProductVariants[]
}

interface ProductsData {
  poc: {
    products: Product[]
  }
}

interface ProductVars {
  id: string;
  search: string;
  categoryId: string | null;
}

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
}

const Products: React.FC = () => {
  const query = useQueryParams();
  const distributorId = query.get('distributor') || "";

  const [search, setSearch] = useState('');

  const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery<CategoriesData>(CATEGORIES)

  const {
    loading: productsLoading,
    error: productsError,
    data: productsData,
    refetch: productsRefetch
  } = useQuery<ProductsData, ProductVars>(PRODUCTS, {
    variables: {
      "id": distributorId,
      "search": "",
      "categoryId": null
    }
  })

  const handleCategoryClick = useCallback((categoryId) => {

    productsRefetch({
      "id": distributorId,
      "search": "",
      "categoryId": categoryId
    })

  }, [])

  const handleSearchClick = useCallback(() => {

    productsRefetch({
      "id": distributorId,
      "search": search,
      "categoryId": null
    })

  }, [search])

  return (
    <Container>
      <Header>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Pesquise os produtos' />
        <button onClick={handleSearchClick}>Pesquisar</button>
      </Header>
      <CategoriesList>
        {
          categoriesLoading ?
            <p className='loading'>Carregando Categorias...</p>
            :
            (
              categoriesData && categoriesData.allCategory.map((category: Category) => (
                <CategoriesButton key={category.id} onClick={() => handleCategoryClick(category.id)}>{category.title}</CategoriesButton>
              ))
            )
        }
      </CategoriesList>
      <ProductsGrid>
        {
          productsLoading ?
            <p className='loading'>Carregando Produtos...</p>
            :
            (
              productsData && productsData.poc.products.map((product: Product) => (
                <ProductsCard key={product.id}>
                  <div className='image-container'>
                    <img src={product.images[0].url} />
                  </div>

                  <div className='name-container'>
                    <p>{product.title}</p>
                  </div>


                </ProductsCard>
              ))
            )
        }

      </ProductsGrid>

    </Container >
  )
}

export default Products
