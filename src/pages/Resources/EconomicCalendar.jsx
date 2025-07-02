import {
  TbArrowBarToDown,
  TbArrowBearRight2,
  TbArrowCurveLeft,
} from 'react-icons/tb'

const MoneyArrays = [
  'jpy',
  'cny',
  'eur',
  'chf',
  'xcu',
  'xni',
  'xpb',
  'yzn',
  'yal',
  'usd',
  'aud',
  'xng',
  'gbp',
]
const MonthArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const EconomicCalendar = () => {
  const createDateArrays = [
    ...Array(Number(new Date().toDateString().split(' ')[2]) + 5).keys(),
  ]
  console.log()
  return (
    <>
      <section className="p-15 flex flex-col">
        <h1 className="text-3xl">Economic Calendar</h1>
        <p className="text-sm font-light tracking-wide md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat
          laudantium ex tempore sed harum quas. Voluptatem officiis placeat est,
          animi vel qui eum laudantium consequatur. Molestias necessitatibus
          adipisci hic mollitia dolorem rerum, dicta velit, quaerat dignissimos,
          dolor officia quas.
        </p>
        <div className="mt-29">
          <select name="" id="" className="select uppercase">
            <option disabled>All</option>
            {MoneyArrays.map((mn, i) => (
              <option key={i} value={mn}>
                {mn}
              </option>
            ))}
          </select>
          <div className="mt-17 overflow-x-auto">
            <table className="table w-2/3">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Symbol</th>
                  <th>Event</th>
                </tr>
              </thead>
            </table>
            <div className="w-full">
              {createDateArrays.map((dm) => (
                <div
                  key={dm}
                  className="collapse collapse-plus bg-base-100 border border-base-300 w-full"
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    {MonthArray[new Date().getMonth()]} {dm + 1}
                  </div>
                  <div className="collapse-content text-sm">
                    <table className="table ">
                      <tbody>
                        {MoneyArrays.map((mn, i) => (
                          <tr key={i}>
                            <td>00:30</td>
                            <td className="uppercase">{mn}</td>
                            <td> Japan_JibunBK Mfg PMI Final SA</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* </tr> */}
            </div>
          </div>
        </div>
        <div className="mt-29 flex gap-11">
          <h2 className="text-4xl">
            Plan your trading with the economic calendar
          </h2>
          <div className="flex flex-col gap-5 border-t">
            <div className="card gap-1 mt-3">
              <h2 className="text-xl">About the Economic Calendar</h2>
              <p className="text-sm font-light tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                laborum minima vitae praesentium alias nam tempora non, corrupti
                quis, quibusdam sequi dignissimos tenetur veritatis
                exercitationem dolor veniam magnam corporis eius! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, quos iure
                delectus veritatis quas accusamus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                laborum minima vitae praesentium alias nam tempora non, corrupti
                quis, quibusdam sequi dignissimos tenetur veritatis
                exercitationem dolor veniam magnam corporis eius! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, quos iure
                delectus veritatis quas accusamus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                laborum minima vitae praesentium alias nam tempora non, corrupti
                quis, quibusdam sequi dignissimos tenetur veritatis
                exercitationem dolor veniam magnam corporis eius! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, quos iure
                delectus veritatis quas accusamus.
              </p>
            </div>
            <div className="card gap-1 mt-3">
              <h2 className="text-xl">
                Why you should use the Economic Calendar
              </h2>
              <p className="text-sm font-light tracking-wide">
                The Economic Calendar is indispensable if you want to keep track
                of upcoming news, reports and announcements at a glance.
                <br />
                <br />
                The events may highly impact the volatility of forex currency
                pairs, stocks and other markets. Thus, traders often use the
                calendar to plan their trades and stay informed on chart
                patterns and indicators that may be affected by the events.
                <br />
                <br />
                Since the events could significantly drive price movements
                during the time of publication, it’s a good practice to refer to
                the calendar before the trading day.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-29 flex flex-col ">
          <div className="card items-center">
            <h2 className="text-3xl">Why Project 01</h2>
            <p className="text-sm font-light tracking-wide text-gray-500">
              Better-than-market conditions, unique features, and cutting-edge
              security, partnered with our dedication to transparency and
              excellent customer service, are the reasons traders continue to
              choose Project 01.
            </p>
          </div>
          <div className="mt-11 grid grid-cols-3 gap-7">
            <div className="card gap-1 p-11 bg-base-300">
              <TbArrowBarToDown size={125} />
              <h2 className="text-xl">Instant withdrawals </h2>
              <p className="text-sm font-light tracking-wide text-gray-500">
                Remain in control of your funds. Simply choose your preferred
                payment method, make a withdrawal request, and enjoy instant
                automatic approval.¹
              </p>
            </div>
            <div className="card gap-1 p-11 bg-base-300">
              <TbArrowCurveLeft size={125} />
              <h2 className="text-xl">Ultra-fast execution </h2>
              <p className="text-sm font-light tracking-wide text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                quas autem, id beatae earum repellat, accusantium voluptates
                voluptas sequi, numquam quod vel eum possimus dicta nisi eos
                alias. Iure, unde.
              </p>
            </div>
            <div className="card gap-1 p-11 bg-base-300">
              <TbArrowBearRight2 size={125} />
              <h2 className="text-xl">Stop Out Protection</h2>
              <p className="text-sm font-light tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati delectus velit quod, deserunt beatae nostrum neque
                corporis harum nihil voluptatum iusto nobis architecto nemo
                cupiditate sequi, tempore officia omnis quos!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-29 flex items-start gap-9">
          <h2 className="text-3xl">Frequently asked questions</h2>
          <div className="join join-vertical bg-base-100 w-full">
            {[...Array(9).keys()].map((i) => (
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  This is the accordion number {i < 10 ? '0' + ++i : ++i}
                </div>
                <div className="collapse-content text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  repudiandae beatae ipsa deleniti odio, consequuntur, sapiente
                  necessitatibus numquam sed asperiores at, provident placeat!
                  Nam, perferendis tempore neque nostrum esse nisi aspernatur.
                  Unde voluptatem eius doloribus ducimus nobis neque quia, ullam
                  quas, facere commodi laudantium ab? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laborum fugiat dolorum officia
                  eligendi nisi. Earum nobis laborum, ad modi voluptatem quis
                  eaque quae nihil optio sit rem dolor, voluptatibus minima.
                  Labore possimus quidem tenetur error amet modi natus hic nulla
                  laudantium corrupti ratione ab praesentium libero a, eaque
                  asperiores et fuga magni eum illum provident ut aut. Id quis
                  aliquid vitae distinctio quia natus nisi. Ea qui distinctio,
                  laborum velit delectus quis corporis explicabo fugit quas eos
                  alias vel voluptatem veniam dicta omnis, dignissimos nihil
                  repudiandae repellat assumenda modi autem sit totam.
                  Blanditiis ducimus odit fuga velit temporibus id nesciunt!
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default EconomicCalendar
