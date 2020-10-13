
export const convertNumberToBRL = (number: number): string => {

  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number);

  return formatedNumber;
}
