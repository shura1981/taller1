import ButtonLike from "../components/button-like";
import Button from "../components/button/button";
//crear componente react funcional 404
const NotFound = () => {

    return (
        <main className="d-flex flex-column justify-content-center align-items-center h-100 fade-in " style={{gap:'10px'}}>
            <h1>404</h1>
            <p>Esta es la página de 404</p>
            <ButtonLike/>
            <ButtonLike/>
            <ButtonLike/>
            <ButtonLike/>
            <ButtonLike/>
            <Button/>
        </main>
    )
}

export default NotFound