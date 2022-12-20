import main from '../assets/images/main.svg';

import LandingWrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

import { Link } from 'react-router-dom';

function Landing() {
  return (
    <LandingWrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracker</span>
          </h1>
          <p>
            I'm baby hella mukbang la croix, dreamcatcher try-hard poutine
            farm-to-table flannel gluten-free bushwick humblebrag hell of.
            Taxidermy bicycle rights man bun vinyl, prism readymade pug keffiyeh
            tumblr. Wayfarers biodiesel hoodie, subway tile organic vibecession.
          </p>
          <Link className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job tracker' className='img main-img' />
      </div>
    </LandingWrapper>
  );
}

export default Landing;
