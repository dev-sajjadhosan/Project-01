import { TbAlertSquareRounded, TbTicket } from 'react-icons/tb'
import image from '../../assets/contactUs.png'
import user from '../../assets/user2.png'

const ContactUs = () => {
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
            <h1 className="mb-5 text-5xl font-bold">Contacts Us</h1>
            <p className="mb-5">
              Our dedicated support specialists speak 14 languages. Support is
              available 24 hours a day, 7 days a week in English, Chinese, Thai,
              Vietnamese, Arabic, Bengali, Hindi and Urdu.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              tempore consequuntur repellat soluta molestiae ducimus numquam. Ut
              aspernatur esse vitae. Architecto
            </p>
          </div>
        </div>
      </div>
      <section className="mt-29 p-5 md:px-27 text-center">
        <h2 className="text-4xl">General inquiries</h2>
        <div className="mt-15 grid md:grid-cols-2 gap-11">
          <div className="card gap-1.5 p-11 bg-base-300 text-left">
            <TbAlertSquareRounded size={37} />
            <h2 className="text-2xl mt-7">Help Center</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              architecto veritatis et voluptatem doloremque aspernatur repellat
              consectetur, suscipit, adipisci rem magnam nam vitae aut ducimus
              ullam totam maiores voluptatum.
            </p>
          </div>
          <div className="card gap-1.5 p-11 bg-base-300 text-left">
            <TbTicket size={37} />
            <h2 className="text-2xl mt-7">Open a ticket</h2>
            <p className="text-sm font-light tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              architecto veritatis et voluptatem doloremque aspernatur repellat
              consectetur, suscipit, adipisci rem magnam nam vitae aut ducimus
              ullam totam maiores voluptatum.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-29 p-25 bg-[#070e20]">
        <img src={user} alt="" width={500} className="mx-auto" />
      </section>
    </>
  )
}

export default ContactUs
