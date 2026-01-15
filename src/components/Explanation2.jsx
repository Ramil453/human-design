import { Link } from 'react-router-dom'

const Explanation_2 = () => {
	return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/explanation1'>
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
							Find all the answers <br /> to the questions
						</h1>
						<p className='description margin-bottom-42'>
							Human Design helps living in sync <br /> with your true nature.
						</p>
					</div>
					<div className='img-wrapper'>
						<img
							src='/images/Mockup (4).png'
							alt=''
							className='margin-bottom-56'
							width={'327px'}
							height={'289px'}
						/>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/purpose'>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>40%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-40'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Explanation_2;
