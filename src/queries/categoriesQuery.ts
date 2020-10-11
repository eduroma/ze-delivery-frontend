import { gql } from '@apollo/client';

const CATEGORIES = gql`
query allCategoriesSearch {
  allCategory {
    title
    id
  }
}
`

export default CATEGORIES;
