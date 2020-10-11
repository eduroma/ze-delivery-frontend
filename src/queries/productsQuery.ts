import { gql } from '@apollo/client';

const PRODUCTS = gql`
query poc($id: ID!, $categoryId: Int, $search: String) {
  poc(id: $id) {
    id
    products(categoryId: $categoryId, search: $search) {
      id
      title
      images {
        url
      }
      productVariants {
        price
        subtitle
      }
    }
  }
}
`

export default PRODUCTS;
