import { TbDeviceDesktop, TbDeviceMobile } from 'react-icons/tb'

import image from '../../assets/demoaccount.png'

const DemoTrandingAccount = () => {
  return (
    <>
      <section className="p-5 md:p-15 flex flex-col">
        <div className="card md:w-1/2 gap-1.5">
          <h1 className="text-3xl">Demo trading account</h1>
          <p className="text-sm font-light tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            est sed iure a quaerat nesciunt. Incidunt explicabo illo architecto
            fugiat cupiditate reiciendis molestias eum! Explicabo nulla pariatur
            vero deleniti ea.
          </p>
          <button className="btn btn-warning px-5 mt-3 mr-auto">
            Try free demo
          </button>
        </div>
        <div className="card gap-1.5 items-center text-center mt-19">
          <h2 className="text-xl md:text-4xl md:w-1/2">
            Benefits of using an Project 01 demo trading account
          </h2>
          <p className="text-sm md:text-md md:w-3/4 font-light tracking-wide text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            itaque necessitatibus incidunt, quam aut omnis earum error soluta
            facere numquam.
          </p>
        </div>
        <div className="mt-11 grid md:grid-cols-2 gap-11">
          <div className="card p-9 bg-base-300 h-[31rem] items-center justify-center transition-all duration-300 hover:bg-base-200 cursor-pointer group">
            <h1 className="text-3xl group-hover:text-warning">Card 01</h1>
          </div>
          <div className="card p-9 bg-base-300 h-[31rem] items-center justify-center transition-all duration-300 hover:bg-base-200 cursor-pointer group">
            <h1 className="text-3xl group-hover:text-warning">Card 02</h1>
          </div>
          <div className="card p-9 bg-base-300 h-[31rem] items-center justify-center transition-all duration-300 hover:bg-base-200 cursor-pointer group">
            <h1 className="text-3xl group-hover:text-warning">Card 03</h1>
          </div>
          <div className="card p-9 bg-base-300 h-[31rem] items-center justify-center transition-all duration-300 hover:bg-base-200 cursor-pointer group">
            <h1 className="text-3xl group-hover:text-warning">Card 04</h1>
          </div>
        </div>
        <div className="mt-15 p-13 md:p-21 bg-[#070e20] card gap-1.5">
          <h1 className="text-2xl md:text-5xl">Explore assets and markets</h1>
          <p className="text-sm md:text-md font-light tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit
            nemo expedita, animi magnam aperiam aliquid, alias soluta qui maxime
            ab ipsam tempore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis saepe iure quo nemo totam? Similique et ad ullam
            ratione consequatur optio.
          </p>
          <button className="btn btn-warning px-7 mt-7 mr-auto">
            Try free demo
          </button>
        </div>
        <div className="mt-19 flex flex-col items-center">
          <h1 className="text-4xl">Hone your skills at home or on the go</h1>
          <div className="mt-9 grid md:grid-cols-2 gap-5">
            <div className="card p-11 bg-base-300">
              <TbDeviceDesktop size={125} />
              <h2 className="text-xl">Desktop & web platforms</h2>
              <p className="text-sm font-light tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia placeat quisquam provident, ratione earum dolorum magnam
                libero numquam eum similique eveniet et autem deserunt!
              </p>
              <button className="btn btn-sm btn-soft btn-accent mt-5 ml-auto font-light">
                Read more
              </button>
            </div>
            <div className="card p-11 bg-base-300">
              <TbDeviceMobile size={125} />
              <h2 className="text-xl">Mobile platforms</h2>
              <p className="text-sm font-light tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia placeat quisquam provident, ratione earum dolorum magnam
                libero numquam eum similique eveniet et autem deserunt!
              </p>
              <button className="btn btn-sm btn-soft btn-accent mt-5 ml-auto font-light">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="mt-19 flex flex-col items-center">
          <h1 className="text-3xl">How to open an demo trading account</h1>
          <div className="relative mt-11 flex flex-col">
            <img src={image} alt="" className="rounded-2xl" />
            <div className=" flex flex-col lg:flex-row items-center bg-base-300 lg:-translate-y-1/2 lg:w-11/12">
              <div className="flex flex-col p-7  lg:border-r">
                <p className="text-lg">Step 01</p>
                <div className="card p-5">
                  <h2 className="text-2xl">Register</h2>
                  <p className="text-xs font-light tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, cumque nostrum? A dolor corrupti aut ea,
                    laudantium alias ut error obcaecati optio architecto
                    consectetur facilis voluptatum, ad dolore at minima?
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-7 lg:border-r">
                <p className="text-lg">Step 02</p>
                <div className="card p-5">
                  <h2 className="text-2xl">Get demo balance</h2>
                  <p className="text-xs font-light tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, cumque nostrum? A dolor corrupti aut ea,
                    laudantium alias ut error obcaecati optio architecto
                    consectetur facilis voluptatum, ad dolore at minima?
                  </p>
                </div>
              </div>
              <div className="card p-7">
                <p className="text-lg">Step 03</p>
                <div className="card p-5">
                  <h2 className="text-2xl">Explore the platfrom</h2>
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
        </div>
        <div className="mt-49 flex flex-col md:flex-row gap-7 justify-between items-center">
          <h2 className="text-4xl">Frequently asked questions</h2>
          <div className="lg:w-3/4">
            <div className="join join-vertical bg-base-100">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  How do I create an account?
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ut magni molestias, doloribus ipsum nisi neque iusto
                  blanditiis enim quis id non debitis architecto recusandae iste
                  ipsam nulla voluptatem quidem pariatur dignissimos soluta
                  perferendis a ab. Aperiam mollitia excepturi aliquam, ab et
                  non quod aspernatur officiis culpa delectus recusandae vero
                  provident! Aut placeat at quos omnis aperiam quasi iure vel.
                  Ratione nostrum hic sed, non officia minima suscipit
                  aspernatur voluptatibus modi quis. Numquam, magnam ad? Eum
                  quod veritatis impedit a hic. Quam excepturi ratione, mollitia
                  eius nisi hic aspernatur! Velit, quam recusandae. Rerum illo
                  inventore dolorum sit harum tenetur iste!
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  I forgot my password. What should I do?
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ut magni molestias, doloribus ipsum nisi neque iusto
                  blanditiis enim quis id non debitis architecto recusandae iste
                  ipsam nulla voluptatem quidem pariatur dignissimos soluta
                  perferendis a ab. Aperiam mollitia excepturi aliquam, ab et
                  non quod aspernatur officiis culpa delectus recusandae vero
                  provident! Aut placeat at quos omnis aperiam quasi iure vel.
                  Ratione nostrum hic sed, non officia minima suscipit
                  aspernatur voluptatibus modi quis. Numquam, magnam ad? Eum
                  quod veritatis impedit a hic. Quam excepturi ratione, mollitia
                  eius nisi hic aspernatur! Velit, quam recusandae. Rerum illo
                  inventore dolorum sit harum tenetur iste!
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  How do I update my profile information?
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ut magni molestias, doloribus ipsum nisi neque iusto
                  blanditiis enim quis id non debitis architecto recusandae iste
                  ipsam nulla voluptatem quidem pariatur dignissimos soluta
                  perferendis a ab. Aperiam mollitia excepturi aliquam, ab et
                  non quod aspernatur officiis culpa delectus recusandae vero
                  provident! Aut placeat at quos omnis aperiam quasi iure vel.
                  Ratione nostrum hic sed, non officia minima suscipit
                  aspernatur voluptatibus modi quis. Numquam, magnam ad? Eum
                  quod veritatis impedit a hic. Quam excepturi ratione, mollitia
                  eius nisi hic aspernatur! Velit, quam recusandae. Rerum illo
                  inventore dolorum sit harum tenetur iste!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DemoTrandingAccount
