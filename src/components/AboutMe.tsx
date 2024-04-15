import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components'
import { Accounts } from '@/icons'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            <span className="text-about_me_green">We before Me!</span>{' '}
            philosopher.
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-12 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <span className="text-3xl font-semibold leading-8 tracking-tight text-white">
              Michael A. Aguilar
            </span>
            <p className="text-xl text-base leading-7 text-yellow-200 pb-2">
              Sr.Software Engineer (Frontend Heavy Guy) - 8 yrs
            </p>

            <p className="pt-2">
              <span className="text-lg text-base font-semibold leading-7 text-cyan-300">
                Who I am?
              </span>
              <br />
              <span className="mt-4 text-lg text-gray-500">
                I am a firm believer in the{' '}
                <i className="text-yellow-200">“We before Me”</i> mentality. I
                am dedicated to continuing learning and will go beyond to
                support my ever-end-growth.
              </span>
            </p>

            <p className="pt-2">
              <span className="text-lg text-base font-semibold leading-7 text-cyan-300">
                My coding style?
              </span>
              <br />
              <span className="mt-4 text-lg text-gray-500">
                <i className="text-yellow-200">Play the long game!</i> <br />
                Always maintain the perspective of users and customers, what
                they want, and about the business, what it needs.
              </span>
            </p>

            <p className="pt-2">
              <span className="text-lg text-base font-semibold leading-7 text-cyan-300">
                Outside of coding?
              </span>
              <br />
              <span className="mt-4 text-lg text-gray-500">
                Feedback Hunter! Love sharing opinions with colleagues! <br />
                <i className="text-yellow-200">
                  Respecting and understanding
                </i>{' '}
                diverse perspectives are important in the digital world!
              </span>
            </p>

            <p className="pt-2">
              <span className="text-lg text-base font-semibold leading-7 text-cyan-300">
                What I pursue?
              </span>
              <br />
              <span className="mt-4 text-lg text-gray-500">
                <i className="text-yellow-200">
                  Meaningful impact!
                  <br />
                  Innovation!
                  <br />
                  Learning never stops me!
                </i>
              </span>
            </p>
          </div>

          <div className="flex-none mx-auto">
            <Image
              className="rounded-full object-cover"
              src="/Skydiving.jpg"
              alt=""
              height={208}
              width={208}
            />
          </div>
        </div>

        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green text-xl mb-1">
                  | Languages
                </h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-row flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> -{' '}
                      <p className="text-gray-500">C1</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard
                className="hover:shadow-about_me_green/90"
                glowClassName="from-[#6bc072] to-[#6bc072]"
              >
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image
                      className="rounded-2xl object-fill"
                      src="/work/texas_tech_university_logo.png"
                      alt=""
                      width={144}
                      height={144}
                    />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                      B.S. in Computer Science
                    </h3>
                    <p className="text-base text-xl leading-7 text-about_me_green">
                      Texas Tech University
                    </p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
