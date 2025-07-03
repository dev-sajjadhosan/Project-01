import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandYoutube,
} from 'react-icons/tb'

const Footer = () => {
  return (
    <div className="p-11">
      <footer className="card border-t border-gray-500 rounded-none mt-28 pt-13">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">Project 01</h2>
        </div>
        <div className="footer flex flex-col md:flex-row mt-7 justify-between">
          <nav>
            <h6 className="footer-title">Accounts</h6>
            <a className="link link-hover">Standard accounts</a>
            <a className="link link-hover">Professional accounts</a>
            <a className="link link-hover">Demo trading accounts</a>
            <a className="link link-hover">Social trading accounts</a>
          </nav>
          <nav>
            <h6 className="footer-title">Condition</h6>
            <a className="link link-hover">Deposits and withdrawals</a>
            <a className="link link-hover">Fees</a>
            <a className="link link-hover">Client protection</a>
            <a className="link link-hover">Order execution</a>
          </nav>
          <nav>
            <h6 className="footer-title">Markets</h6>
            <a className="link link-hover">Forex CFD</a>
            <a className="link link-hover">Commodities CFD</a>
            <a className="link link-hover">Stocks CFD</a>
            <a className="link link-hover">Indices CFD</a>
            <a className="link link-hover">Crypto CFD</a>
          </nav>
          {/* ----------------------- */}
          <nav>
            <h6 className="footer-title"> About</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Why Exness</a>
            <a className="link link-hover">Exness reviews</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Exness in the media</a>
            <a className="link link-hover">Exness in the community</a>
            <a className="link link-hover">Exness Team Pro</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Analytical tools</a>
            <a className="link link-hover">Economic calendar</a>
            <a className="link link-hover">Trading calculator</a>
            <a className="link link-hover">Currency converter</a>
            <a className="link link-hover">Tick history</a>
            <a className="link link-hover">VPS hosting</a>
            <a className="link link-hover">Exness Insights</a>
          </nav>
          <nav>
            <h6 className="footer-title">Platforms</h6>
            <a className="link link-hover">MetaTrader 5</a>
            <a className="link link-hover">MetaTrader 4</a>
            <a className="link link-hover">Exness Trade app</a>
            <a className="link link-hover">MetaTrader 5 mobile</a>
            <a className="link link-hover">MetaTrader 4 mobile</a>
            <a className="link link-hover">Exness Terminal</a>
            <a className="link link-hover">MetaTrader WebTerminal</a>
          </nav>
        </div>
        <div className="mt-11 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <button
              className="btn btn-soft btn-info btn-circle tooltip tooltip-info"
              data-tip="Linkedin"
            >
              <TbBrandLinkedin size={17} />
            </button>
            <button
              className="btn btn-soft btn-primary btn-circle tooltip tooltip-primary"
              data-tip="Facebook"
            >
              <TbBrandFacebook size={17} />
            </button>
            <button
              className="btn btn-soft btn-neutral btn-circle tooltip"
              data-tip="XTwitter"
            >
              <TbBrandX size={17} />
            </button>
            <button
              className="btn btn-soft btn-secondary btn-circle tooltip tooltip-secondary"
              data-tip="Instagram"
            >
              <TbBrandInstagram size={17} />
            </button>
            <button
              className="btn btn-soft btn-error btn-circle tooltip tooltip-error"
              data-tip="Youtube"
            >
              <TbBrandYoutube size={17} />
            </button>
          </div>
          <h2 className="text-md font-light">© 2025 project 01</h2>
        </div>
      </footer>
    </div>
  )
}

export default Footer
