import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Birth = ({onInputChangeAge}) => {

	  const [birthday, setBirthday] = useState('')
		const navigate = useNavigate()

		const handleInputChange = e => {
			setBirthday(e.target.value)
		}

		const handleLinkClick = e => {
			if (!birthday) {
				e.preventDefault()
				// e.preventDefault()
			} else {
				// navigate('/time')
				navigate('#')
		localStorage.setItem('birth', document.querySelector('.input-box').value)


			}
		}



	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/gender'>
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
							Choose your date of <br /> birth
						</h1>
						<p className='description margin-bottom-42'>
							This is very important information for <br /> making your map.
						</p>
					</div>
					<div className='img-wrapper'>
						<img
							src='/images/Group.png'
							alt=''
							className='margin-bottom-20'
							width={'277px'}
							height={'204px'}
						/>
					</div>

					<div className='birth-input-wrapper'>
						<div className='input-title'>Date of birth</div>
						<input
							type='date'
							className='input-box'
							placeholder='Select time'
							value={birthday}
							onChange={(onInputChangeAge, handleInputChange)}
						/>
					</div>

					<div className='indicator-wrapper'>
						<Link to='/time' onClick={handleLinkClick}>
								<button className='btn'>
								Next
							</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>80%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-80'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Birth
