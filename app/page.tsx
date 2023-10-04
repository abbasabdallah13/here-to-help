import Freelancing from '@/components/Freelancing'
import Headlines from '@/components/Headlines'
import Intro from '@/components/Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Intro />
      <Headlines />
      <Freelancing />
    </main>
  )
}
