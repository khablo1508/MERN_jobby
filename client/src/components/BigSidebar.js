import BigSidebarWrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import { useAppContext } from '../context/appContext';

function BigSidebar() {
  const { showSidebar } = useAppContext();
  return (
    <BigSidebarWrapper>
      <div
        className={
          showSidebar
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </BigSidebarWrapper>
  );
}

export default BigSidebar;
