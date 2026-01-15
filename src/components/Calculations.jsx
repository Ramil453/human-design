import { Link } from 'react-router-dom';
import '../styles/Calculation.css'

const Calculations = () => {

	const name = localStorage.getItem('name')
	const date = localStorage.getItem('birth')

	const newPersonName = localStorage.getItem('newName')
	const newPersonDate = localStorage.getItem('newDate')

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
					<div className='header-title margin-bottom-85'>My calculations</div>

					<main className='main'>
						<div className='user-choice'>
							<Link to='/profile'>
								<div className='user-information'>
									<div className='top-row'>
										<div className='user-name'>{name}</div>
										{/* <img src='/images/Arrow.png' alt='' /> */}
									</div>
									<div className='down-row'>
										<div className='down-left-column'>
											<div className='user-birth'>{date}</div>
											<div className='user-characteristic'>
												PRL/<span className='color-red'>DLR</span>
											</div>
										</div>
										<div className='down-right-column'>
											<div className='user-info-numbers'>
												Г 5/<span className='color-red'>1</span>
											</div>
											<div className='user-character'>
												The Heretic-{' '}
												<span className='color-red'>Researcher</span>
											</div>
										</div>
									</div>
								</div>
							</Link>

							<Link to='/profile2'>
								<div className='user-information'>
									<div className='top-row'>
										<div className='user-name'>{newPersonName}</div>
										{/* <img src='/images/Arrow.png' alt='' /> */}
									</div>
									<div className='down-row'>
										<div className='down-left-column'>
											<div className='user-birth'>{newPersonDate}</div>
											<div className='user-characteristic'>
												PRL/<span className='color-red'>DLR</span>
											</div>
										</div>
										<div className='down-right-column'>
											<div className='user-info-numbers'>
												Г 5/<span className='color-red'>1</span>
											</div>
											<div className='user-character'>
												The Heretic-{' '}
												<span className='color-red'>Researcher</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<Link to='/new'>
							<div className='add-button'>
								<button className='add-btn'>Add</button>
							</div>
						</Link>
					</main>
				</div>
				<footer className='footer adaptive-footer'>
					<div className='container'>
						<div className='footer-images'>
							<Link to='/profile'>
								<img
									src='/images/calculate2.png'
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
									src='/images/knowledge.png'
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

export default Calculations;