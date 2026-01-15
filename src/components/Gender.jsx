import { Link, useNavigate } from 'react-router-dom'

const Gender = () => {
	let current = 0

	function checkCheckbox(e) {
		const target = e.currentTarget
		const input = e.target.parentNode

		if (target.innerHTML === '') {
			current++
			console.log(current)
			if (current == 1) {
				target.innerHTML = '✓'
				target.style.background = '#2C516C'
				input.style.background = '#2C516C0D'
				input.style.border = '1px solid #2C516C'
				
			}
		} else {
			target.innerHTML = ''
			target.style.background = '#fff'
			input.style.background = '#fff'
			input.style.border = '1px solid #2C516C4D'
			current = 0;
			console.log(current)
		}
	}

	const navigate = useNavigate()

	const handleLinkClick = e => {
		if (!current == 0) {
			navigate('#')
		} else {
			e.preventDefault()
		}
	}

	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/name'>
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
						<h1 className='title margin-bottom-56'>What's your gender?</h1>
						<p className='description margin-bottom-36'>
							This will help unlock the balance of <br /> your masculine and
							feminine energy.
						</p>
					</div>
					<div className='checkbox-wrapper margin-bottom-130 adaptive-margin'>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/tabler_gender-female.png'
									alt=''
									className='checkbox-img'
									width={'31px'}
									height={'31px'}
								/>
								<div className='checkbox-text'>Female</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/tabler_gender-male.png'
									alt=''
									className='checkbox-img'
									width={'31px'}
									height={'31px'}
								/>
								<div className='checkbox-text'>Male</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
						<div className='checkbox-row'>
							<div className='checkbox-left'>
								<img
									src='/images/tabler_gender-transgender.png'
									alt=''
									className='checkbox-img'
									width={'31px'}
									height={'31px'}
								/>
								<div className='checkbox-text'>Other</div>
							</div>

							<div className='input' onClick={checkCheckbox}></div>
						</div>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/birth' onClick={handleLinkClick}>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>70%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-70'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Gender
