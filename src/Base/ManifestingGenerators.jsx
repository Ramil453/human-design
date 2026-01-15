import React from 'react'
import { Link } from 'react-router-dom'

export default function ManifestingGenerators() {
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
					<div className='header-title margin-bottom-10 '>
						Manifesting Generators
					</div>

					<main className='main'>
						<div className='type-bases-texts'>
							<div className='type-bases-texts'>
								Characteristics: Manifesting Generators have a high level of
								energy, similar to generators. They can be productive, have long
								term stamina, and often feel the satisfaction of working on
								something specific. Unlike pure generators, manifest generators
								have a manifestor element, which allows them to initiate certain
								actions or processes in their lives.
							</div>
							<div className='type-bases-texts'>
								Strategy: Reflectors' main strategy is to listen to their
								reactions and act on inspiration, but they also have the ability
								to initiate change and action in their lives as manifestors.
							</div>
							<div className='type-bases-title'>Famous Manifestors</div>
							<div className='type-bases-texts'>
								Oprah Winfrey (Oprah Winfrey): Oprah is known for her energy,
								dedication to her work, and ability to invest in her projects
								and initiatives for a long time.
							</div>
							<div className='type-bases-texts'>
								Elon Musk (Elon Musk): Elon Musk, an entrepreneur and visionary,
								often initiates innovative projects in technology and space. He
								has a clear passion and energy in realizing his ideas.
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
