import React from 'react'
import { Link } from 'react-router-dom'

export default function Manifestors() {
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
					<div className='header-title margin-bottom-10 '>Manifestors</div>

					<main className='main'>
						<div className='type-bases-texts'>
							<div className='type-bases-texts'>
								Characteristics: Manifestors have a strong inner impulse to act
								and are capable of starting new things. They can appear as
								initiators, but often prefer to act independently.
							</div>
							<div className='type-bases-texts'>
								Strategy: Manifestors' primary strategy is to "take the first
								step" and not wait for permission from others.
							</div>
							<div className='type-bases-title'> Famous Manifestors</div>
							<div className='type-bases-texts'>
								Alexander the Great (Alexander the Great): Famous military
								leader who was known for his ability to initiate military
								campaigns and conquer new lands.
							</div>
							<div className='type-bases-texts'>
								John F. Kennedy (John F. Kennedy): 35th President of the United
								States, known for his initiatives in civil rights, space
								programs, and foreign policy.
							</div>
							<div className='type-bases-texts'>
								Napoleon Bonaparte (Napoleon Bonaparte): French emperor known
								for his military campaigns and strategizing.
							</div>
							<div className='type-bases-texts'>
								Donald Trump (Donald Trump): 45th President of the United
								States, businessman and television personality known for his
								energy and initiative in politics.
							</div>
							<div className='type-bases-texts'>
								Richard Branson: British entrepreneur, founder of Virgin Group.
								He is known for his many initiatives in business and
								philanthropy.
							</div>
							<div className='type-bases-texts'>
								Steven Spielberg: Famous director and producer who has initiated
								many successful films and projects.
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