import economicCalendar from '../../assets/economic_calendar.png'
import tradingSignals from '../../assets/trading_signals.png'

const AnalyticaltTools = () => {
  return (
    <>
      <section className="flex flex-col p-5 md:p-15">
        <div className="card gap-1.5 md:w-1/2 text-left">
          <h1 className="text-4xl">Analytical tools</h1>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            officiis vero velit dignissimos asperiores quaerat ut laborum
            voluptatum deserunt, corrupti assumenda illo repudiandae similique
            modi eligendi molestias, sapiente minus quisquam.
          </p>
        </div>
        <div className="mt-23 flex flex-col lg:flex-row gap-7 items-center justify-between">
          <div className="card lg:w-1/2">
            <h2 className="text-3xl">Economic calendar</h2>
            <p className="text-sm font-light tracking-wide">
              Keep track of high impact news, market-moving economic events and
              data releases with our Economic Calendar. Access it on our website
              or the Trade app.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio illo quos non vitae, exercitationem atque dolor qui itaque?
            </p>
          </div>
          <img src={economicCalendar} alt="" width={500} />
        </div>
        <div className="mt-23 flex flex-col-reverse lg:flex-row-reverse gap-7 items-center justify-between">
          <div className="card gap-1.5 lg:w-1/2">
            <h2 className="text-3xl">Trading signals by Trading Central</h2>
            <p className="text-sm font-light tracking-wide">
              Use Trading Centrals signals to develop your strategies and plan
              your trades. The signals incorporate a variety of analytical
              approaches, providing a valuable tool for traders under all market
              conditions and timeframes.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio illo quos non vitae, exercitationem atque dolor qui itaque?
            </p>
          </div>
          <img src={tradingSignals} alt="" width={500} />
        </div>
        <div className="mt-23 flex flex-col lg:flex-row gap-7 items-center justify-between">
          <div className="card gap-1.5 lg:w-1/2">
            <h2 className="text-3xl">Market news by FXStreet</h2>
            <p className="text-sm font-light tracking-wide">
              Stay up-to-date with a real-time feed of market news and the
              latest updates from the team at FXStreet News.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio illo quos non vitae, exercitationem atque dolor qui itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio illo quos non vitae, exercitationem atque dolor qui itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio illo quos non vitae, exercitationem atque dolor qui itaque?
            </p>
          </div>
          <img src={tradingSignals} alt="" width={500} />
        </div>
        <div className="mt-25 flex flex-col lg:flex-row gap-7 items-center justify-between">
          <h2 className="text-4xl">Frequently asked questions</h2>
          <div className="flex flex-col bg-base-100 border border-base-300 lg:w-3/4">
            <div className="join join-vertical bg-base-100">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  Accordion Number 01
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quasi consequuntur repudiandae! Odio voluptatum, ea
                  nobis facere sequi id mollitia libero facilis molestiae beatae
                  voluptas quam perferendis, eaque nisi a est quia dolorum porro
                  officia fuga natus non quasi. Magni iste voluptatem beatae
                  perspiciatis laborum quae rem qui architecto commodi,
                  consequatur reprehenderit exercitationem, similique, enim
                  quisquam inventore? Eum dolore aliquid eius molestiae fuga
                  laudantium praesentium consequatur veniam facere quaerat
                  veritatis alias corrupti voluptates dicta tenetur placeat
                  quasi sapiente, obcaecati cupiditate et aspernatur aut eos!
                  Minus modi eligendi odit facilis sunt et qui, non, odio, atque
                  ullam fugit ad hic perspiciatis.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  Accordion Number 02
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, voluptates magni quia minus perspiciatis
                  sapiente dolor vero ut ea est illum necessitatibus earum
                  ratione, veniam dolore sint soluta eligendi facere recusandae,
                  tempore blanditiis doloremque voluptas ad obcaecati? Earum,
                  animi dolorum. Voluptate beatae, maiores deserunt sit a magni
                  voluptatum eum explicabo harum provident distinctio, officia
                  reprehenderit doloremque rerum recusandae, soluta voluptatibus
                  tempore! Repellendus similique, culpa impedit adipisci illo
                  quae accusantium dignissimos cum, maxime ipsa eius enim
                  excepturi iure soluta corporis, quaerat eligendi facilis
                  exercitationem et aspernatur consectetur dolore nesciunt
                  voluptates temporibus. Nulla quibusdam repellat placeat non,
                  magnam perferendis ipsam ea cumque.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AnalyticaltTools
