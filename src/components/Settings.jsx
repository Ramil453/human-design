import { Link, useNavigate } from 'react-router-dom';
import '../styles/Settings.css'

const Settings = () => {

	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	
  return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header padding-top-35'>
						<img src='/images/Arrow2.png' alt='' onClick={goBack} />
					</header>
					<div className='header-title margin-bottom-85'>Settings</div>

					<main className='main'>
						<div className='settings-menu margin-bottom-90'>
							<div className='settings-menu-row'>
								<img
									src='/images/Vector (1).png'
									alt=''
									width={'20px'}
									height={'20px'}
								/>
								<div className='settings-menu-title'>Rate Us</div>
							</div>

							<div className='settings-menu-row'>
								<img
									src='/images/Page-1.png'
									alt=''
									width={'20px'}
									height={'20px'}
								/>
								<div className='settings-menu-title'>Contact Support</div>
							</div>

							<div className='settings-menu-row'>
								<img
									src='/images/share-circle-svgrepo-com-2 1.png'
									alt=''
									width={'23px'}
									height={'23px'}
								/>
								<div className='settings-menu-title'>Share App</div>
							</div>

							<div className='settings-menu-row'>
								<img
									src='/images/Vector (2).png'
									alt=''
									width={'20px'}
									height={'15px'}
								/>
								<div className='settings-menu-title'>Privacy policy</div>
							</div>
						</div>
						<div className='premium-button'>
							<Link to='/subscription'>
								<div className='btn-wrapper'>
									<button className='premium-btn'>Purchase Premium</button>
									<img
										src='/images/Vector (11).png'
										alt=''
										width={'14px'}
										height={'16px'}
									/>
								</div>
							</Link>
						</div>

						<div className='settings-footer-img'>
							<img src='/images/Layer_22.png' alt='' />
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default Settings;