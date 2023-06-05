import { Navigate, Outlet } from 'react-router-dom';
const GuardValidate = ({ children, isAllowed, redirecTo }) => {
    if (!isAllowed) return <Navigate to={redirecTo} replace />;
    return children ? children : <Outlet />;
}

export default GuardValidate;