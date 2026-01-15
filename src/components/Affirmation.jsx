import { Link } from 'react-router-dom'
import '../styles/Affirmation.css'
import SimpleImageSlider from 'react-simple-image-slider'

const Affirmation = () => {



	 const sliderImages = [
			{
				url: '/images/card1.png',
			},
			{
				url: '/images/card2.png',
			},
			{
				url: '/images/card3.png',
			},
		]
	
	
	
	
	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header'>
						<div className='current-wrapper'>
							<Link to='/settings'>
								<img
									src='/images/Frame 106.png'
									alt=''
									width={'23px'}
									height={'24px'}
								/>
							</Link>
						</div>
					</header>
					<div className='header-title margin-bottom-10'>Affirmations</div>
					<div className='header-title-description margin-bottom-32'>
						Check out the daily setup for you, based on the position of the
						planets
					</div>
					<div className='slider'>
						<Link to='/current' className='grey-line'>
							<span></span>
						</Link>
						<span className='blue-line'></span>
					</div>

					<main className='main'>
						<div className='main-affirmation-background'>
							<div className='affirmation-title'>Avoid formal invitations!</div>
							<div className='slider'>
								<SimpleImageSlider
									width={356}
									height={161}
									images={sliderImages}
									showNavs={true}
									navSize={30}
									navMargin={10}
									bgColor='fff'
								/>
							</div>
						</div>
						<div className='affirmation-description'>
							Your strategy is to wait for invitations. Quality invitations are
							always personal. They personally call you, not for the company.
							Not every invitation needs to be accepted, formal ones can be
							rejected immediately. So you stop wasting energy on something that
							is not worth it.
						</div>
					</main>
				</div>
				<footer className='footer'>
					<div className='container'>
						<div className='footer-images'>
							<img
								src='/images/calculate.png'
								alt=''
								width={'54px'}
								height={'38px'}
							/>
							<Link to='/compatibility'>
								<img
									src='/images/compatibility.png'
									alt=''
									width={'54px'}
									height={'39px'}
								/>
							</Link>
							<Link to='/current'>
								<img
									src='/images/Insight2.png'
									alt=''
									width={'33px'}
									height={'38px'}
								/>
							</Link>
							<Link to='/base'>
								<img
									src='/images/knowledge.png'
									alt=''
									width={'46px'}
									height={'38px'}
								/>
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Affirmation
