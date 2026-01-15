import { Link } from "react-router-dom";

const Explanation_1 = () => {
  return (
		<>
			<div className='container'>
				<header className='header position'>
					<Link to='/explanation'>
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
							Find harmony in <br /> your life
						</h1>
						<p className='description margin-bottom-56'>
							By understanding your design, you will be <br /> able to make
							decisions that will bring you <br /> more confidence and peace of
							mind.
						</p>
					</div>
					<div className='img-wrapper'>
						<img
							src='/images/Иллюстрация1.png'
							alt=''
							className='margin-bottom-56'
							width={'335px'}
							height={'251px'}
						/>
					</div>
					<div className='indicator-wrapper'>
						<Link to='/explanation2'>
							<button className='btn'>Next</button>
						</Link>
						<div className='indicator'>
							<div className='indicator-percent'>30%</div>
							<div className='indicator-line'>
								<span className='parent-span'></span>
								<span className='children-span percent-30'></span>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Explanation_1;