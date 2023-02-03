import { Outlet, Link } from 'react-router-dom';
import SharedLayoutWrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';

function SharedLayout() {
  return (
    <SharedLayoutWrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
}

export default SharedLayout;
