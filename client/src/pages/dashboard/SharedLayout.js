import { Outlet, Link } from 'react-router-dom';
import SharedLayoutWrapper from '../../assets/wrappers/SharedLayout';

function SharedLayout() {
  return (
    <SharedLayoutWrapper>
      <nav>
        <Link to='add-job'>add job </Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </SharedLayoutWrapper>
  );
}

export default SharedLayout;
