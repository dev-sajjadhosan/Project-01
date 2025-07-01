import { TbBrandDenodo } from 'react-icons/tb'

const StandardAccount = () => {
  return (
    <>
      <section className="p-15 flex flex-col">
        <h1 className="text-5xl w-md">Trading accounts: Standard</h1>
        <p className="text-md font-light tracking-wide w-1/2 mt-2.5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quia maiores fuga facilis quod. Nam unde velit ducimus veritatis
          corporis, est architecto soluta ex sed eum voluptatibus cupiditate
          illum assumenda.
        </p>
        <div className="mt-25 grid grid-cols-2 gap-9">
          <div className="card bg-base-300 rounded-2xl shadow p-11">
            <div className="card">
              <h2 className="text-2xl flex items-center gap-2">
                <TbBrandDenodo size={35} /> Standard
              </h2>
              <p className="text-sm font-light mt-1.5">
                Our most popular account. Great for all types of traders.{' '}
              </p>
            </div>
            <div className="card mt-5 border-t rounded-none">
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Minimum deposit</legend>
                <p className="label">$10</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Spread¹</legend>
                <p className="label">From 0.2 pips</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Commission</legend>
                <p className="label">No commission</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Maximum leverage</legend>
                <p className="label">1:Unlimited</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Instruments</legend>
                <p className="label">
                  Forex, metals, cryptocurrencies, energies, stocks, indices
                </p>
              </fieldset>
            </div>
            <button className="btn btn-warning px-8 mt-5 mx-auto">
              Register
            </button>
          </div>
          <div className="card bg-base-300 rounded-2xl shadow p-11">
            <div className="card">
              <h2 className="text-2xl flex items-center gap-3">
                <TbBrandDenodo size={35} /> Standard Cent
              </h2>
              <p className="text-sm font-light mt-1.5">
                Designed for new traders. Trade with micro lots to get started.{' '}
              </p>
            </div>
            <div className="card mt-5 border-t rounded-none">
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Minimum deposit</legend>
                <p className="label">$10</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Spread¹</legend>
                <p className="label">From 0.2 pips</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Commission</legend>
                <p className="label">No commission</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Maximum leverage</legend>
                <p className="label">1:Unlimited</p>
              </fieldset>
              <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend">Instruments</legend>
                <p className="label">
                  Forex, metals, cryptocurrencies, energies, stocks, indices
                </p>
              </fieldset>
            </div>
            <button className="btn btn-warning px-8 mt-5 mx-auto">
              Register
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mt-25">
          <table className="table">
            <thead>
              <tr>
                <td></td>
                <td>Standard</td>
                <td>Standard Cent</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimum deposit</td>
                <td> $10</td>
                <td> $10</td>
              </tr>
              <tr>
                <td>Spread¹</td>
                <td> From 0.2 pips</td>
                <td> From 0.3 pips</td>
              </tr>
              <tr>
                <td>Commission</td>
                <td> No commission</td>
                <td> No commission</td>
              </tr>
              <tr>
                <td>Maximum leverage</td>
                <td> 1:Unlimited</td>
                <td> 1:Unlimited</td>
              </tr>
              <tr>
                <td>Instruments</td>
                <td>
                  Forex, metals, cryptocurrencies, energies, stocks, indices
                </td>
                <td> Forex, metals, cryptocurrencies</td>
              </tr>
              <tr>
                <td>Minimum lot size</td>
                <td> 0.01</td>
                <td> 0.01</td>
              </tr>
              <tr>
                <td>Maximum lot size</td>
                <td> 200 (7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)</td>
                <td> 200</td>
              </tr>
              <tr>
                <td>Maximum number of positions</td>
                <td> Unlimited</td>
                <td> 10,000</td>
              </tr>
              <tr>
                <td>Hedged margin</td>
                <td> 0%</td>
                <td> 0%</td>
              </tr>
              <tr>
                <td>Minimum deposit</td>
                <td> $10</td>
                <td> $10</td>
              </tr>
              <tr>
                <td>Minimum deposit</td>
                <td> $10</td>
                <td> $10</td>
              </tr>
              <tr>
                <td>Minimum deposit</td>
                <td> $10</td>
                <td> $10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-25 flex items-center justify-between">
          <h2 className="text-4xl">Frequently asked questions</h2>
          <div className="flex flex-col bg-base-100 border border-base-300 w-3/4">
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

export default StandardAccount
