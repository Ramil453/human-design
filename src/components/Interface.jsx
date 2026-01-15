import { Link } from 'react-router-dom';

const Interface = () => {
  return (
		<>
			<div className='container'>
				<main className='main'>
					<img
						src='/images/Ellipse 1 (1).png'
						alt=''
						className='background-img'
					/>
					<div className='text'>
						<h1 className='title'>
							Welcome to <br /> Human Design!
						</h1>
						<p className='description'>
							Human Design is the newest system
							<br /> for self discovery.
						</p>
					</div>
					<div className='img-wrapper'>
						<img src='/images/Mockup.png' alt='' width={'282px'} height={'375px'}/>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/explanation'>
							<button className='btn'>Start</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>10%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-10'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Interface;