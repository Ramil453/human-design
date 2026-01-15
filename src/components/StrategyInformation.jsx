import { Link } from "react-router-dom";

const StrategyInformation = () => {
  return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header margin-bottom-75'>
						<Link to='/description'>
							<img src='/images/Arrow2.png' alt='' />
						</Link>
						<div className='header-title'>Strategy</div>
						<img src='/images/Frame 106.png' alt='' />
					</header>
					<main className='main'>
						<div className='detailed-text'>
							<p className='paragraph'>
								Generators and Manifesting Generators have a Certain Sacral and
								due to this they have constant access to the source of life
								force. In the rave map of the Manifestor, Projector and
								Reflector, the Sacred Center is always not defined, and they,
								unlike Generators, are deprived of such access.
							</p>

							<p className='paragraph'>
								However, the Manifestor has access to the energy of one of the
								Centers-motors – through a direct connection of this Center with
								the Throat. Therefore, it, as well as both types of Generators,
								is considered an energy type. Projectors and Reflectors belong
								to non-energy Types.
							</p>

							<p className='paragraph'>
								Activation of energy Centers, which are characteristic of each
								of the four Types, endow the aura of this Type with its own
								specifics, and its energy structure acquires distinctive
								physical properties.
							</p>
						</div>
					</main>
				</div>
				<div className='information-footer'>
					<div className='container'>
						<div className='information-footer-title'>Key qualities</div>
						<div className='information-footer-description'>
							These are the qualities that are most characteristic of your
							profile
						</div>
						<div className='information-footer-buttons'>
							<button className='green-btn'>Partnership</button>
							<button className='red-btn'>Diplomacy</button>
							<button className='blue-btn'>Half-hearted</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StrategyInformation;