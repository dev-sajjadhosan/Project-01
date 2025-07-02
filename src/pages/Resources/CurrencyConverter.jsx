import { TbArrowBigRightLines } from 'react-icons/tb'

const CurrencyConverter = () => {
  return (
    <>
      <section className="p-15">
        <div className="card gap-1 w-1/2">
          <h1 className="text-5xl capitalize">currency converter</h1>
          <p className="text-md font-light tracking-wide text-gray-500">
            Calculate foreign exchange rates and convert all major and exotic
            currency pairs with our easy-to-use currency converter.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, facilis nostrum obcaecati autem sint magni rem accusamus
            officiis. Ad natus tempora, numquam rem sint dolor!
          </p>
        </div>
        <div className="mt-15">
          <div className="grid grid-cols-3 gap-9">
            {[...Array(6).keys()].map(() => (
              <fieldset className="fieldset join gap-0 ">
                <legend className="fieldset-legend font-light">Amount</legend>
                <input
                  type="text"
                  className="input join-item"
                  placeholder="Type here"
                />
                <select name="" id="" className="select join-item w-36">
                  <option value=""></option>
                </select>
              </fieldset>
            ))}
          </div>
          <p className="text-sm font-light tracking-wide text-gray-500">
            Disclaimer: The currency converter is provided for illustrative
            purposes only. The results presented by this converter are for
            estimation purposes and you should not rely upon it for making
            investment decisions. Real-time conversion rates can only be
            determined at the time of deposit or withdrawal request.
          </p>
        </div>
        <div className="mt-15 w-1/2 mx-auto text-center">
          <h2 className="text-4xl">How to use the currency converter</h2>
          <p className="text-sm font-light tracking-wide">
            Our currency converter helps you quickly convert one currency to
            another using recent exchange rate data. An essential tool when
            making deposits and withdrawals on your trading account.
          </p>
          <ul className="flex flex-col text-left gap-1.5 text-sm pl-7 mt-3.5">
            <li className="flex items-center gap-1.5 text-gray-400">
              <TbArrowBigRightLines size={17} />
              From the six available dropdown lists, select your base currency.
            </li>
            <li className="flex items-center gap-1.5 text-gray-400">
              <TbArrowBigRightLines size={17} />
              Choose up to five other currencies to convert to.
            </li>
            <li className="flex items-center gap-1.5 text-gray-400">
              <TbArrowBigRightLines size={17} />
              Enter the amount you want to convert from the base currency.
            </li>
            <li className="flex items-start gap-1.5 text-gray-400">
              <TbArrowBigRightLines size={21} />
              The currency converter will automatically calculate and display
              the exchange rates for your chosen currencies.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default CurrencyConverter
