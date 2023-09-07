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
                <span>Courts</span>
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
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>Each team needs to provide 3 home courts. Exceptions can be made if court availability at home site is limited, in which case, courts can be played in sequence. However, the effort should be made to keep this option to a minimum.
                    <ul className='bullet'>
                      <li>
                        The schedule is based on a team’s number of courts, days of the week, and skill level. For example, team A plays in the 2.5 division with a home court that has six courts. Team B plays in the 4.0 division with the same home court. It’s possible to schedule the 2.5 and 4.0 team on the same night and using all six courts at the same time (5:00pm match time for both 2.5 and 4.0 teams). However if this is a public court that has restrictions, both 2.5 and 4.0 matches can be scheduled at the 5:00pm time slot but each team would then only get two courts. In this scenario, gender doubles is played first followed by mixed doubles.
                      </li>
                    </ul>
                  </li>
                  <li>
                    The home team pays any court fees for all home court matches if the home court location requires a fee. This includes any private or public courts.
                  </li>
                  <li>
                    If a team exists but does not have access to a home court, all matches will be scheduled as away matches.
                  </li>
                  <li>
                    If a home team’s courts are not available during the season when a home match is scheduled, the away team can provide courts. If a fee is required for the away team courts, the home team and away team will split those court fee cost. For example, team A plays team b at their public park but the park is closed during the scheduled match time for any reason beyond team A’s control. Team b can host the match that week. Team captains need to communicate this change ASAP.
                  </li>
                  <li>
                    All games should be played on regulation pickleball courts.
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
                <span>Match Day Overview</span>
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
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>Each Match will have 3 courts of play, Men’s Doubles, Women’s Doubles and Mixed Doubles.
                  </li>
                  <li>
                    Each court will play the best of 3 games with games played to 11 points win by 2.
                  </li>
                  <li>
                    All regular season games are completed without referees.
                  </li>
                  <li>
                    The League schedules matches based on information provided by team captains (ie number of courts available and the day of the week).
                    <ul>
                      <li className='bullet'>
                        Situations arise from time to time where a player or players have late schedule changes which could impact a scheduled match. A player consistently being late or dropping out from a scheduled match should be considered for removal from the team by the team captain.
                      </li>
                    </ul>
                  </li>
                  <li>
                    The home team provides new balls for each match (3 match balls). The League ball for outside matches is Franklin X-40. Team captains can purchase these pickleballs @ pickleballcentral.com using promo code “CRASPL” to receive a 5% discount on the purchase. The League will also has a discount with Franklin Sports for a purchase directly through them (current promo code is FORUM20).
                  </li>
                  <li>
                    The away team chooses either what side they want or to serve for first game, not both.
                  </li>
                  <li>
                    Teams will switch sides and serve for second game.
                  </li>
                  <li>
                    If a third game is required, side and serve will be the same as game 1. Teams will switch sides when 1 team reaches 6 points.
                  </li>
                  <li>
                    Captains will exchange line up prior to start of match. If, after the lineups have been exchanged but prior to the first point of an individual match being played, a player becomes unable to play due to injury, illness or disqualification, a substitution may be made using a rostered player. No other player changes are allowed for unplayed matches on that lineup. The substituted player should be given reasonable time to arrive at the courts if they are not already there and reasonable time to warmup before match play.
                  </li>
                  <li>
                    A warm up period prior to match play can be included at the scheduled match start time but should be limited to10 minutes maximum.
                  </li>
                  <li>
                    There is a fifteen-minute default rule (inclusive of warm up time) in effect for all local matches. The opposing captain has the discretion to extend the default time and play the match if it is possible to do so. All late players are guaranteed a 5-minute warm up after they arrive late. For example, if a match is schedule to begin at 6:00pm, if a player has not arrived to the courts by 6:15, the match may be defaulted.
                    <ul>
                      <li className='bullet'>
                        Please note, everyone’s intention is to play matches each week. No one should want to win a match because a player is 16 minutes late. Both teams should be respectful of time and honest with each other. A player 5 minutes late should not be penalized but a team should not be waiting an extended period of time and expect to play when the player/players finally show up to play.
                      </li>
                    </ul>
                    <li>
                      Cell phone use on the court is considered a deliberate potential hindrance. Phones should be turned off. Penalty will be warning, then point, then game. Players must have their phone turned off or on silent.
                    </li>
                    <li>
                      The match officially starts when play of the first point is begun. In the event of a rain or a stoppage of play due to circumstances beyond the control of the players, completed individual matches will stand as played. An incomplete match shall be continued by the same players and resumed at the exact point - set, game, point - when play was halted. If players (s) are unavailable to continue the match on the rescheduled time or date then the individual match will be scored as either a retirement in favor of the team whose players are available or a double default if both teams are missing a player. The original line up may be changed on a court that has not officially started play even if the players completed warm-up.
                    </li>
                    <li>
                      Players, teammates, spectators, or coaches who interfere and/or are disruptive at matches are considered to have violated the standards of good conduct, fair play and good sportsmanship. This includes conduct before, during and after completion of the match. Teammates, spectators, or coaches may not volunteer advice or give an opinion on line calls, scoring, or on the conduct of the match.
                      <ul className='bullet'>
                        <li>
                          All State Pickleball League plays by USA Pickleball Tournament Rules. The relevant rule on coaching from USAP is as follows:
                          <ul className='bullet'>
                            <li>
                              3.A.2. Coaching - Communication of any information, including verbal, nonverbal, and electronic, from someone other than a player’s partner, that a player or team may act upon to gain an advantage or help them avoid a rules violation is not allowed.
                              <ul className='bullet'>
                                <li>
                                  G.1.j.Violations: : Except during time-outs and in-between games, receiving coaching from anyone other than a partner is a violation.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Players should not leave the court unless to use the restroom or a medical timeout. Players are allowed 5 minutes for a medical timeout and must return to play. If the player is unable to return to play after this time, the game is considered a retirement.
                    </li>
                    <li>
                      The weather is always an unknown factor and varies from township to township. Rain in your township is not always the case in another township therefore a match should not be cancelled due to rain. Team captains must communicate and visibly inspect the courts to determine if play can begin. Courts with standing water are unsafe. Courts that are wet but drying out should have match play.
                    </li>
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
                <span>Rescheduling Parameters</span>
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
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>Matches scheduled are required to be played on the date as scheduled. Teams may move the start time to earlier or later if both team captains agree and it does not jeopardize the lineups for each team. Attempting to play the match earlier or later due to potential weather is a valid request however the match start time cannot be changed if both teams cannot field a full team for the match. Reasons to reschedule a match are:
                  </li>
                  <ul className="bullet">
                    <li>
                      Cause: Religious Holiday
                    </li>
                    <li>
                      Cause: Rain / weather – as noted in the Schedule section, weather is unpredictable and often varies from township to township. A forecast of rain may not always generate rain. If the forecast calls for rain the home team should look to secure an indoor option. If an indoor option is available, the home team pays the fee for this match (as noted in Courts). If the home team cannot secure an indoor option, the away team can host the match if the schedule permits. If the away team cannot host the match, the home team captain must notify the League (contact allstatepickleball@gmail.com) with the following information:
                      <ul className="bullet">
                        <li>
                          Home team name/away team name/skill level/division/opponent/match day. The reason why the match needs to be reschedule.
                        </li>
                        <ul className="bullet">
                          <li>
                            The League will review this request and contact the home team captains with dates to reschedule the match at the end of the season. The home team captain selects three dates that the team can play which is then shared with the away team who picks one of the dates and the match becomes scheduled.
                          </li>
                          <li>
                            If the away team is unavailable to play on any of the three dates, the away team forfeits the match. Partial matches are allowed and encouraged if the full match cannot be played.
                          </li>
                        </ul>
                      </ul>
                      <li>
                        Cause: Court availability – See Courts. If the home team courts are not available due to circumstances beyond the team’s captain control for a scheduled match, then the away team can host the match if the away team has available courts. If the away team does not have available courts (ie other matches are already scheduled or courts are unavailable for rental etc) the home team captain must notify the League and request the match be rescheduled.
                        <ul className='bullet'>
                          <li>
                            The same process followed as noted above.
                          </li>
                        </ul>
                      </li>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
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
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>After the scheduled season is complete, state playoffs will be held in a central location in NJ or out of state.

                  </li>
                  <li>The winning team from each division / level qualifies for playoffs.

                  </li>
                  <li>The division winner is determined by the following criteria:
                    <ol className="list-decimal ml-6">
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
                    <ol className="list-decimal ml-6">
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
                  <li>
                    All team members MUST play in at least 2 matches during the regular season to be eligible to play in playoffs. A team using a player who did not play in at least two matches during the regular season will have the results of the playoff matches voided for the noneligible player.
                  </li>
                  <li>
                    If a skill level does not have more than two divisions in the state, a wild card team will be added for playoff scheduling. The wild card team will be the highest rated team that did not win either division following the same format as determining division winners.
                    <li>Additionally, skill divisions that have an odd number of teams qualifying for playoffs may also have a wild card team included for playoff scheduling. Teams would be notified of this as soon as possible either at the start of the season or prior to playoffs being scheduled.
                    </li>
                  </li>
                  <li>
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
