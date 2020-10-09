import React from 'react';
import { useQuery, gql } from '@apollo/client'

const DISTRIBUTOR = gql`
  query poc($id: ID!, $categoryId: Int, $search: String){
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`

const Products: React.FC = () => {

  const { loading, error, data } = useQuery(DISTRIBUTOR, {
    variables: {
      "id": "532",
      "search": "",
      "categoryId": null
    }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  return <h1>Produtos</h1>
}

export default Products
