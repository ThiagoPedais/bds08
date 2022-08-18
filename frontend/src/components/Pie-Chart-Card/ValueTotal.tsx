import { useEffect, useState } from 'react';
import { SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { makeRequest } from '../../utils/request';
import { sumSalesByDate } from './helpers';
import './styles.scss';

export default function ValueTotal() {

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
    .get<SalesByGender[]>('/sales/by-gender')
    .then(res => {
      const newTotalSum = sumSalesByDate(res.data);
      setTotalSum(newTotalSum);
      console.log(res.data);
    })
  }, [])


  return (
    <div className="valueTotal-container">
      <div>
        <h1 className="valueTotal">{formatPrice(totalSum)}</h1>
        <span className="salesTotal">Total de vendas</span>
      </div>
    </div>
  )
}
