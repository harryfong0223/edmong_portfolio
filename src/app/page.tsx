import {
  AboutMe,
  AnimatedTitle,
  Border,
  ContactForm,
  Container,
  FadeIn,
  GridPattern,
  MyWork,
  Section,
  SectionHeader,
  Skills,
  Socials,
  Stars,
  WorkExperience,
} from '@/components'
import { Archive, BookOpen, BriefCase, Envelope } from '@/icons'

export const metadata = {
  title: 'Michael Aguilar',
  description: 'My personal portfolio.',
}

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'My Work', id: 'my-work' },
  { index: 4, title: 'Contact Me', id: 'contact' },
]

interface contentSection {
  id: string
  sectionHeader: {
    icon: React.ReactNode
    title: string
    description: React.ReactNode
  }
  mainContent: React.ReactNode
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-cyan-300">Sr.Software Engineer (FE Heavy)</span>{' '}
          with <span className="text-cyan-300">8 years</span> of experience in
          various industry projects
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Skills',
      description: <div></div>,
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'My Work',
      description: <div></div>,
    },
    mainContent: <MyWork />,
  },
  {
    id: sections[4].id,
    sectionHeader: {
      icon: (
        <>
          <Envelope height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Contact Me',
      description: (
        <div>
          Let&apos;s <span className="text-blue-400">Move</span> the World{' '}
          <span className="text-blue-400">Together!</span>
        </div>
      ),
    },
    mainContent: <ContactForm />,
  },
]

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl md:pt-[10vh] 2xl:pt-[10vh]">
              <h1 className="font-display text-6xl pb-5 font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Michael Aguilar<span className="wave">👋</span>
              </h1>
              <i className="font-display pt-15 text-3xl text-m font-medium tracking-tight [text-wrap:balance] sm:text-3xl">
                Chase the wind and touch the sky
              </i>
              <div className="flex text-2xl text-yellow-200 pt-3 mt-3 mb-1">
                Grit, Passion, Perseverance!
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>{' '}
                <AnimatedTitle />
              </div>
              <p className="max-w-3xl text-lg pt-3">
                React | Senior Frontend Engineer | Full Stack Developer |
                e-commerce, marketplace, fintech, healthcare, GIS experience |
                Seeking a fresh challenge
              </p>
              <p className="pt-5 max-w-3xl text-lg pt-3">
                I&apos;m dedicated to continuing learning and will go above and
                beyond to support my continuous growth. I firmly believe in the
                “We before Me” philosophy, learning, guiding and assisting
                others in accomplishing the team&apos;s objectives. I am a
                lifelong student and innovator who never stops looking for
                challenges to solve and approaches that boost the bottom line.
              </p>
            </FadeIn>

            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>{' '}
          <Border />
          <AboutMe />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  )
}
