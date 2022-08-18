import { useState } from 'react';
import './App.scss';
import Fitler from './components/Filter';
import Navbar from './components/Navbar';
import PieChartCard from './components/Pie-Chart-Card';
import { PieChartConfig } from './types';

function App() {

  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();

  return (
    <>
      <Navbar />
      <Fitler />
      <PieChartCard name="" labels={['Brasília DF', 'Goias', 'Salvador', 'Vicente Pires']} series={[40, 10, 20, 30]} />
    </>
  )
}

export default App;
