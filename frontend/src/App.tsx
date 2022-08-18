import { useEffect, useState } from 'react';
import './App.scss';
import Fitler from './components/Filter';
import Navbar from './components/Navbar';
import PieChartCard from './components/Pie-Chart-Card';
import { buildSalesByStoreChart } from './helpers';
import { Gender, PieChartConfig, SalesByGender } from './types';
import { makeRequest } from './utils/request';

function App() {

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest
    .get<SalesByGender[]>('/sales/by-gender')
    .then(res => {
      const newSalesByGender = buildSalesByStoreChart(res.data);
      setSalesByGender(newSalesByGender);
    })
  }, [])

  return (
    <>
      <Navbar />
      <Fitler />
      <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
      {/* <PieChartCard name="" labels={['Brasília DF', 'Goias', 'Salvador', 'Vicente Pires']} series={[40, 10, 20, 30]} /> */}
    </>
  )
}

export default App;
