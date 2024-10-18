import { Navigate } from 'react-router-dom';
import { AutoStatus } from './const';

type PrivatRouteProps = {
  autoStatus: AutoStatus;
  children: JSX.Element;
};

export default function PrivateRoute(props: PrivatRouteProps): JSX.Element {
  const { autoStatus, children } = props;
  return autoStatus === AutoStatus.Auth ? children : <Navigate to={'/login'} />;
}
