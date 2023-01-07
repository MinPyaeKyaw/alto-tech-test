// components
import Banner from '../components/homepage/Banner/Banner'
import Navbar from '../components/common/Navbar/Navbar'
import Feature from '@/components/homepage/Feature/Feature'
import Services from '@/components/homepage/Services/Services'
import Messenger from '@/components/common/Messenger/Messenger'

export default function Home() {

  return (
    <>
      <Navbar>
        <Banner />

        <Feature />

        <Services />

        {/* <Messenger /> */}
      </Navbar>
    </>
  )
}
