import { Fragment } from 'react'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const LeagueRules = () => {
  return (
    <div className="w-full px-4 pt-16 ">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2">
        <Disclosure >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Forfeits</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <li className='bullet'>The League takes considerable care, time, and input from team captains to ensure that the schedule is accurate and accommodating to every team in the league each season. In addition, as a League, it is expected that players on each team understand the dedication and time requirement needed to complete matches each week. While we want everyone to play in the League, to ensure equity and fair play, players should understand that the schedule matters and teams should play their match each week and not reschedule each week’s matches. In an effort to ensure equity and fair play and team captain feedback, the League has detailed the rules around forfeiting a match.

                  </li>
                  <li className='bullet'>A team that is unable to play a match when it was scheduled or rescheduled will lose by forfeit (see Match Guidelines and Reschedule Guidelines).

                  </li>
                  <li className='bullet'>If a team wins by forfeit, the team is awarded 3 Courts. Each court will be recorded as 2 games - 0 games with a score of 11-0. If any courts can be played, they should be played, even if it is only a partial match.</li>
                  <li className='bullet'>If any courts are forfeited, in a partially played match, score will be recorded as 2-0, 11- 0,11-0 for team that was able to play the court that was forfeited.
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Playoff Information</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <li className='bullet'>After the scheduled season is complete, state playoffs will be held in a central location in NJ or out of state.

                  </li>
                  <li className='bullet'>The winning team from each division / level qualifies for playoffs.

                  </li>
                  <li className='bullet'>The division winner is determined by the following criteria:
                    <ol className="list-decimal ml-8">
                      <li>
                        Most Matches Won (wins on the season).
                      </li>
                      <li>
                        Most Courts Won (1, 2, or 3 per match).
                      </li>
                      <li>
                        Most Games Won (maximum of six games won per match).
                      </li>
                      <li>
                        The least points lost (every point counts).
                      </li>
                      <li>
                        Head-to-head results.
                      </li>
                    </ol>
                  </li>
                  <li className='bullet'>The playoff format will be communicated to division winners as soon as possible towards the end of the regular season. Potential formats includes:
                    <ol className="list-decimal ml-8">
                      <li>
                        Round robin
                      </li>
                      <li>
                        Single-double elimination
                      </li>
                      <li>
                      Pool play
                      </li>
                      <li>
                        Etc.
                      </li>
                    </ol>
                  </li>
                  <li className='bullet'>
                  All team members MUST play in at least 2 matches during the regular season to be eligible to play in playoffs. A team using a player who did not play in at least two matches during the regular season will have the results of the playoff matches voided for the noneligible player.
                  </li>
                  <li className='bullet'>
                  If a skill level does not have more than two divisions in the state, a wild card team will be added for playoff scheduling. The wild card team will be the highest rated team that did not win either division following the same format as determining division winners.
                  <li className='bullet'>Additionally, skill divisions that have an odd number of teams qualifying for playoffs may also have a wild card team included for playoff scheduling. Teams would be notified of this as soon as possible either at the start of the season or prior to playoffs being scheduled.
                  </li>
                  </li>
                  <li className='bullet'>
                  If a division winner or wild card is unable to attend the playoffs, the next time in the standings will be asked to play in the playoffs. This process will continue until a team commits to play. Playoff scheduling will then be confirmed.
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default LeagueRules;
