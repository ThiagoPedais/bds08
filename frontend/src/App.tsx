import { useEffect, useMemo, useState } from 'react';
import './App.scss';
import Fitler from './components/Filter';
import Navbar from './components/Navbar';
import PieChartCard from './components/Pie-Chart-Card';
import { buildSalesByStoreChart } from './helpers';
import { FilterData, Gender, PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {

  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);


  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', {params})
      .then(res => {
        const newSalesByGender = buildSalesByStoreChart(res.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by genre');
      });
  }, [params])

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
