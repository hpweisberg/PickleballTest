import { useState } from 'react'

import TopTitle from './components/TopTitle/TopTitle'
import LeagueRules from './pages/LeagueRules/LeagueRules'

function App() {

  return (
    <>
      <TopTitle />
      <div >
        <LeagueRules />
      </div>
    </>
  )
}

export default App
