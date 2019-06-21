import { connect } from 'react-redux';

function checkAuth({ roles, permissions }, checkRole, checkPermission) {
  if (checkRole && !roles.includes(checkRole)) {
    return false;
  }
  if (checkPermission && !permissions.includes(checkPermission)) {
    return false;
  }
  return true;
}

const Can = ({
  auth, children, checkRole, checkPermission,
}) => (typeof children === 'function'
  ? children(checkAuth(auth, checkRole, checkPermission))
  : checkAuth(auth, checkRole, checkPermission) && children);

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Can);
