import { Link, useNavigate } from 'react-router-dom'

const Purpose = () => {

	let current = 0

	function checkCheckbox(e) {
		const target = e.currentTarget
		const input = e.target.parentNode

		if (target.innerHTML === '') {
			target.innerHTML = '✓'
			target.style.background = '#2C516C'
			input.style.background = '#2C516C0D'
			input.style.border = '1px solid #2C516C'
			current++
		} else {
			target.innerHTML = ''
			target.style.background = '#fff'
			input.style.background = '#fff'
			input.style.border = '1px solid #2C516C4D'
			current--
		}
		
	}

	const navigate = useNavigate()

	const handleLinkClick = e => {
		if (current > 0 && current <= 3) {
			navigate('#')
		} else {
			e.preventDefault()
		}
	}
	
	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/explanation2'>
						<img src='/images/Arrow22.png' alt='' />
					</Link>
				</header>
				<main className='main'>
					<img
						src='/images/Ellipse 1 (1).png'
						alt=''
						className='background-img'
					/>
					<div className='text'>
						<h1 className='title'>
							What is your life goal <br /> at the moment?
						</h1>
						<p className='description margin-bottom-10'>
							Choose up to 3. This will help us <br /> personalize your content
							plan.
						</p>
					</div>
					<div className='checkbox-wrapper'>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/1.png'
									alt=''
									className='checkbox-img'
									width={'32px'}
									height={'32px'}
								/>
								<div className='checkbox-text'>Find my true life purpose</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/3.png'
									alt=''
									className='checkbox-img'
									width={'26px'}
									height={'30px'}
								/>
								<div className='checkbox-text'>Improve relationship</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/6.png'
									alt=''
									className='checkbox-img clock-icon'
									width={'19px'}
									height={'26px'}
								/>
								<div className='checkbox-text'>
									Get valuable pointers for life
								</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/4.png'
									alt=''
									className='checkbox-img'
									width={'31px'}
									height={'32px'}
								/>
								<div className='checkbox-text'>Enchance my working life</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/2.png'
									alt=''
									className='checkbox-img'
									width={'31px'}
									height={'29px'}
								/>
								<div className='checkbox-text'>Discover my hidden talents</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/5.png'
									alt=''
									className='checkbox-img'
									width={'25px'}
									height={'29px'}
								/>
								<div className='checkbox-text'>
									Get advice for my everyday life
								</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/name' onClick={handleLinkClick}>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>50%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-50'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Purpose
