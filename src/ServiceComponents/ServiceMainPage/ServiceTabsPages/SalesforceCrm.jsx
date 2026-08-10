import img1 from '../../../assets/imgs/service-4/Salesforce CRM.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';
import ServiceMainPagePills from '../ServiceMainPagePills/ServiceMainPagePills';
import { salesforceServices } from '../../../data/salesforceServices';
function SalesforceCrm() {
  const items = [
    {
      icon: icon1,
      title: "Research planning",
      description:
        "Analyzing your current CRM structure to identify areas for automation and AI-driven insights."
    },
    {
      icon: icon2,
      title: "Investment",
      description:
        " 12 years CRM industries experience in implementating the Salesforce CRMs helps in maximizing your teams productivity resulting in higher revenue. "
    }]
  return (
    <>
      <div className="row rounded-3 bg-white">
        <div className="col-lg-5 mb-lg-0 mb-5">
          <img
            className="rounded-3 my-5"
            src={img1}
            alt="Salesforce CRM"
            width={"100%"}
          />
        </div>

        <div className="col-lg-7">
          <div className="p-lg-3">
            <h3 className="fw-regular">
              Empower Your Business <p> with AI-powered<span className="fw-bold"> Salesforce CRM</span> </p>
            </h3>
            <p className='custom-p'>
              <b className='text-black'>At CODM,</b> we help businesses to customize and configure Salesforce CRM experience to business
              needs enhancing automation, reporting, and customer engagement through
              tailored AI-enabled CRM solutions.
            </p>

            <div>
              <FlipImgwithContent items={items} />
            </div>
          </div>

        </div>


        {/* Pills section */}

        <h3>Salesforce Industries Cloud CRMs </h3>

        <div className="d-flex flex-wrap">
          {salesforceServices.map((service) => (
            <ServiceMainPagePills
              key={service.link}
              pillLabel={service.pillLabel}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SalesforceCrm;