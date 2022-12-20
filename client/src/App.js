import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </Router>
  );
}

export default App;
