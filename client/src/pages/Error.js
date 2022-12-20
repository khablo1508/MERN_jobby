import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import ErrorWrapper from '../assets/wrappers/ErrorPage';

function Error() {
  return (
    <ErrorWrapper className='full-page'>
      <div>
        <img src={img} alt='error' />
        <h3>ohh! page not found!</h3>
        <Link to='/'>back home</Link>
      </div>
    </ErrorWrapper>
  );
}

export default Error;
