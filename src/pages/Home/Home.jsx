import { TbUsersGroup } from 'react-icons/tb'
import Section02 from '../../components/HomeComs/Section02'
import Section03 from '../../components/HomeComs/Section03'
import Section04 from '../../components/HomeComs/section04'
import Section05 from '../../components/HomeComs/section05'
import Section06 from '../../components/HomeComs/Section06'

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-between items-center w-full h-10/12">
          <div></div>
          <div className="card justify-center items-center">
            <h1 className="text-6xl w-3/4 text-center">
              Upgrade the way you trade
            </h1>
            <p className="text-md mt-1.5 font-light tracking-wide w-3/5 text-center">
              Trade with the world’s largest retail broker and benefit from
              better-than-market conditions.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <button className="btn btn-warning">Register</button>
              <button className="btn btn-outline px-5">Try free demo</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-11/12 border-t">
            <div className="card flex-row gap-2 p-5">
              <TbUsersGroup size={17} />
              <p className="text-md font-light">1 million+ active traders</p>
            </div>
            <div className="card flex-row gap-2 p-5">
              <TbUsersGroup size={17} />
              <p className="text-md font-light">Multiple regulatory licenses</p>
            </div>
            <div className="card flex-row gap-2 p-5">
              <TbUsersGroup size={17} />
              <p className="text-md font-light">24/7 customer support</p>
            </div>
            <div className="card flex-row gap-2 p-5">
              <TbUsersGroup size={17} />
              <p className="text-md font-light">PCI DSS certified</p>
            </div>
          </div>
        </div>
      </div>
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </>
  )
}

export default HomePage
