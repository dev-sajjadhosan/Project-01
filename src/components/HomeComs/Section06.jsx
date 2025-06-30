import image from '../../assets/section06.png'

const Section06 = () => {
  return (
    <>
      <section className="my-27 relative card items-center">
        <img
          src={image}
          alt=""
          className="h-[25rem] object-fill object-center"
        />
        <div className="absolute w-10/12 bg-base-300 p-15 card rounded-2xl items-center -bottom-29">
          <h2 className="text-3xl">Trade with a trusted broker today</h2>
          <p className="text-md font-light tracking-wide w-1/2 text-center text-gray-500">
            See for yourself why Exness is the broker of choice for over 1
            million traders and 100,000 partners.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <button className="btn btn-warning">Register</button>
            <button className="btn btn-outline px-5">Try free demo</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section06
