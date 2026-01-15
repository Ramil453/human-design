import { Link } from 'react-router-dom'
import '../styles/Compatibility.css'

const Compatibility = ({ userData, secondUserData, onSharedName, onSharedSecondName }) => {

	let userInfo = (
		<>
			<div className='top-row'>
				<div className='user-name'>{userData.userName}</div>
			</div>
			<div className='down-row'>
				<div className='down-left-column'>
					<div className='user-birth'>{userData.userBirth}</div>
					<div className='user-characteristic'>
						PRL/<span className='color-red'>DLR</span>
					</div>
				</div>
				<div className='down-right-column'>
					<div className='user-info-numbers'>
						Г 5/<span className='color-red'>1</span>
					</div>
					<div className='user-character'>
						The Heretic- <span className='color-red'>Researcher</span>
					</div>
				</div>
			</div>
		</>
	)

	let secondUserInfo = (
		<>
			<div className='top-row'>
				<div className='user-name'>{secondUserData.secondUserName}</div>
			</div>
			<div className='down-row'>
				<div className='down-left-column'>
					<div className='user-birth'>{secondUserData.secondUserBirth}</div>
					<div className='user-characteristic'>
						PRL/<span className='color-red'>DLR</span>
					</div>
				</div>
				<div className='down-right-column'>
					<div className='user-info-numbers'>
						Г 5/<span className='color-red'>1</span>
					</div>
					<div className='user-character'>
						The Heretic- <span className='color-red'>Researcher</span>
					</div>
				</div>
			</div>
		</>
	)

	if (userData.name === '' && userData.birthday === '') {
		userInfo = (
			<>
				<div className='choose-person-img'>
					<img src='/images/plus-circle.png' alt='' /> Choose person
				</div>
			</>
		)
	}

	if (
		secondUserData.secondName === '' &&
		secondUserData.secondBirthday === ''
	) {
		secondUserInfo = (
			<>
				<div className='choose-person-img'>
					<img src='/images/plus-circle.png' alt='' /> Choose person
				</div>
			</>
		)
	}
	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<div className='calculation-wrapper padding-top-35'>
						<Link to='/settings'>
							<img src='/images/Frame 106.png' alt='' width={'23px'} height={'24px'}/>
						</Link>
					</div>
					<div className='header-title margin-bottom-62'>Compatibility</div>

					<main className='main'>
						<div className='compatibility-description'>
							Choose 2 profiles to see Compatibility between then
						</div>
						<div className='choose-person'>
							<div className='first-person'>
								<div className='choose-person-title'>1st person</div>
								<div className='choose-person-card'>
									<Link to='/choose'>
										<div className='user-information'>{userInfo}</div>
									</Link>
								</div>
							</div>

							<div className='second-person'>
								<div className='choose-person-title'>2st person</div>
								<Link to='/choose'>
									<div className='user-information'>{secondUserInfo}</div>
								</Link>
							</div>
						</div>
						<Link to='/comparison'>
							<button className='compatibility-btn'>
								Сalculate Compatibility
							</button>
						</Link>
					</main>
				</div>
				{/* <div className='footer-img compatibility-footer-img'> */}
				<footer className='footer adaptive-footer compatibility-adaptive-footer'>
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
									src='/images/compatibility2.png'
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
				{/* </div> */}
			</div>
		</>
	)
}

export default Compatibility
