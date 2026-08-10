import bgImg from "../../../assets/imgs/page-header/bg-line.png";

const DotNetApplication_First = () => {

    return (
        <>
            <section className="FinancialServiceCloud_First section-page-header py-10 fix position-relative">
                <div className="container position-relative z-1 mt-5">
                    <div className="text-start">
                        <h3>.NET Application</h3>

                        <div className="d-flex">
                            <a href="/" className="d-flex text-decoration-none black-text">
                                <p className="mb-0 text-900 fw-bold">Home</p>
                            </a>

                            <svg
                                className="mx-3 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                            >
                                <path
                                    className="stroke-dark"
                                    d="M1 1.5L6.5 6.75L1 12"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>


                            <a href="/ItServices" className="d-flex text-decoration-none black-text">
                                <p className="mb-0 text-900 fw-bold">Services</p>
                            </a>

                            <svg
                                className="mx-3 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                            >
                                <path
                                    className="stroke-dark"
                                    d="M1 1.5L6.5 6.75L1 12"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <p className="purple-text mb-0 fw-bold">.NET Application</p>

                        </div>
                    </div>
                </div>

                <img
                    className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                    src={bgImg}
                    width={'100%'}
                    alt="Codm"
                />

            </section>

        </>
    );
};

export default DotNetApplication_First;