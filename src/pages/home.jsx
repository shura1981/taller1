
import ScrollToTopOnMount from "../components/restart-scroll";
//crear componente react funcional Home
const Home = () => {
const h= setTimeout(() => {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new mdb.Input(formOutline).init();
      });
      clearTimeout(h);
}, 20);
    return (
        <main className="fade-in">
            {/* <ScrollToTopOnMount /> */}
            <div className="container-fluid pt-5 my-5 ">

                <section id="paris" className="mb-5">
                    <h3 className="text-center mb-5">Weekend in Paris 2015</h3>

                    <div className="lightbox">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(53).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(53).jpg"
                                    alt="Lightbox image 1" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(59).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(59).jpg"
                                    alt="Lightbox image 2" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(60).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(60).jpg"
                                    alt="Lightbox image 3" className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(56).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(56).jpg"
                                    alt="Lightbox image 4" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(57).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(57).jpg"
                                    alt="Lightbox image 5" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(58).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(58).jpg"
                                    alt="Lightbox image 6" className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-lg-0">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(54).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(54).jpg"
                                    alt="Lightbox image 7" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4 mb-4 mb-lg-0">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(55).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(55).jpg"
                                    alt="Lightbox image 8" className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-md-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(61).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(61).jpg"
                                    alt="Lightbox image 9" className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                    </div>
                </section>



                <section id="wedding">
                    <h3 className="text-center mb-5">Wedding</h3>

                    <div className="lightbox">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(129).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(129).jpg"
                                    alt="Lightbox image 1" className="w-100 shadow-1-strong rounded mb-4" />
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(82).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(82).jpg" alt="Lightbox image 2"
                                    className="w-100 shadow-1-strong rounded mb-4 mb-md-0" />
                            </div>
                            <div className="col-md-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(84).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(84).jpg" alt="Lightbox image 3"
                                    className="w-100 shadow-1-strong rounded mb-4" />
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/4-col/img%20(131).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/4-col/img%20(131).jpg"
                                    alt="Lightbox image 4" className="w-100 shadow-1-strong rounded mb-4 mb-md-0" />
                            </div>
                            <div className="col-md-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(126).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(126).jpg"
                                    alt="Lightbox image 5" className="w-100 shadow-1-strong rounded mb-4" />
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(85).jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(85).jpg" alt="Lightbox image 6"
                                    className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="container my-5">

                <section className="text-center">
                    <h3 className="mb-5">About me</h3>

                    <div className="row">
                        <div className="col-12">
                            <p className="lead">
                                Hello, my name is Larry Smith and I'm photographer based in New Zealand.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione
                                quisquam, dicta ab cupiditate iure eaque? Repellendus voluptatum, magni impedit
                                eaque delectus, beatae maxime temporibus maiores quibusdam quasi. Rem magnam ad
                                perferendis iusto sint tempora ea voluptatibus iure, animi excepturi modi aut
                                possimus in hic molestias repellendus illo ullam odit quia velit. Qui expedita sit
                                quo, maxime molestiae.
                            </p>
                            <p className="mb-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem.
                            </p>
                        </div>
                    </div>
                </section>


                <hr className="my-5" />


                <section className="text-center mb-5">
                    <h3 className="mb-5">Contact</h3>

                    <p className="text-center mb-5 mx-auto w-responsive">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laborum animi doloremque
                        nam dicta veniam dolor ea nostrum excepturi laboriosam molestiae, expedita odit id! Sunt
                        quia cumque consequatur perferendis hic.
                    </p>

                    <form>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="form-outline">
                                            <input type="text" id="form3Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline">
                                            <input type="email" id="form3Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example2">Email Address</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example3">Subject</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                    <label className="form-label" htmlFor="form4Example3">Message</label>
                                </div>
                                <div className="text-center text-md-start">
                                    <button type="submit" className="btn btn-dark btn-lg mb-5">
                                        Send
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <i className="fas fa-map-marker-alt fa-2x text-dark"></i>
                                        <p>New York, NY 10012, USA</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone fa-2x text-dark"></i>
                                        <p>+ 01 234 567 89</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope fa-2x text-dark"></i>
                                        <p className="mb-0">contact@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>

            </div>


            <section>
                <div style={{ backgroundColor: '#b5b8c1', height: '300px' }}>
                    <div className="d-flex align-items-center justify-content-center text-center h-100">
                        <h3 className="display-6 text-white mb-0">
                            <i className="fas fa-quote-left fa-xs" aria-hidden="true"></i> I photograph to find out
                            what something will look like photographed.
                            <i className="fas fa-quote-right fa-xs" aria-hidden="true"></i>
                        </h3>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Home


