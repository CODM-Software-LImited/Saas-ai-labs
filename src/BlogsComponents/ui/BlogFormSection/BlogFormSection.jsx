import './BlogFormSection.css';
  
const BlogFormSection = ({
  heading = "Share Your Thoughts on Our Integration Framework",
  subHeading = "Leave a comment",
}) => {
  return (
    <div className="">
    <section className="section-comments position-relative pt-5">
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="blogFormSectionHeading mb-4 text-center" style={{ fontWeight: 700 }}>{heading}</h2>
            <h4 className="mb-5">{subHeading}</h4>
            {/* Form */}

            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000rsAL" method="POST">

              <input type="hidden" name="oid" value="00DgD000000rsAL"/>
              <input type="hidden" name="retURL" value="https://codmsoftware.co.uk/SalesforceCRM.html" />

              <div className="row g-4">
                {/* Name */}
                <div className="col-md-4 pl-0">
                  <div className="form-group border rounded-1">
                    <input
                      id="name"
                      placeholder="Enter your name" 
                      required
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-4">
                  <div className="form-group border rounded-1">
                    <input
                      id="email"
                      placeholder="info@"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="col-md-4">
                  <div className="form-group border rounded-1">
                    <input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      type="text"
                      name="website"
                    />
                  </div>
                </div>

                {/* Comment */}
                <div className="col-12 border rounded-1">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="comment"
                      placeholder="Describe Your Project in Short"
                      rows="4"
                      name="description"
                      required
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12 hover-up d-flex justify-content-end">
                  <button type="submit" className="purple-bg mt-4 p-3 hover-up border-0 rounded-2">
                    Send Message
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
                        fill="black"
                        stroke="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogFormSection;
