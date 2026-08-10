import img1 from '../../../assets/imgs/service-4/API.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';

function ApiIntegrationTab() {
  const items = [
               {
                   icon: icon1,
                   title: "Research planning",
                   description:
                       "Analyzing your current CRM structure to identify areas for automation and data-driven insights"
               },
               {
                   icon: icon2,
                   title: "Investment",
                   description:
                       "Expert implementation ensures increased productivity and maximum ROI from your Salesforce platform"
               }
  ];

  return (
    <>
      <div className="row rounded-3 bg-white">
        <div className="col-lg-5 mb-lg-0 mb-5">
          <img
            className="rounded-3 my-4"
            src={img1}
            alt="React Integration"
            width="100%"
          />
        </div>

        <div className="col-lg-7">
          <div className="p-lg-3">
            <h3 className="fw-normal">
            Connect Your <span className="fw-bold">Ecosystem Seamlessly Api</span>
            </h3>

            <p className="custom-p">
           We design and implement secure API integrations that unify platforms, enhance automation, and provide real-time data connectivity.
            </p>

            <div>
              <FlipImgwithContent items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiIntegrationTab;