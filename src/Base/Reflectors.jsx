import React from 'react'
import { Link } from 'react-router-dom'

export default function Reflectors() {
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
					<div className='header-title margin-bottom-10 '>Reflectors</div>

					<main className='main'>
						<div className='type-bases-texts'>
							<div className='type-bases-texts'>
								Characteristics: Reflectors are very rare, representing only
								about 1% of the population. Their energy is very sensitive to
								their environment, and they can reflect the overall dynamics of
								the community they are in. Strategy: The main strategy of
								Reflectors is to "give themselves time" before making important
								decisions and commitments.
							</div>
							<div className='type-bases-title'>Known Reflectors</div>
							<div className='type-bases-texts'>
								Unfortunately, Human Design does not have an official list of
								"known reflectors" as reflectors are extremely rare and only
								make up about 1% of the population.
							</div>
							<div className='type-bases-texts'>
								Anna Blinova (Anna Blinova): This is a fictional character from
								the popular book Design Human Engineering by Richard Band. There
								are many examples of reflectors in this book, and Anna Blinkova
								is one such character.
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
