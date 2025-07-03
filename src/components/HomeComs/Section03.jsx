import { TbAffiliate, TbApiApp } from 'react-icons/tb'
import image from '../../assets/section03.png'
import image2 from '../../assets/section04.png'

const Section03 = () => {
  return (
    <>
      <section className="p-5 lg:p-15 mt-15 flex flex-col lg:flex-row items-center">
        <img src={image} width={550} alt="" className="card" />
        <div className="card p-5 lg:p-15 mt-13 md:mt-1">
          <TbAffiliate size={85} />
          <h2 className="text-3xl">Seize every opportunity</h2>
          <p className="text-md font-light tracking-wide mt-1.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            a amet voluptate facere sunt iste tenetur unde dolore ipsa veniam
            doloribus provident reprehenderit, fugiat temporibus eius mollitia
            nemo hic ex!
          </p>
          <ul className="mt-5 menu w-1/2">
            <li>
              <a href="">MetaTrader 5</a>
            </li>
            <li>
              <a href="">Exness Terminal</a>
            </li>
            <li>
              <a href="">Exness Trade app</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="p-5 md:p-15 mt-11 flex flex-col-reverse lg:flex-row-reverse items-center">
        <img src={image2} width={550} alt="" className="card" />
        <div className="card p-5 md:p-15 mb-11 md:mb-1">
          <TbApiApp size={85} />
          <h2 className="text-3xl">Your security is our priority</h2>
          <p className="text-md font-light tracking-wide mt-1.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, nesciunt ducimus eum esse voluptatem eos tempora ipsa
            ab, animi, quibusdam adipisci quod doloremque vitae perspiciatis
            temporibus! Sint ab atque pariatur.
          </p>
          <ul className="mt-5 menu w-1/2">
            <li>
              <a href="">Client protectio</a>
            </li>
            <li>
              <a href="">Why Exness</a>
            </li>
            <li>
              <a href="">Exness Trade app</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Section03
