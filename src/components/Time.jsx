import { Link } from 'react-router-dom'

const Time = ({ onInputChangeBirthTime }) => {

	const newDate = new Date();

	function addTime() {
		if (document.querySelector('.input-box').value)  localStorage.setItem('time', document.querySelector('.input-box').value)
		else localStorage.setItem(
			'time', '01:00')
	}

	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/birth'>
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
							Choose the time of <br /> your birth
						</h1>
						<p className='description margin-bottom-20'>
							Time is important in determining the <br /> signs of your home.
						</p>
					</div>
					<div className='img-wrapper'>
						<img src='/images/time.png' alt='' className='margin-bottom-20' width={'278px'} height={'201px'}/>
					</div>

					<div className='birth-input-wrapper'>
						<div className='input-title'>Time of birth</div>
						<input
							type='time'
							className='input-box margin-bottom-20'
							placeholder='Select time'
							onChange={onInputChangeBirthTime}
						/>
					</div>

					<div className='link-wrapper'>
						<Link to='/place' className='dont-now' onClick={addTime}>
							I don't know the time
						</Link>
					</div>

					<div className='indicator-wrapper'>
						<Link to='/place'>
							<button className='btn' onClick={addTime}>
								Next
							</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>90%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-90'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Time;
