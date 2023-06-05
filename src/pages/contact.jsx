//crear componente react funcional Contact
const Contact = () => {

    return (
        <main className="container my-5 fade-in">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
<h1>About</h1>
                    <div className="card mb-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="card-img-bottom" alt="Camera" />
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Contact