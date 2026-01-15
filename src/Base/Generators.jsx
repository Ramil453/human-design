import React from 'react'
import { Link } from 'react-router-dom'

export default function Generators() {
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
					<div className='header-title margin-bottom-10 '>Generators</div>

					<main className='main'>
						<div className='type-bases-texts'>
							<div className='type-bases-texts'>
								Characteristics: Generators have high levels of vitality and can
								work long hours immersed in their work. Their main goal is to
								find something they truly enjoy and find fulfillment in.
							</div>{' '}
							<div className='type-bases-texts'>
								Strategy: Generators' main strategy is to "listen to their own
								energy" and make decisions when they feel an inner "yes".
							</div>
							<div className='type-bases-title'> Famous Generators</div>
							<div className='type-bases-texts'>
								Joe Rogan (Joe Rogan): Podcaster, comedian and show host. Known
								for his high work capacity and energy to constantly shoot and
								create content.
							</div>
							<div className='type-bases-texts'>
								Brandon Stark from Game of Thrones: Although a fictional
								character, he can serve as an example of a generator in the
								context of Human Design. He demonstrates the ability to work
								faithfully on his purpose and projects.
							</div>
							<div className='type-bases-texts'>
								David Attenborough (David Attenborough): Well-known British
								naturalist and broadcaster. He has shown dedication to his work
								by producing many nature documentaries.
							</div>
							<div className='type-bases-texts'>
								Steve Jobs: Co-founder of Apple who has shown dedication to his
								ideas and projects over the years.
							</div>
							<div className='type-bases-texts'>
								Michelle Obama: Former First Lady of the United States, author
								and activist. She is known for her energy and dedication to her
								initiatives.
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
