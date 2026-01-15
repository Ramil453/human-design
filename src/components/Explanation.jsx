import { Link } from "react-router-dom";

const Explanation = () => {
  return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/'>
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
							Begin to understand
							<br /> yourself better
						</h1>
						<p className='description margin-bottom-20'>
							Take the first step toward a life that <br /> better aligns with
							your inner self.
						</p>
					</div>
					<div className='img-wrapper'>
						<img
							src='/images/Иллюстрация.png'
							alt=''
							className='margin-bottom-42'
							width={'335px'}
							height={'319px'}
						/>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/explanation1'>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>20%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-20'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Explanation;