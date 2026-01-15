import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Name = ({ onInputChange }) => {
	const [data, setData] = useState('')
	const navigate = useNavigate()

	const handleInputChange = e => {
		setData(e.target.value)
	}

	const handleLinkClick = e => {
		if (!data) {
			e.preventDefault()
		} else {
			navigate('#')
			localStorage.setItem('name', document.querySelector('.name-input').value)
		}
	}

	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/purpose'>
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
						<h1 className='title margin-bottom-56'>What's your Name?</h1>
						<p className='description margin-bottom-90'>
							Let's get to know each other better, <br /> tell me your name.
						</p>
					</div>

					<div className='input-wrapper'>
						<input
							type='text'
							placeholder='Your name'
							className='name-input'
							value={data}
							onChange={(onInputChange, handleInputChange)}
						/>
					</div>

					<div className='indicator-wrapper'>
						<Link to='/gender' onClick={handleLinkClick}>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>60%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-60'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Name
