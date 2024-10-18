import { Link } from 'react-router-dom';
import bg404 from '../../markup/img/bg-404.jpg';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>404 Not Found</h1>
      <img style={{ height: '200px' }} src={bg404} alt="img 404" />
      <Link to={'/'}>Вернуться на главную</Link>
    </div>
  );
}
