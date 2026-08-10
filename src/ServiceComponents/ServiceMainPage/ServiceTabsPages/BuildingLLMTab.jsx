import img1 from '../../../assets/imgs/service-4/LLM.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';

function BuildingLLMTab() {
    const items = [
        {
            icon: icon1,
            title: "Data & Use Case Research",
            description:
                "Analyzing your business requirements, datasets, and workflows to design effective Large Language Model solutions"
        },
        {
            icon: icon2,
            title: "Model Development",
            description:
                "Building and fine tuning LLMs to deliver intelligent automation, accurate responses, and scalable AI powered applications"
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
                            Building Powerful <span className="fw-bold">LLM Solutions</span> for Intelligent Applications
                        </h3>

                        <p className="custom-p">
                            We design and develop advanced Large Language Model (LLM) solutions that enable smarter automation, natural conversations, and data driven insights for modern AI powered products.
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
export default BuildingLLMTab;