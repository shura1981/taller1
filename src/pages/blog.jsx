import { Link } from 'react-router-dom';
//crear componente react funcional Blob
const Blog = () => {

    return (

        <main className="mt-5 mb-4 fade-in">
            <div className="container">
                <section>
                    <div className="row gx-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/slides/080.jpg" className="img-fluid" />
                                <Link to="/blog/como_crear_un_componente_en_react">
                                    <div className="mask"    ></div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 mb-md-0">
                            <span className="badge badge-danger mb-3">News of the day</span>
                            <h4><strong>Facilis consequatur eligendi</strong></h4>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                consequatur eligendi quisquam doloremque vero ex debitis
                                veritatis placeat unde animi laborum sapiente illo possimus,
                                commodi dignissimos obcaecati illum maiores corporis.
                            </p>
                            <Link to="/blog/como_crear_un_componente_en_react" type="button" className="btn btn-primary">Read more</Link>
                        </div>
                    </div>
                </section>

                <hr className="my-5" />

                <section>
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <div>
                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple mb-4" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/fluid/city/113.jpg" className="img-fluid" />
                                    <Link to="/blog/como_crear_un_componente_en_vewjs?time=2023-05-01">
                                        <div className="mask"  ></div>
                                    </Link>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <a href="" className="text-info">
                                            <i className="fas fa-plane"></i>
                                            Travels
                                        </a>
                                    </div>

                                    <div className="col-6 text-end">
                                        <u> 15.07.2020</u>
                                    </div>
                                </div>

                                <a href="" className="text-dark">
                                    <h5>This is title of the news</h5>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odit, iste aliquid. Sed id nihil magni, sint vero provident
                                        esse numquam perferendis ducimus dicta adipisci iusto nam
                                        temporibus modi animi laboriosam?
                                    </p>
                                </a>

                                <hr />

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div>
                                <div className="bg-image hover-overlay shadow-1-strong ripple rounded mb-4" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/fluid/city/011.jpg" className="img-fluid" />
                                    <a href="#!">
                                        <div className="mask"  ></div>
                                    </a>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <a href="" className="text-danger">
                                            <i className="fas fa-chart-pie"></i>
                                            Business
                                        </a>
                                    </div>

                                    <div className="col-6 text-end">
                                        <u> 15.07.2020</u>
                                    </div>
                                </div>

                                <a href="" className="text-dark">
                                    <h5>This is title of the news</h5>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odit, iste aliquid. Sed id nihil magni, sint vero provident
                                        esse numquam perferendis ducimus dicta adipisci iusto nam
                                        temporibus modi animi laboriosam?
                                    </p>
                                </a>

                                <hr />

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div>
                                <div className="bg-image hover-overlay shadow-1-strong ripple rounded mb-4" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/fluid/city/018.jpg" className="img-fluid" />
                                    <a href="#!">
                                        <div className="mask"  ></div>
                                    </a>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <a href="" className="text-warning">
                                            <i className="fas fa-code"></i>
                                            Technology
                                        </a>
                                    </div>

                                    <div className="col-6 text-end">
                                        <u> 15.07.2020</u>
                                    </div>
                                </div>

                                <a href="" className="text-dark">
                                    <h5>This is title of the news</h5>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odit, iste aliquid. Sed id nihil magni, sint vero provident
                                        esse numquam perferendis ducimus dicta adipisci iusto nam
                                        temporibus modi animi laboriosam?
                                    </p>
                                </a>

                                <hr />

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/011.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/012.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/013.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-dark">
                                    <div className="row mb-4 border-bottom pb-2">
                                        <div className="col-3">
                                            <img src="https://mdbootstrap.com/img/new/standard/city/014.jpg"
                                                className="img-fluid shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div className="col-9">
                                            <p className="mb-2">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </p>
                                            <p>
                                                <u> 15.07.2020</u>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default Blog