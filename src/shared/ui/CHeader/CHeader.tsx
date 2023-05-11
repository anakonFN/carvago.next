import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  BookmarkIcon,
  ChevronDownIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { CButton } from '../CButton'
import { CHoverMenu } from '../CHoverMenu'

import carvagoLogo from '../../assets/carvago-logo.svg'

import british from './assets/british.png'
import czech from './assets/czech.webp'
import Image from 'next/image'
import Link from 'next/link'

const serviceButtons = ['CarAudit \u2122', 'Delivery', 'Financing', 'Warranty']

export function CHeader() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const switchNavbar = () => setShowNavbar(!showNavbar)
  const switchShowMore = () => setShowMore(!showMore)
  const closeNavbar = () => setShowNavbar(false)

  useEffect(() => {
    if (showNavbar)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'auto'
  }, [showNavbar])

  return (
      <>
          {showNavbar
            ? (
                <div
                    className="
                    fixed z-[120] h-full w-full bg-black/40
                    text-xl text-slate-600
                    "
                >
                    <ul
                        className="bg-white pt-10"
                    >

                        <li className="px-10 pb-6">

                            <Link href="/cars?page=1">
                                <button
                                    onClick={() => {
                                      location.reload()
                                    }}
                                >
                                    Buy
                                </button>
                            </Link>

                        </li>

                        <li className="px-10 pb-6">
                            How it works
                        </li>

                        <li className="px-10 pb-6">
                            Review
                        </li>

                        <li className="flex items-center gap-3 px-10 pb-6">
                            Services
                            <ChevronDownIcon className="h-5 w-5" />
                        </li>

                        <li
                            className="
                            mt-6 flex justify-between bg-slate-100 px-10 py-4
                            "
                            onClick={switchShowMore}
                        >
                            <div className="flex items-center gap-2">
                                <AdjustmentsHorizontalIcon
                                    className="h-5 w-5 text-indigo-600"
                                />

                                <div
                                    className="
                                    text-sm font-bold text-slate-600
                                    "
                                >
                                    Language and currency
                                </div>
                            </div>

                            <div
                                className="
                                flex gap-3 text-sm font-semibold text-slate-600
                                "
                            >
                                <p>
                                    EUR
                                </p>

                                <Image
                                    alt="language"
                                    className="h-5 w-5 rounded-full"
                                    src={british}
                                />
                            </div>
                        </li>

                        { showMore
                          ? (
                              <li className="bg-slate-100 px-10 py-4">
                                  <div className="inline-flex flex-col gap-2">
                                      <div
                                          className="
                                          flex shrink-0 grow-0 gap-2
                                          rounded-sm bg-indigo-600 px-3 py-2
                                          "
                                      >
                                          <Image
                                              alt="language"
                                              className="h-5 w-5 rounded-full"
                                              src={british}
                                          />

                                          <span
                                              className="
                                              text-sm font-bold text-white
                                              "
                                          >
                                              EN
                                          </span>

                                      </div>

                                      <div
                                          className="
                                          rounded-sm bg-indigo-600 p-1
                                          text-center text-sm font-bold
                                          text-white
                                          "
                                      >
                                          EUR
                                      </div>
                                  </div>
                              </li>
                            )
                          : null}
                    </ul>
                </div>
              )
            : null}

          <header
              className="
              fixed top-0 z-[200] flex h-[70px]
              w-full items-center border-b bg-white
              "
          >

              <div
                  className="
                  flex h-full w-full
                  items-center justify-between px-7
                  "
              >
                  <div
                      className="flex items-center gap-6 "
                      onClick={closeNavbar}
                  >
                      <Link href="/">
                          <Image
                              alt='carvago logo'
                              height={17}
                              src={carvagoLogo}
                          />
                      </Link>

                      <div className="hidden gap-3 lg:flex">
                          <CButton
                              variant="routerLink"
                          >
                              <Link href="/cars?page=1">
                                  Buy
                              </Link>
                          </CButton >

                          <CButton variant="routerLink">
                              How it works
                          </CButton>

                          <CButton variant="routerLink">
                              Review
                          </CButton>

                          <CHoverMenu button={({ open, delayClose }) => (
                              <CButton
                                  classes="hover:no-underline relative"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                                  variant="underline"
                              >
                                  Services
                                  <ChevronDownIcon className="h-4 w-4" />
                              </CButton>
                          )}
                          >
                              {({ close, open, delayClose }) => (
                                  <div
                                      className="
                                      w-36 rounded-md border
                                      border-gray-200 shadow-lg
                                      "
                                      onMouseEnter={open}
                                      onMouseLeave={delayClose}
                                  >
                                      <ul
                                          className="
                                          relative flex
                                          flex-col gap-1 overflow-hidden
                                          rounded-md bg-white px-4 py-2
                                          "
                                      >
                                          {serviceButtons.map((service) => {
                                            return (
                                                <li key={service}>
                                                    <CButton
                                                        classes="
                                                        w-full justify-center
                                                        "
                                                        onClick={close}
                                                        variant="light"
                                                    >
                                                        {service}
                                                    </CButton>
                                                </li>
                                            )
                                          })}
                                      </ul>
                                  </div>
                              )}
                          </CHoverMenu>
                      </div>
                  </div>

                  <div
                      className="
                      flex items-center gap-4
                      text-indigo-900 lg:gap-7
                      "
                  >
                      <div className="flex items-center gap-4">

                          <CHoverMenu button={({ open, delayClose }) => (
                              <HeartIcon
                                  className="h-6 w-6"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              />
                          )}
                          >
                              {({ open, delayClose }) => (
                                  <div
                                      className="
                                      rounded-md border
                                      border-gray-200 bg-white shadow-lg
                                      "
                                      onMouseEnter={open}
                                      onMouseLeave={delayClose}
                                  >
                                      <div
                                          className="
                                          relative overflow-hidden
                                          rounded-md bg-white
                                          "
                                      >
                                          <div>
                                              <div
                                                  className="
                                                  bg-gray-100 px-4 py-6
                                                  "
                                              >
                                                  <CButton
                                                      classes="mb-6"
                                                      size="lg"
                                                      variant="primary"
                                                  >
                                                      Login
                                                  </CButton>

                                                  <p
                                                      className="
                                                      flex
                                                      justify-center
                                                      gap-2 text-sm
                                                      text-gray-500
                                                      "
                                                  >
                                                      Don&apos;t have
                                                      an account?
                                                      <CButton
                                                          classes="
                                                          font-semibold
                                                        hover:underline-offset-8
                                                          decoration-1"
                                                          variant="underline"
                                                      >
                                                          Register
                                                      </CButton>
                                                  </p>
                                              </div>

                                              <div
                                                  className="
                                                  py-4 text-center
                                                  text-sm text-gray-500
                                                  "
                                              >
                                                  <p className="font-semibold">
                                                      To follow your
                                                      favourite cars
                                                  </p>

                                                  <p>
                                                      you must be logged in
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              )}
                          </CHoverMenu>

                          <CHoverMenu button={({ open, delayClose }) => (

                              <div
                                  className="flex gap-3"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              >
                                  <UserIcon className="h-6 w-6" />

                                  <span className="hidden lg:block">
                                      Login
                                  </span>
                              </div>
                          )}
                          >
                              {({ open, delayClose }) => (
                                  <div
                                      className="
                                      rounded-md border
                                      border-gray-200 bg-white shadow-lg
                                      "
                                      onMouseEnter={open}
                                      onMouseLeave={delayClose}
                                  >
                                      <div
                                          className="
                                          relative overflow-hidden
                                          rounded-md bg-white
                                          "
                                      >
                                          <div
                                              className="
                                              border-b bg-gray-100 px-4 py-6
                                              "
                                          >
                                              <CButton
                                                  classes="mb-6"
                                                  size="lg"
                                                  variant="primary"
                                              >
                                                  Login
                                              </CButton>

                                              <p
                                                  className="
                                                  flex justify-center
                                                  gap-2 text-sm text-gray-500
                                                  "
                                              >
                                                  Don&apos;t have an account?
                                                  <CButton
                                                      classes="
                                                      font-semibold
                                                      hover:underline-offset-8
                                                      decoration-1"
                                                      variant="underline"
                                                  >
                                                      Register
                                                  </CButton>
                                              </p>
                                          </div>

                                          <ul
                                              className="
                                              flex cursor-default
                                              flex-col gap-3 p-6
                                              text-blue-300/75
                                              "
                                          >
                                              <li
                                                  className="
                                                  flex items-center gap-2
                                                  "
                                              >
                                                  <ShoppingCartIcon
                                                      className="h-6 w-6"
                                                  />
                                                  Orders in progress
                                              </li>

                                              <li
                                                  className="
                                                  flex items-center gap-2
                                                  "
                                              >
                                                  <HeartIcon
                                                      className="h-6 w-6"
                                                  />
                                                  Favorite cars
                                              </li>

                                              <li
                                                  className="
                                                  flex items-center gap-2
                                                  "
                                              >
                                                  <BookmarkIcon
                                                      className="h-6 w-6"
                                                  />
                                                  Saved searches
                                              </li>

                                              <li
                                                  className="
                                                  flex items-center gap-2
                                                  "
                                              >
                                                  <UserIcon
                                                      className="h-6 w-6"
                                                  />

                                                  My profile
                                              </li>

                                          </ul>
                                      </div>
                                  </div>
                              )}
                          </CHoverMenu>
                      </div>

                      <div className="hidden h-10 border lg:block" />

                      <div className="hidden items-center gap-7 lg:flex">

                          <CHoverMenu button={({ open, delayClose }) => (
                              <CButton
                                  className="
                                  flex w-full items-center gap-2
                                  "
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              >
                                  <Image
                                      alt="language"
                                      className="h-7 w-7 rounded-full"
                                      src={british}
                                  />

                                  <ChevronDownIcon className="h-4 w-4" />
                              </CButton>
                          )}
                          >
                              {({ open, delayClose }) => (
                                  <div
                                      className="
                                      w-44 rounded-md
                                      border border-gray-200 bg-white
                                      shadow-lg
                                      "
                                      onMouseEnter={open}
                                      onMouseLeave={delayClose}
                                  >
                                      <div className='px-4 py-2'>
                                          <div
                                              className="
                                              group flex items-center
                                              gap-2 rounded-lg
                                              p-2
                                              hover:bg-gray-100
                                              "
                                          >
                                              <Image
                                                  alt="czech"
                                                  className="
                                                  h-6 w-6 rounded-full
                                                  "
                                                  src={czech}
                                              />

                                              <p
                                                  className='
                                                  font-light
                                                  text-gray-700
                                                  group-hover:font-semibold
                                                  '
                                              >
                                                  čeština
                                              </p>
                                          </div>

                                          <div
                                              className="
                                              group flex items-center
                                              gap-2 rounded-lg
                                              py-2 pl-2 pr-20
                                              hover:bg-gray-100
                                              "
                                          >
                                              <Image
                                                  alt="czech"
                                                  className="
                                                  h-6 w-6 rounded-full
                                                  "
                                                  src={british}
                                              />

                                              <p
                                                  className='
                                                  font-light
                                                  text-gray-700
                                                  group-hover:font-semibold
                                                  '
                                              >
                                                  english
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              )}
                          </CHoverMenu>

                          <div>
                              EUR
                          </div>
                      </div>

                      <button
                          className="block lg:hidden"
                          onClick={switchNavbar}
                      >
                          {showNavbar
                            ? (<XMarkIcon className="h-6 w-6" />)
                            : (<Bars3Icon className="h-6 w-6" />)}
                      </button>
                  </div>
              </div>
          </header>
      </>
  )
}
