import Freelancing from '@/components/Freelancing'
import Headlines from '@/components/Headlines'
import HireBanner from '@/components/HireBanner'
import Intro from '@/components/Intro'
import ServicesSuggestions from '@/components/ServicesSuggestions'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Intro />
      <Headlines />
      <Freelancing />
      <ServicesSuggestions />
      <HireBanner />
    </main>
  )
}
