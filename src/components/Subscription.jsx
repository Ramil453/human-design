import '../styles/Subscription.css'
import { Link } from 'react-router-dom';

const Subscription = () => {

	function showOffer () {
		document.querySelector('.front-ground').style.background = '#00000088';
		document.querySelector('.offer').style.display = 'block'
	}

	function hideOffer () {
		document.querySelector('.front-ground').style.background = 'transparent'
		document.querySelector('.offer').style.display = 'none'
	}

  return (
		<>
			<div className='front-ground'>
				<main className='main'>
					<img
						src='/images/Ellipse 1 (1).png'
						alt=''
						className='background-img'
					/>
					{/* <div className='container'> */}
					<div className='main-images' onClick={hideOffer}>
						<img src='/images/23.png' alt='' className='girl-img' />
						<Link to='/settings'>
							<img src='/images/Close.png' alt='' className='close-img' />
						</Link>
					</div>
					{/* </div> */}

					<div className='container'>
						<div className='subscription-title' onClick={hideOffer}>
							Try it for 3 days for free
						</div>
						<div className='subscription-advantages' onClick={hideOffer}>
							<div className='advantage'>
								<img
									src='/images/Group0.png'
									alt=''
									width={'30px'}
									height={'26px'}
								/>
								<div className='advantage-title'>Your personal Rave Card</div>
							</div>
							<div className='advantage'>
								<img
									src='/images/Group (1).png'
									alt=''
									width={'29px'}
									height={'26px'}
								/>
								<div className='advantage-title'>Discover the right way</div>
							</div>
							<div className='advantage'>
								<img
									src='/images/Group (2).png'
									alt=''
									width={'26px'}
									height={'26px'}
								/>
								<div className='advantage-title'>
									Check astrology compatibility
								</div>
							</div>
							<div className='advantage'>
								<img
									src='/images/Group (3).png'
									alt=''
									width={'26px'}
									height={'26px'}
								/>
								<div className='advantage-title'>
									Planetary transits for you
								</div>
							</div>
							<div className='advantage'>
								<img
									src='/images/Group (4).png'
									alt=''
									width={'27px'}
									height={'26px'}
								/>
								<div className='advantage-title'>Get daily affirmation</div>
							</div>
						</div>
						<div className='subscription-try'>
							Try 3 days free, then <span className='weight-600'>$299</span>/
							year
						</div>
						<div className='subscription-try-description'>
							Subscription can be canceled at any time
						</div>
						<button className='try-btn'>Try it for free and subscribe</button>
						<div className='all-subscription' onClick={showOffer}>
							See all subscriptions
						</div>
						<div className='subscription-footer'>
							<div className='terms'>Terms of Use</div>
							<div className='privacy'>Privacy Police</div>
						</div>
					</div>
				</main>
			</div>

			<div className='offer'>
				<div className='container'>
					<div className='offer-card'>
						<div className='offer-title'>3 month</div>
						<div className='offer-price'>
							$199 for three months / Auto-renewable
						</div>
					</div>
					<div className='year-offer offer-card'>
						<div className='year-offer-title'>1 year</div>
						<div className='year-offer-price'>
							3-day free trial, then $299 / year
						</div>
					</div>
					<div className='offer-card'>
						<div className='offer-title'>1 week</div>
						<div className='offer-price'>
							$44.9 for the week / Auto-renewable
						</div>
					</div>
					<div className='subscription-try'>
						Try 3 days free, then <span className='weight-600'>$299</span>/ year
					</div>
					<div className='subscription-try-description'>
						Subscription can be canceled at any time
					</div>
					<button className='try-btn'>Try it for free and subscribe</button>
				</div>
			</div>
		</>
	)
}

export default Subscription;