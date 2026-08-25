import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection'
import IndustriesCloud_First from './IndustriesCloud_First/IndustriesCloud_First'
import IndustriesCloud_Second from './IndustriesCloud_Second/IndustriesCloud_Second'
import GCloudBadge from '../../components/GCloudBadge/GCloudBadge';

function IndustriesCloud() {
  return (
    <>
    <IndustriesCloud_First/>
    <IndustriesCloud_Second/>
    <GCloudBadge />
    <S_lastSection />
    </>
  )
}

export default IndustriesCloud