import { useRef, useState } from 'react'
import {
  TbBrandFacebook,
  TbBrandGoogle,
  TbBrandX,
  TbCopy,
  TbCopyCheck,
  TbEye,
  TbEyeClosed,
} from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'

import register from '../../assets/register.png'
import login from '../../assets/login.png'

const AuthPage = () => {
  const pa = useParams()?.typ
  const copyRef = useRef(null)
  const [isType, setIsType] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  return (
    <>
      <section
        className={`flex flex-col md:flex-row justify-center items-center md:h-screen ${
          pa === 'login' && 'md:flex-row-reverse'
        }`}
      >
        <div className="flex md:w-2/3 h-full bg-base-300 p-5 relative">
          <img
            src={pa === 'login' ? login : register}
            alt=""
            className="object-contain"
          />
        </div>
        <div className="flex w-full h-full bg-base-100 p-5 justify-center flex-col items-center">
          {pa === 'login' ? (
            <form className="card gap-1.5 px-1 md:px-15 py-7 w-full md:w-lg">
              <h2 className="text-2xl">Login</h2>
              <p className="text-xs font-light tracking-wide mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus vero molestiae error, omnis totam quas.
              </p>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Write Your Email</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="name@gmail.com"
                />
              </fieldset>
              <fieldset className="fieldset relative">
                <legend className="fieldset-legend">Write Your Password</legend>
                <input
                  className="input w-full"
                  placeholder="password"
                  type={isType ? 'text' : 'password'}
                />
                <span
                  className="absolute top-3.5 right-3 cursor-pointer"
                  onClick={() => setIsType(!isType)}
                >
                  {isType ? <TbEye size={21} /> : <TbEyeClosed size={21} />}
                </span>
              </fieldset>
              <div className="my-3 flex items-center justify-between">
                <label className="label text-sm">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  Remember me
                </label>
                <button className="link link-accent text-xs" type="button">
                  forgot password ?
                </button>
              </div>
              <button
                className="btn btn-sm btn-soft btn-warning font-light px-7 mt-1.5 mr-auto"
                type="submit"
              >
                Login account
              </button>
            </form>
          ) : (
            <form className="card gap-1.5 px-1 md:px-15 py-7 w-full md:w-lg">
              <h2 className="text-2xl">Register</h2>
              <p className="text-xs font-light tracking-wide mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus vero molestiae error, omnis totam quas.
              </p>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Write Your Name</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="name...."
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Write Your Username</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="username...."
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Write Your Email</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="name@gmail.com"
                />
              </fieldset>
              <fieldset className="fieldset relative">
                <legend className="fieldset-legend">Write Your Password</legend>
                <input
                  ref={copyRef}
                  className="input w-full"
                  placeholder="password"
                  type={isType ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className="absolute top-3.5 right-3 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(copyRef?.current?.value)
                    setIsCopy(true)
                    setTimeout(() => setIsCopy(false), 1300)
                  }}
                >
                  {isCopy ? <TbCopyCheck size={19} /> : <TbCopy size={19} />}
                </button>
                <span
                  className="absolute top-3.5 right-12 cursor-pointer"
                  onClick={() => setIsType(!isType)}
                >
                  {isType ? <TbEye size={21} /> : <TbEyeClosed size={21} />}
                </span>
              </fieldset>
              <button className="btn btn-sm btn-soft btn-accent font-light px-7 mt-3 mr-auto">
                Create account
              </button>
            </form>
          )}
          <div className="mt-2.5 flex items-center gap-5">
            <button
              className="btn btn-sm btn-circle btn-soft btn-success tooltip tooltip-success"
              data-tip="Google"
            >
              <TbBrandGoogle size={19} />
            </button>
            <button
              className="btn btn-sm btn-circle btn-soft btn-info tooltip tooltip-info"
              data-tip="Facebook"
            >
              <TbBrandFacebook size={19} />
            </button>
            <button
              className="btn btn-sm btn-circle btn-soft tooltip"
              data-tip="XTwitter"
            >
              <TbBrandX size={19} />
            </button>
          </div>
          <div className="flex items-center gap-2.5 mt-3.5">
            {pa === 'login' ? (
              <>
                <p className="text-sm text-gray-500">
                  already have an Account?
                </p>
                <Link
                  to="/auth/register"
                  className="link link-warning no-underline"
                >
                  Create account
                </Link>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500">don't have any Account?</p>
                <Link to="/auth/login" className="link link-error no-underline">
                  Login account
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default AuthPage
