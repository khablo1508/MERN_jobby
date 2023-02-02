import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Error, Landing, ProtectedRoute, Register } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/* page with index attribute will be shown while redirecting to dashboard */}
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
