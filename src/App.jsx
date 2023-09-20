import { useState } from 'react'

import TopTitle from './components/TopTitle/TopTitle'
import Navbar from './components/Navbar/Navbar'
import LeagueRules from './pages/LeagueRules/LeagueRules'

function App() {

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    console.log('test')
    setShowNav(!showNav);
  }


  return (
    <>
      <div className='flex h-full'>
        <Navbar handleShowNav={handleShowNav} showNav={showNav} />
        <section className='w-full'>

          <TopTitle handleShowNav={handleShowNav} showNav={showNav} />
          <div >
            <LeagueRules />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
