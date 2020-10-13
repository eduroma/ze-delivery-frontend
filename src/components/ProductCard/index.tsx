import React, { useState, useCallback } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

import { convertNumberToBRL } from '../../utils/convertNumberToBRL';

import { Product } from '../../pages/Products';

import { Container, NameContainer, ImageContainer, PriceContainer, ButtonsContainer } from './styles';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = useCallback(() => {

    const newQuantity = quantity + 1;

    setQuantity(newQuantity)

  }, [quantity])

  const handleDecrement = useCallback(() => {

    const newQuantity = quantity - 1;

    setQuantity(newQuantity >= 0 ? newQuantity : 0)

  }, [quantity])

  return (
    <Container>
      <NameContainer>
        <p>{product.title}</p>
      </NameContainer>

      <ImageContainer>
        <img src={product.images[0].url} />
      </ImageContainer>

      <PriceContainer>
        <p>
          {convertNumberToBRL(product.productVariants[0].price)}
        </p>
      </PriceContainer>

      <ButtonsContainer>
        <button onClick={handleIncrement}><MdAdd size={18} color='#333' /></button>
        <span>{quantity}</span>
        <button onClick={handleDecrement}><MdRemove size={18} color='#333' /></button>
      </ButtonsContainer>

    </Container>

  )
}

export default ProductCard;
