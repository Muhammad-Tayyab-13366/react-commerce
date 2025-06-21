export const FormatPrice = ({price}) => {
    
    return new Intl.NumberFormat('ur-PK', {
        style: 'currency',
        currency: 'PKR',
      }).format(price/100);
      
}