import { Route, Routes, useLocation } from 'react-router';
import Page from './components/Pages/Page'
import Page2 from './components/Pages/Page2'
import './App.scss';

function App() {
  const location = useLocation();
  return (

    <Routes className="container" location={location} key={location.pathname}>
      <Route key="page" path="/" element={<Page />} />
      <Route key="pagetwo" path="/pagetwo" element={<Page2 />} />
    </Routes>


  );
}

export default App;
