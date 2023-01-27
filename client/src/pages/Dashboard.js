import { useEffect } from 'react';
import DashboardPageWrapper from '../assets/wrappers/DashboardFormPage';

function Dashboard() {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <DashboardPageWrapper>Dashboard Page</DashboardPageWrapper>;
}

export default Dashboard;
