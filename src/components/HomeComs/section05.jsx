import image1 from '../../assets/card1.png'
import image2 from '../../assets/card2.png'
import image3 from '../../assets/card3.png'

const Section05 = () => {
  return (
    <>
      <section className="flex flex-col mt-21 items-center">
        <div className="card items-center">
          <h1 className="text-3xl">Keep up with Exness</h1>
          <p className="text-md font-light tracking-wide text-center md:w-3/4">
            Stay on top of our news, product and technology updates, events,
            partnerships, and more.
          </p>
          <button className="btn btn-sm btn-soft btn-accent px-7 mt-3">
            Read more articles
          </button>
        </div>
        <div className="mt-11 grid grid-cols-3 gap-7 w-11/12">
          <div className="card bg-base-300 rounded-2xl overflow-hidden">
            <img src={image1} alt="" className="w-full" />
            <div className="p-7 flex flex-col gap-1.5">
              <h2 className="text-xl">Campaign spotlight: Born to trade 2</h2>
              <p className="text-sm font-light tracking-wide mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt qui veniam harum at, vel debitis aspernatur nemo?
                Doloribus veritatis, enim praesentium sit quasi laboriosam qui.
              </p>
              <button className="btn btn-sm btn-soft btn-info px-7 mt-3 ml-auto">
                Read more
              </button>
            </div>
          </div>
          <div className="card bg-base-300 rounded-2xl overflow-hidden">
            <img src={image2} alt="" className="w-full" />
            <div className="p-7 flex flex-col gap-1.5">
              <h2 className="text-xl">
                Exness minimum deposit: Begin trading with a cost-effective
                setup
              </h2>
              <p className="text-sm font-light tracking-wide mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt qui veniam harum at, vel debitis aspernatur nemo?
                Doloribus veritatis, enim praesentium sit quasi laboriosam qui.
              </p>
              <button className="btn btn-sm btn-soft btn-info px-7 mt-3 ml-auto">
                Read more
              </button>
            </div>
          </div>
          <div className="card bg-base-300 rounded-2xl overflow-hidden">
            <img src={image3} alt="" className="w-full" />
            <div className="p-7 flex flex-col gap-1.5">
              <h2 className="text-xl">
                An easy guide to unlocking extra income with the Exness
                Affiliate Program
              </h2>
              <p className="text-sm font-light tracking-wide mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt qui veniam harum at, vel debitis aspernatur nemo?
                Doloribus veritatis, enim praesentium sit quasi laboriosam qui.
              </p>
              <button className="btn btn-sm btn-soft btn-info px-7 mt-3 ml-auto">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section05
