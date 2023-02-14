import SmallSidebarWrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

function SmallSidebar() {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <SmallSidebarWrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo className='logo' />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </SmallSidebarWrapper>
  );
}

export default SmallSidebar;
