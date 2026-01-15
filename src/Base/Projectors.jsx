import React from 'react'
import { Link } from 'react-router-dom'

export default function Projectors() {
	return (
		<div>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header'>
						<Link to='/typesBase'>
							<img src='/images/Arrow2.png' alt='' />
						</Link>
						<Link to='/settings'>
							<img
								src='/images/Frame 106.png'
								alt=''
								width={'23px'}
								height={'24px'}
							/>
						</Link>
					</header>
					<div className='header-title margin-bottom-10 '>Projectors</div>

					<main className='main'>
						<div className='type-bases-texts'>
							<div className='type-bases-texts'>
								Characteristics: Projectors have a unique ability to perceive
								and see systems and dynamics. They can provide valuable insights
								and solutions, but often do not have a constant source of energy
								like generators.
							</div>
							<div className='type-bases-texts'>
								Strategy: The basic strategy of projectors is to "wait for an
								invitation" into processes and projects from those who have
								generator energy.
							</div>
							<div className='type-bases-title'> Famous projectors</div>
							<div className='type-bases-texts'>
								Maria Montessori (Maria Montessori): Italian educator and
								psychologist, creator of a method of learning that emphasizes
								the individual needs and pace of development of each child.
							</div>
							<div className='type-bases-texts'>
								Martin Luther King (Martin Luther King Jr.): Civil rights leader
								in the U.S., known for his ability to inspire social change.
							</div>
							<div className='type-bases-texts'>
								Mikhail Gorbachev (Mikhail Gorbachev): The last general
								secretary of the CPSU Central Committee and the last president
								of the USSR, who initiated reform and perestroika in the
								country.
							</div>
							<div className='type-bases-texts'>
								Joseph Rothschild (Joseph Rotblat): Nuclear physicist and Nobel
								Peace Prize winner who initiated the creation of the Nuclear
								Test Ban Organization (CTBTO).
							</div>
							<div className='type-bases-texts'>
								Jim Carrey (Jim Carrey): Renowned comedian and actor who has
								demonstrated his ability for inspirational comedic acting.
							</div>
						</div>
					</main>
				</div>

				<footer className='footer'>
					<div className='container'>
						<div className='footer-images'>
							<Link to='/profile'>
								<img
									src='/images/calculate.png'
									alt=''
									width={'54px'}
									height={'38px'}
								/>
							</Link>

							<Link to='/compatibility'>
								<img
									src='/images/compatibility.png'
									alt=''
									width={'54px'}
									height={'39px'}
								/>
							</Link>
							<Link to='/current'>
								<img
									src='/images/Insight.png'
									alt=''
									width={'33px'}
									height={'38px'}
								/>
							</Link>
							<Link to='/base'>
								<img
									src='/images/knowledge2.png'
									alt=''
									width={'46px'}
									height={'38px'}
								/>
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}
