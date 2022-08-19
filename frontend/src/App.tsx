import { useEffect, useState } from 'react';
import './App.scss';
import Fitler from './components/Filter';
import Navbar from './components/Navbar';
import PieChartCard from './components/Pie-Chart-Card';
import { buildSalesByStoreChart } from './helpers';
import { FilterData, Gender, PieChartConfig, SalesByGender } from './types';
import { makeRequest } from './utils/request';

function App() {

  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender')
      .then(res => {
        const newSalesByGender = buildSalesByStoreChart(res.data);
        setSalesByGender(newSalesByGender);
      })
  }, [])

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    // console.log({ filter });
  };

  return (
    <>
      <Navbar />
      <Fitler onFilterChange={onFilterChange} />
      <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
    </>
  )
}

export default App;
