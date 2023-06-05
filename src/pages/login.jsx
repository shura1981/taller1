import { useNavigate } from 'react-router-dom';
//crear componente funcional para el login
const Login = () => {
    const navigate = useNavigate();

    const handledSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: 1,
            rol: 'admin',
            name: 'Sebastian',
        }
        localStorage.setItem('userReact', JSON.stringify(user));
        navigate("/",{ replace: true });
    }


    return (
        <div className="container ">
            <div className="row v-100 align-items-center">
                <div className="col-md-6 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card-header">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handledSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Usuario" className="form-control" />
                                </div>
                                <div className="form-group my-3">
                                    <input type="password" placeholder="Contraseña" className="form-control" />
                                </div>
                                <button className="btn btn-primary btn-block">
                                    Ingresar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

