import './App.css';
import { useState } from 'react';
import { HighChartLine } from './HighChartLine';
import { IntensityBar } from './IntensityBar';

function App() {

  const [company, setCompanyName] = useState('MSFT')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    setIsLoading(false)
  }

  const handleInputChange = (e) => {
    setIsLoading(true)
    setCompanyName(e.target.value)
  }

  return (
    <div style={{ height: '100vh', 
    // margin: '0px 20px' 
    }}>
      <div>
        <input onChange={handleInputChange} value={company} />
        <button onClick={fetchData}>Search</button>
      </div>
      {!isLoading && <HighChartLine company={company} />}
      {!isLoading && <IntensityBar company={company} />}
    </div>
  );
}

export default App;
