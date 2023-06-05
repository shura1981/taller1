import { Outlet } from "react-router-dom"

//crear componente react funcional About
const About = () => {

    return (
        <main className="mb-6 my-5 fade-in">
            <Outlet />
            <div className="container">
                <div className="row gx-lg-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <section className="">
                            <section className="mb-5">
                                <div className="d-flex">
                                    <input type="search" className="form-control rounded me-1" placeholder="Search"
                                        aria-label="Search" aria-describedby="search-addon" />
                                    <a href="#!" role="button" className="
                btn btn-link btn-floating
                text-reset
                overflow-visible
                ">
                                        <i className="fas fa-search"></i>
                                    </a>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h5 className="fw-bold mb-4">Subcategories</h5>

                                <div className="text-muted small text-uppercase">
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Dresses</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Tops, Tees & Blouses</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Sweaters</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Fashion Hoodies & Sweatshirts</a>
                                    </p>
                                    <p className="mb-3"><a href="#!" className="text-reset">Jeans</a></p>
                                    <p className="mb-3"><a href="#!" className="text-reset">Pants</a></p>
                                    <p className="mb-3"><a href="#!" className="text-reset">Skirts</a></p>
                                    <p className="mb-3"><a href="#!" className="text-reset">Shorts</a></p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Leggings</a>
                                    </p>
                                    <p className="mb-3"><a href="#!" className="text-reset">Active</a></p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Swimsuits & Cover Ups</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Lingerie, Sleep & Lounge</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Jumpsuits, Rompers & Overalls</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Coats, Jackets & Vests</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="#!" className="text-reset">Suiting & Blazers</a>
                                    </p>
                                    <p className="mb-0">
                                        <a href="#!" className="text-reset">Socks & Hosiery</a>
                                    </p>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h5 className="fw-bold mb-4">Condition</h5>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="condition1" />
                                    <label className="form-check-label" htmlFor="condition1"> New </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="condition2" />
                                    <label className="form-check-label" htmlFor="condition2">
                                        Used
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="condition3" />
                                    <label className="form-check-label" htmlFor="condition3">
                                        Collectible
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="condition4" />
                                    <label className="form-check-label" htmlFor="condition4">
                                        Renewed
                                    </label>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h5 className="fw-bold mb-4">Avg. Customer Review</h5>

                                <a href="" className="d-flex align-items-center mb-3">
                                    <ul className="rating me-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                        data-mdb-value="4">
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                    </ul>
                                    <small className="text-muted">& UP</small>
                                </a>

                                <a href="" className="d-flex align-items-center mb-3">
                                    <ul className="rating me-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                        data-mdb-value="3">
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                    </ul>
                                    <small className="text-muted">& UP</small>
                                </a>

                                <a href="" className="d-flex align-items-center mb-3">
                                    <ul className="rating me-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                        data-mdb-value="2">
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                    </ul>
                                    <small className="text-muted">& UP</small>
                                </a>

                                <a href="" className="d-flex align-items-center mb-3">
                                    <ul className="rating me-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                        data-mdb-value="1">
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                    </ul>
                                    <small className="text-muted">& UP</small>
                                </a>
                            </section>
                            <section className="mb-5">
                                <h5 className="fw-bold mb-4">Price radio</h5>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="radioForm" id="radioCondition1"
                                    />
                                    <label className="form-check-label" htmlFor="radioCondition1">
                                        Under $25
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="radioForm" id="radioCondition2" />
                                    <label className="form-check-label" htmlFor="radioCondition2">
                                        $25 to $50
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="radioForm" id="radioCondition2" />
                                    <label className="form-check-label" htmlFor="radioCondition2">
                                        $50 to $100
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="radioForm" id="radioCondition2" />
                                    <label className="form-check-label" htmlFor="radioCondition2">
                                        $100 to $200
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="radioForm" id="radioCondition2" />
                                    <label className="form-check-label" htmlFor="radioCondition2">
                                        $200 & Above
                                    </label>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h5 className="fw-bold mb-4">Colors</h5>

                                <input type="radio" className="btn-check" name="options" id="color-primary" autoComplete="off"
                                />
                                <label className="btn btn-primary btn-floating me-2 mb-2 shadow-0" htmlFor="color-primary"></label>

                                <input type="radio" className="btn-check" name="options" id="color-danger" autoComplete="off" />
                                <label className="btn btn-danger btn-floating me-2 mb-2 shadow-0" htmlFor="color-danger"></label>

                                <input type="radio" className="btn-check" name="options" id="color-secondary"
                                    autoComplete="off" />
                                <label className="btn btn-secondary btn-floating me-2 mb-2 shadow-0"
                                    htmlFor="color-secondary"></label>

                                <input type="radio" className="btn-check" name="options" id="color-success"
                                    autoComplete="off" />
                                <label className="btn btn-success btn-floating me-2 mb-2 shadow-0" htmlFor="color-success"></label>

                                <input type="radio" className="btn-check" name="options" id="color-warning"
                                    autoComplete="off" />
                                <label className="btn btn-warning btn-floating me-2 mb-2 shadow-0" htmlFor="color-warning"></label>

                                <input type="radio" className="btn-check" name="options" id="color-info" autoComplete="off" />
                                <label className="btn btn-info btn-floating me-2 mb-2 shadow-0" htmlFor="color-info"></label>
                            </section>
                            {/* <!-- Section: Condition --> */}
                        </section>
                    </div>

                    <div className="col-lg-9">
                        <section className="mb-6">
                            <div className="row">
                                <div className="col-4 col-lg-3 text-center text-lg-start">
                                    <button className="btn btn-link btn-floating text-reset btn-lg active">
                                        <i className="fas fa-th-list fa-lg"></i>
                                    </button>
                                    <button className="btn btn-link btn-floating text-reset btn-lg">
                                        <i className="fas fa-th-large fa-lg"></i>
                                    </button>
                                </div>

                                <div className="col-8 col-lg-6 d-flex justify-content-center">
                                    <select className="select">
                                        <option value="1">Best rating</option>
                                        <option value="2">Lowest price first</option>
                                        <option value="3">Highest price first</option>
                                    </select>
                                    <label className="form-label select-label">Sort</label>
                                </div>

                                <div className="
                col-lg-3
                d-none d-lg-flex
                justify-content-center justify-content-lg-end
                ">
                                    <nav aria-label="...">
                                        <ul className="pagination pagination-circle mb-0">
                                            <li className="page-item">
                                                <a className="page-link" href="#"
                                                    aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">1</a>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="#">2 <span
                                                    className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </section>

                        <section className="">
                            <div className="row gx-xl-5 justify-content-center">
                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/042.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          ">
                                                        <span className="badge badge-danger rounded-pill me-2">-15%</span>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Elegant dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="4">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <s className="text-muted me-2 small align-middle">$119</s><span
                                                    className="align-middle">$101</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          ">
                                                        <span className="badge badge-primary rounded-pill me-2">New</span>
                                                        <span className="badge badge-success rounded-pill">Eco</span>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Sophisticated dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="5">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <span className="align-middle">$399</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/069.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          "></div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Fashionable dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="4">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <span className="align-middle">$249</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/042.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          ">
                                                        <span className="badge badge-danger rounded-pill me-2">-15%</span>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Elegant dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="4">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <s className="text-muted me-2 small align-middle">$119</s><span
                                                    className="align-middle">$101</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          ">
                                                        <span className="badge badge-primary rounded-pill me-2">New</span>
                                                        <span className="badge badge-success rounded-pill">Eco</span>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Sophisticated dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="5">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <span className="align-middle">$399</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-6 mb-4">

                                    <div>

                                        <div className="
                    bg-image
                    ripple
                    shadow-4-soft
                    rounded-6
                    mb-4
                    overflow-hidden
                    d-block
                    " data-ripple-color="light">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/069.jpg"
                                                className="w-100" alt="" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="
                          d-flex
                          justify-content-start
                          align-items-end
                          h-100
                          p-3
                          "></div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"  >
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <a href="" className="px-3 text-reset d-block">
                                            <p className="fw-bold mb-2">Fashionable dress</p>
                                            <p className="text-muted mb-2">Dresses</p>
                                            <ul className="rating mb-2" data-mdb-toggle="rating" data-mdb-readonly="true"
                                                data-mdb-value="4">
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary ps-0" title="Bad"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm text-primary" title="Excellent"></i>
                                                </li>
                                            </ul>
                                            <h5 className="mb-2">
                                                <span className="align-middle">$249</span>
                                            </h5>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default About