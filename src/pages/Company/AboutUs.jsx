import image from '../../assets/about_us.png'
import image2 from '../../assets/about02.png'
import image3 from '../../assets/about03.png'
import user from '../../assets/user.png'

import card1 from '../../assets/sCard1.png'
import card2 from '../../assets/sCard2.png'
import card3 from '../../assets/sCard3.png'
import card4 from '../../assets/sCard4.png'
import card5 from '../../assets/sCard5.png'
import card6 from '../../assets/sCard6.png'
import { TbArrowBigLeftLines, TbArrowBigRightLines } from 'react-icons/tb'
import { useRef } from 'react'

const images = [
  {
    name: 'Image number 01',
    url: card1,
  },
  {
    name: 'Image number 02',
    url: card2,
  },
  {
    name: 'Image number 03',
    url: card3,
  },
  {
    name: 'Image number 04',
    url: card4,
  },
  {
    name: 'Image number 05',
    url: card5,
  },
  {
    name: 'Image number 06',
    url: card6,
  },
]

const AboutUs = () => {
  const imageRef = useRef(null)

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
            <h1 className="mb-5 text-5xl font-bold">About US</h1>
            <p className="mb-5">
              Project 01 is a multi-asset, tech-focused broker utilizing
              advanced algorithms for enhanced trading conditions.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              tempore consequuntur repellat soluta molestiae ducimus numquam. Ut
              aspernatur esse vitae. Architecto
            </p>
          </div>
        </div>
      </div>
      <section className="p-5 mt-27 md:p-27 flex flex-col lg:flex-row items-center justify-between gap-11">
        <img src={image2} alt="" width={500} />
        <div className="card gap-1.5">
          <h2 className="text-2xl">The way is about balance</h2>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            eum deserunt eveniet reprehenderit. Iusto laudantium earum sed
            labore quo obcaecati ipsam. Illo quas quo deleniti quae! Nisi
            deleniti voluptatibus dolorem, deserunt nam necessitatibus officiis
            doloremque eos enim aspernatur aperiam libero alias rem esse,
            consequatur aliquid!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste
            accusantium, ad libero iure sequi eius quod saepe optio. Distinctio
            laboriosam at in itaque doloremque!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis alias esse quas voluptatibus labore, tempora nesciunt
            velit aut suscipit sit animi exercitationem soluta, reiciendis hic
            eius! Hic eligendi vero harum perferendis minus! Quos, harum
            distinctio!
          </p>
        </div>
      </section>
      <div className="mt-27 flex items-center bg-[#070e20] h-[77vh]">
        <div className="card p-5 md:p-15 ">
          <span className="text-3xl">"</span>
          <h2 className="text-4xl lg:w-1/2">
            As a team of financial engineers, we created an environment where
            traders can feel secure and empowered.
          </h2>
        </div>
        <img src="" alt="" />
      </div>
      <section className="p-5 mt-27 md:p-27 flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-11">
        <img src={image3} alt="" width={500} />
        <div className="card gap-1.5">
          <h2 className="text-2xl">People first</h2>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            eum deserunt eveniet reprehenderit. Iusto laudantium earum sed
            labore quo obcaecati ipsam. Illo quas quo deleniti quae! Nisi
            deleniti voluptatibus dolorem, deserunt nam necessitatibus officiis
            doloremque eos enim aspernatur aperiam libero alias rem esse,
            consequatur aliquid!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste
            accusantium, ad libero iure sequi eius quod saepe optio. Distinctio
            laboriosam at in itaque doloremque!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis alias esse quas voluptatibus labore, tempora nesciunt
            velit aut suscipit sit animi exercitationem soluta, reiciendis hic
            eius! Hic eligendi vero harum perferendis minus! Quos, harum
            distinctio!
          </p>
        </div>
      </section>
      <section className="mt-27 grid grid-cols-2 lg:grid-cols-4 gap-9 px-11">
        <div className="flex flex-col gap-1.5 p-9 border-l">
          <h1 className="text-4xl">2000+</h1>
          <p className="text-sm font-light">Employees</p>
        </div>
        <div className="flex flex-col gap-1.5 p-9 border-l">
          <h1 className="text-4xl">13 offices</h1>
          <p className="text-sm font-light">Globally</p>
        </div>
        <div className="flex flex-col gap-1.5 p-9 border-l">
          <h1 className="text-4xl">20+</h1>
          <p className="text-sm font-light">Nationalities</p>
        </div>
        <div className="flex flex-col gap-1.5 p-9 border-l">
          <h1 className="text-4xl">100+</h1>
          <p className="text-sm font-light">Continents</p>
        </div>
      </section>
      <section className="mt-27 flex flex-col">
        <div className="card gap-1.5 lg:w-1/2 items-center text-center mx-auto">
          <h2 className="text-4xl">Our values guide every advancement</h2>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            perspiciatis praesentium. Sint fugit optio veritatis! Ullam aliquid
            rerum expedita, neque placeat ipsa vel molestias, ex hic deleniti
            error eum quis voluptatem in adipisci nemo similique!
          </p>
        </div>
        <div className="mt-19 grid md:grid-cols-2 px-9">
          <div className="flex flex-col gap-1.5 p-9 border-t">
            <h2 className="text-3xl">Bolb</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              We have innovated, pushed boundaries, and challenged the status
              quo from day one. We follow a simple idea: if it doesn’t exist, we
              invent it. If it does exist, we improve it.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-9 border-t md:border-x">
            <h2 className="text-3xl">Good people</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              We have innovated, pushed boundaries, and challenged the status
              quo from day one. We follow a simple idea: if it doesn’t exist, we
              invent it. If it does exist, we improve it.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-9 border-t">
            <h2 className="text-3xl">Tech professionals</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              We have innovated, pushed boundaries, and challenged the status
              quo from day one. We follow a simple idea: if it doesn’t exist, we
              invent it. If it does exist, we improve it.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-9 border-t md:border-x">
            <h2 className="text-3xl">Reliable</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              We have innovated, pushed boundaries, and challenged the status
              quo from day one. We follow a simple idea: if it doesn’t exist, we
              invent it. If it does exist, we improve it.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-27 p-5 md:px-19 flex flex-col">
        <h1 className="text-3xl">Our size makes a big impact</h1>
        <p className="text-sm font-light tracking-wide text-gray-400 lg:w-3/5 mt-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          veritatis dolores, suscipit possimus iure dicta tenetur nobis
          inventore cum laudantium neque error beatae ut nisi ducimus enim,
          mollitia eligendi. Suscipit, sint. Ut maxime fugiat ex.
        </p>
        <div className="mt-15 ">
          <div
            ref={imageRef}
            className="flex items-center gap-11 overflow-x-auto"
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                className="shrik-0 rounded-2xl transition-all duration-200 hover:scale-95 cursor-pointer"
                width={500}
              />
            ))}
          </div>
          <div className="mt-7 flex justify-end items-center gap-3 pr-3">
            <button
              className="btn btn-soft btn-error btn-circle tooltip tooltip-error"
              data-tip="Prev"
              onClick={() =>
                imageRef.current.scrollBy({ left: -405, behavior: 'smooth' })
              }
            >
              <TbArrowBigLeftLines size={19} />
            </button>
            <button
              className="btn btn-soft btn-accent btn-circle tooltip tooltip-accent"
              data-tip="Next"
              onClick={() =>
                imageRef.current.scrollBy({ left: 405, behavior: 'smooth' })
              }
            >
              <TbArrowBigRightLines size={19} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
