import { Border, FadeIn, FadeInStagger } from '@/components'
import clsx from 'clsx'
import { default as Image } from 'next/image'

const experience = [
  {
    title: 'Voomly | Senior Frontend Software Engineer',
    date: 'Jan 2023 – Feb 2024',
    description: [
      'Architected scalable and robust platforms using TypeScript, React, and Next, resulting in a 30% reduction in memory usage and a 20% acceleration in development speed.',
      'Focused on scalability challenges, leading to a 30% improvement in platform capacity and a 20% increase in user load handling without compromising performance.',
      'Implemented the integration of Stripe and Viva Wallet payment systems, revolutionizing payment processing efficiency by 50%, while simultaneously elevating user trust and satisfaction levels by 20%.',
      'Championed a collaborative initiative with cross-functional teams to design and implement robust RESTful APIs, achieving a 30% improvement in response times and significantly enhancing user experience.',
      'Volunteered to mentor junior developers in front-end best practices, leading to a 25% improvement in team productivity and a decrease in onboarding time.',
    ],
    image: {
      url: '/work/voomly_cloud_logo.jpg',
      height: 96,
      width: 96,
      className: 'rounded-none',
    },
  },
  {
    title:
      'Global IT Associates | Senior Full Stack Developer (Frontend Focus)',
    date: 'Jan 2020 – Nov 2022',
    description: [
      'Coordinated a complete redesign of customer-facing digital products, employing TypeScript, React, and Node.js, which led to a 50% improvement in performance metrics.',
      'Enforced coding standards by reviewing over 500+ commits, which decreased bug rates by 40% and increased code maintainability scores by 35%.',
      'Authored comprehensive documentation for a complex codebase that improved team onboarding efficiency by 25%.',
      'Revamped website layout using Material UI, ANT Design, and Tailwind CSS, resulting in a 30% increase in user engagement, driving higher conversion rates.',
    ],
    image: {
      url: '/work/globalitassociates_logo.jpg',
      height: 96,
      width: 96,
      className: '',
    },
  },
  {
    title: 'TA Digital | Web Developer - Full Stack Developer',
    date: 'Sep 2015 – Dec 2019',
    description: [
      'Employed Git for effective version control and collaborative development, reducing code conflicts by 40% and enhancing team productivity by 30%.',
      'Spearheaded the adoption of OOP principles, enabling seamless code maintenance and reducing bug fix time by 25%.',
      'Identified and implemented innovative UI/UX solutions, leveraging user feedback and analytics to drive a 25% increase in user retention and a 10% improvement in conversion rates.',
      'Conducted comprehensive SEO audits and implemented on-page optimization strategies, resulting in a 30% increase in search engine rankings and a 20% boost in organic traffic.',
    ],
    image: {
      url: '/work/ta_digital_inc_logo.jpg',
      height: 96,
      width: 96,
      className: '',
    },
  },
]

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole
            key={index}
            title={item.title}
            date={item.date}
            image={item.image}
          >
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  )
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode
  title: string
  date?: string
  image: { url: string; className: string; height: number; width: number }
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div
          className={clsx(
            'flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto',
            image.className
          )}
        >
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div
            className={clsx(
              'flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden',
              image.className
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-yellow-200 text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  )
}
