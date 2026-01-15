import { Link } from 'react-router-dom'
import '../styles/Base.css'
import { useEffect } from 'react'

const Base = () => {

	  useEffect(() => {
			// Восстанавливаем позицию прокрутки при монтировании компонента
			const savedScrollPosition = localStorage.getItem('scrollPosition')
			if (savedScrollPosition) {
				window.scrollTo(0, parseInt(savedScrollPosition, 10))
			}

			// Функция для сохранения позиции прокрутки
			const saveScrollPosition = () => {
				localStorage.setItem('scrollPosition', window.scrollY)
			}

			// Добавляем обработчик события перед выгрузкой страницы
			window.addEventListener('beforeunload', saveScrollPosition)

			// Убираем обработчик события при размонтировании компонента

		}, [])
	
	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<div className='calculation-wrapper padding-top-35'>
						<Link to='/settings'>
							<img
								src='/images/Frame 106.png'
								alt=''
								width={'23px'}
								height={'24px'}
							/>
						</Link>
					</div>
					<div className='header-title margin-bottom-56 '>Knowledge base</div>

					<main className='main'>
						<div className='base-text'>
							Today the Human Design system can be called the most interesting
							and relevant tool for self-discovery. Your rave card will tell you
							about what is inherent in you by nature. <br /> You will recognize
							your strengths and growth zones, see your innate talents and
							predispositions. <br /> You will understand in what direction to
							move to make life full of colors and feel happy as a person.{' '}
							<br />
							But in order to navigate this knowledge well, you need to learn
							basic terms, and the basic elements that make up your rave map.
							<br /> By learning them, you can dive into researching yourself
							and your surroundings. Thanks to our app, you will have access to
							a Knowledge Base that will be updated with new useful information.
							We hope it will help you learn new knowledge as easily and quickly
							as possible!
						</div>
						<div className='base-cards'>
							<Link to='/typesBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Types</div>
										<div className='base-card-description'>
											Uniqueness of personality
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/gatesBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Gates</div>
										<div className='base-card-description'>
											Aspects of the inner qualities and potential of the
											personality
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/centresBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Centres</div>
										<div className='base-card-description'>Energy flow</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/channelsBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Channels</div>
										<div className='base-card-description'>Energy lines</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/profilesBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Profiles</div>
										<div className='base-card-description'>
											Numerical combinations that describe a person`s character
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/internalAuthorities'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Internal Authorities</div>
										<div className='base-card-description'>
											Methods of decision making
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/planetsBase'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Planets</div>
										<div className='base-card-description'>
											Influence on energy flow
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>
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
		</>
	)
}

export default Base
