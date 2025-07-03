import {
  TbArrowForwardUpDouble,
  TbCash,
  TbCircleNumber0,
  TbConfetti,
} from 'react-icons/tb'
import image from '../../assets/why_me.png'

const WhyProject = () => {
  return (
    <>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-left">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Why choose Project 01</h1>
            <p className="mb-5">
              Join over 1 million active traders who benefit from tight and
              stable pricing, superior execution, and unmatched financial
              security.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              tempore consequuntur repellat soluta molestiae ducimus numquam. Ut
              aspernatur esse vitae. Architecto
            </p>
            <div className="mt-3 flex items-center gap-5">
              <button className="btn  btn-warning">Register</button>
              <button className="btn btn-soft btn-accent">Try free demo</button>
            </div>
          </div>
        </div>
      </div>
      <section className="p-5 md:p-27 mt-27 text-center">
        <h2 className="text-4xl">Take your trading to the next level</h2>
        <p className="text-sm font-light tracking-wide text-gray-400 mt-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          nesciunt odit quidem, adipisci facere a saepe temporibus fuga expedita
          pariatur! Quidem perferendis quo nam rem et assumenda sed doloremque
          minima a amet, asperiores est quam quisquam aliquid quibusdam illum
          suscipit nemo. Corrupti quasi beatae delectus.
        </p>
        <div className="mt-13 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[...Array(6).keys()].map((i) => (
            <div className="card border border-base-300 text-left p-9" key={i}>
              <TbConfetti size={55} />
              <h2 className="text-xl mt-7">Unmatched spread stability</h2>
              <p className="text-xs tracking-wide font-light mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, mollitia sint accusamus ea odio repellat similique
                delectus culpa cum consequuntur id quibusdam. Mollitia officiis
                ipsam iste, voluptatum voluptas fugit nobis vitae deserunt hic
                possimus sit?
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-5 mt-27 md:p-27 text-center">
        <h2 className="text-3xl">Your money is yours. Period.</h2>
        <p className="text-sm font-light tracking-wide mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
          molestiae? Aliquid iste ullam adipisci pariatur temporibus, ea numquam
          sapiente maxime autem excepturi officiis perspiciatis cumque eos
          aliquam, consequatur voluptate vero.
        </p>
        <div className="mt-19 flex flex-col items-center">
          <h1 className="text-3xl">How to open an demo trading account</h1>
          <div className="relative mt-11">
            <img src={image} alt="" className="rounded-2xl" />
            <div className="flex flex-col lg:flex-row items-center bg-base-300 lg:-translate-y-1/2">
              <div className="flex flex-col text-left p-9 lg:border-r">
                <TbArrowForwardUpDouble size={27} />
                <h2 className="text-2xl mt-5">Register</h2>
                <p className="text-xs font-light tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, cumque nostrum? A dolor corrupti aut ea,
                  laudantium alias ut error obcaecati optio architecto
                  consectetur facilis voluptatum, ad dolore at minima?
                </p>
              </div>
              <div className="flex flex-col text-left p-9 lg:border-r">
                <TbCircleNumber0 size={27} />
                <h2 className="text-2xl mt-5">Get demo balance</h2>
                <p className="text-xs font-light tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, cumque nostrum? A dolor corrupti aut ea,
                  laudantium alias ut error obcaecati optio architecto
                  consectetur facilis voluptatum, ad dolore at minima?
                </p>
              </div>
              <div className="flex flex-col text-left p-9">
                <TbCash size={27} />
                <h2 className="text-2xl mt-5">Explore the platfrom</h2>
                <p className="text-xs font-light tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, cumque nostrum? A dolor corrupti aut ea,
                  laudantium alias ut error obcaecati optio architecto
                  consectetur facilis voluptatum, ad dolore at minima?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-27 p-5 md:p-27 text-center">
        <h2 className="text-3xl">There’s a time and a place for risk</h2>
        <p className="text-sm font-light tracking-wide text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          ullam doloremque sed sunt aliquid eligendi magni dignissimos corporis
          officiis velit omnis sapiente voluptates magnam a rerum, provident,
          veritatis delectus in illo, repellendus aut aliquam minus?
        </p>
      </section>
    </>
  )
}

export default WhyProject
