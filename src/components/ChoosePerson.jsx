import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ChoosePerson = ({ onUpdate, onSecondUpdate }) => {

		const userName = localStorage.getItem('name')
		const userBirth = localStorage.getItem('birth')

		const secondUserName = localStorage.getItem('newName')
		const secondUserBirth = localStorage.getItem('newDate')

	const addFirstUser = () => {
		onUpdate({ userName, userBirth })
		
	}


	const addSecondUser = () => {
			onSecondUpdate({ secondUserName, secondUserBirth })
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
					<div className='header-title margin-bottom-85'>My calculations</div>

					<main className='main'>
						<div className='user-choice'>
							<div className='user-information' onClick={addFirstUser}>
								<Link to='/compatibility'>
									<div className='top-row'>
										<div className='user-name'>{userName}</div>
										<img src='/images/Arrow.png' alt='' />
									</div>
									<div className='down-row'>
										<div className='down-left-column'>
											<div className='user-birth'>{userBirth}</div>
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
								</Link>
							</div>

							<div className='user-information' onClick={addSecondUser}>
								<Link to='/compatibility'>
									<div className='top-row'>
										<div className='user-name'>{secondUserName}</div>
										<img src='/images/Arrow.png' alt='' />
									</div>
									<div className='down-row'>
										<div className='down-left-column'>
											<div className='user-birth'>{secondUserBirth}</div>
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
								</Link>
							</div>
						</div>
						<Link to='/new'>
							<div className='add-button'>
								<button className='add-btn'>Add</button>
							</div>
						</Link>
					</main>
				</div>
			</div>
		</>
	)
}

export default ChoosePerson
