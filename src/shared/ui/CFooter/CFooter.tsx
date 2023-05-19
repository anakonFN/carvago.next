/* eslint-disable react/no-array-index-key */
import Image from 'next/image'

import { CButton } from '../CButton'

import carvagoLogo from '../../assets/carvago-logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import linkedIn from './assets/linkedIn.svg'
import youtube from './assets/youtube.svg'
import dinersClub from './assets/dinersClub.svg'
import maestro from './assets/maestro.svg'
import visa from './assets/visa.svg'
import visaElectron from './assets/visaElectron.svg'
import masterCard from './assets/masterCard.svg'
import discover from './assets/discover.svg'

export function CFooter() {
  const paymants = [
    visa,
    visaElectron,
    masterCard,
    maestro,
    dinersClub,
    discover,
  ]

  const socials = [
    youtube,
    linkedIn,
    facebook,
    instagram,
  ]

  return (
      <footer
          className="
          border-t border-slate-300 bg-slate-50 px-4
          pb-8 pt-20 text-slate-600 md:px-8
          "
      >
          <nav className="mx-0 lg:mx-36">
              <div className="grid sd:grid-cols-3">
                  <div className="order-last mt-4 sd:order-first sd:mt-0">
                      <div />

                      <Image
                          alt="Carvago logo"
                          src={carvagoLogo}
                          width={96}
                      />

                      <div
                          className="
                          whitespace-nowrap pt-8 text-sm opacity-80
                          "
                      >
                          Carvago 2023 • All rights reserved
                      </div>
                  </div>

                  <div className="grid grid-cols-2">
                      <div>
                          <h5 className="mb-6 text-xl font-bold">
                              Carvago
                          </h5>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Buy
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              How it works
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Reviews
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Site map
                          </CButton>
                      </div>

                      <div>
                          <h5 className="mb-6 text-xl font-bold">
                              Sevices
                          </h5>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              CarAudit&#8482;
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Delivery
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Financing
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Warranty
                          </CButton>
                      </div>
                  </div>

                  <div className="grid grid-cols-2">
                      <div>
                          <h5 className="mb-6 text-xl font-bold">
                              Company
                          </h5>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              About us
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Contact
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Reviews
                          </CButton>

                          <CButton
                              className="hover:bg-slate-50"
                              variant="light"
                          >
                              Site map
                          </CButton>
                      </div>

                      <div />
                  </div>

                  <div />
              </div>

              <div
                  className="
                  mt-20 grid grid-rows-2 items-center justify-between
                  gap-6 border-t
                  border-slate-200 pt-12 sd:flex sd:gap-0
                  "
              >
                  <div className="flex items-center gap-2 sd:gap-4">
                      {paymants.map((paymant, id) => {
                        return (
                            <Image
                                alt={paymant}
                                height={24}
                                key={id}
                                src={paymant}
                            />
                        )
                      })}
                  </div>

                  <div className="flex items-center gap-8">
                      {socials.map((social, id) => {
                        return (
                            <CButton
                                key={id}
                                variant="link"
                            >
                                <Image
                                    alt={social}
                                    height={24}
                                    src={social}
                                />
                            </CButton>
                        )
                      })}
                  </div>
              </div>
          </nav>
      </footer>
  )
}
