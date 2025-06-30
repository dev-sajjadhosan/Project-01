import image from '../../assets/section05.png'

const Section04 = () => {
  return (
    <>
      <section
        className="h-[31rem] w-full bg-base-300 p-15 flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl">Born to Trade podcast</h2>
        <p className="text-md font-light tracking-wide md:w-1/2">
          Get inside the minds of real traders with untold stories, bold
          conversations, and practical insights.
        </p>
        <button className="btn btn-accent px-7 mt-9">Listen Now</button>
      </section>
    </>
  )
}

export default Section04
