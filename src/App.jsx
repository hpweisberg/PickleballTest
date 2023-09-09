import { useState } from 'react'

import TopTitle from './components/TopTitle/TopTitle'
import Navbar from './components/Navbar/Navbar'
import LeagueRules from './pages/LeagueRules/LeagueRules'

function App() {

  return (
    <>
      <div className='flex'>
        <Navbar />
        <section className='w-full'>

          <TopTitle />
          <div >
            <LeagueRules />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
