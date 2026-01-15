import { Link } from 'react-router-dom'
import '../styles/Base.css'

const TypesBase = () => {
	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header'>
						<Link to='/base'>
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
					<div className='header-title margin-bottom-56 '>Type</div>

					<main className='main'>
						<div className='base-cards'>
							<Link to='/generators'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Generators</div>
										<div className='base-card-description'>
											Characteristics: Generators have high...
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/manifestors'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Manifestors</div>
										<div className='base-card-description'>
											Characteristics: Manifestors have a strong...
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/projectors'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Projectors</div>
										<div className='base-card-description'>
											Characteristics: Projectors have a unique...
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/reflectors'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>Reflectors</div>
										<div className='base-card-description'>
											Characteristics: Reflectors are very...
										</div>
									</div>
									<img
										src='/images/Arrow.png'
										alt=''
										className='base-card-img'
									/>
								</div>
							</Link>

							<Link to='/manifestingGenerators'>
								<div className='base-card'>
									<div className='base-card-text'>
										<div className='base-card-title'>
											Manifesting generators
										</div>
										<div className='base-card-description'>
											Characteristics: Manifesting Generators have...
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

export default TypesBase
