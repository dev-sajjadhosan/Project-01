const secionArrays = {
  left: [
    {
      badge: 'Withdrawals',
      subHeading: 'Instant withdrawals',
      title: 'Deposits and withdrawals approved in seconds.¹',
    },
    {
      badge: 'Spreads',
      subHeading: 'Unmatched spreads',
      title:
        'Trade with spreads that remain tight and stable, even during market news.',
    },
    {
      badge: 'Support',
      subHeading: '24/7 live support',
      title:
        'Get answers in minutes via phone, live chat or email, in 14 languages.',
    },
  ],
  right: [
    {
      badge: 'Swaps',
      subHeading: 'Swap-free trading',
      title:
        'Hold overnight positions for free on most popular assets. T&Cs apply.',
    },
    {
      badge: 'Execution speed ',
      subHeading: 'More speed, less slippage',
      title: 'Trade with the most precise execution² in the market.',
    },
    {
      badge: 'Account security',
      subHeading: 'Best-in-class security',
      title:
        'Trade knowing your funds are kept safe in separate client accounts, with ironclad data protection. ',
    },
  ],
}
const tableArrays = [
  {
    avatar: {
      name: 'XAUUSD',
      title: 'Gold vs US Dollar',
    },
    leverage: 'Customizable',
    avg: '11.2',
    swap: 'Available',
    link: 'Metals',
  },
  {
    avatar: {
      name: 'USOIL',
      title: 'Crude Oil',
    },
    leverage: '1:200',
    avg: '1.3',
    swap: 'Available',
    link: 'Energies',
  },
  {
    avatar: {
      name: 'EURUSD',
      title: 'Euro vs US Dollar',
    },
    leverage: 'Customizable',
    avg: '0.6',
    swap: 'Available',
    link: 'Currencies',
  },
  {
    avatar: {
      name: 'US30',
      title: 'US Wall Street 30 Index',
    },
    leverage: '1:400',
    avg: '1.9',
    swap: 'Available',
    link: 'Indices',
  },
  {
    avatar: {
      name: 'AAPL',
      title: 'Apple Inc.',
    },
    leverage: '1:20',
    avg: '0.6',
    swap: 'Swap applied',
    link: '	Stocks',
  },
]
import { TbArrowBarRight } from 'react-icons/tb'
import image from '../../assets/section02.png'
const Section02 = () => {
  return (
    <>
      <section className="h-full w-full bg-[#070e20] p-17 flex flex-col items-center">
        <h2 className="text-4xl w-1/2 text-center">
          Thrive in the gold, oil, indices, and crypto markets
        </h2>
        <p className="text-md text-gray-500 font-light tracking-wide">
          Trading conditions can make or break a strategy, that's why you need
          the best.
        </p>
        <div className="mt-7 grid grid-cols-3 gap-3">
          <div className="flex flex-col justify-around">
            {secionArrays.left.map((lf, i) => (
              <div
                className="card p-3 items-center justify-center gap-1.5"
                key={i}
              >
                <span className="badge badge-soft badge-info">{lf.badge}</span>
                <h2 className="text-2xl">{lf.subHeading}</h2>
                <p className="text-md font-light tracking-wide text-center">
                  {lf.title}
                </p>
              </div>
            ))}
          </div>
          <img src={image} width={500} alt="" />
          <div className="flex flex-col justify-around">
            {secionArrays.right.map((lf, i) => (
              <div
                className="card p-3 items-center justify-center gap-1.5"
                key={i}
              >
                <span className="badge badge-soft badge-accent">
                  {lf.badge}
                </span>
                <h2 className="text-2xl">{lf.subHeading}</h2>
                <p className="text-md font-light tracking-wide text-center">
                  {lf.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-full w-full bg-[#070e20] p-17 flex flex-col items-center">
        <h2 className="text-3xl">Trade assets from global markets</h2>
        <p className="text-md font-light tracking-wide text-gray-500">
          Capitalize on every opportunity with the world’s most popular assets.
        </p>
        <div className="mt-11 overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Instruments </th>
                <th>Leverage </th>
                <th>Avg. spread³, pips </th>
                <th>Swap-free</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableArrays.map((d, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{d.avatar.name}</div>
                        <div className="text-sm opacity-50">
                          {d.avatar.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{d.leverage}</td>
                  <td> {d.avg}</td>
                  <td> {d.swap}</td>
                  <td>
                    <a href="" className="flex items-center gap-2">
                      {d.link} <TbArrowBarRight size={15} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-7 flex items-center gap-5">
          <button className="btn btn-warning">Register</button>
          <button className="btn btn-outline px-5">Try free demo</button>
        </div>
      </section>
    </>
  )
}
export default Section02
