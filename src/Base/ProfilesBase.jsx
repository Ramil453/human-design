import { Link } from 'react-router-dom'
import '../styles/Bases.css'
import { useEffect } from 'react'

const Profiles = () => {
	function openArrow1() {
		document.querySelector('.arrow-top1').style.display = 'block'
		document.querySelector('.arrow-down1').style.display = 'none'
		document.querySelector('.information-description').style.display = 'none'
		document.querySelector(
			'.additional-information-description'
		).style.display = 'block'
	}

	function closeArrow1() {
		document.querySelector('.arrow-down1').style.display = 'block'
		document.querySelector('.arrow-top1').style.display = 'none'
		document.querySelector('.information-description').style.display = 'block'
		document.querySelector(
			'.additional-information-description'
		).style.display = 'none'
	}

	function openArrow3() {
		document.querySelector('.arrow-top3').style.display = 'block'
		document.querySelector('.arrow-down3').style.display = 'none'
		document.querySelector('.information-description3').style.display = 'none'
		document.querySelector(
			'.additional-information-description3'
		).style.display = 'block'
	}

	function closeArrow3() {
		document.querySelector('.arrow-down3').style.display = 'block'
		document.querySelector('.arrow-top3').style.display = 'none'
		document.querySelector('.information-description3').style.display = 'block'
		document.querySelector(
			'.additional-information-description3'
		).style.display = 'none'
	}


	function openArrow5() {
		document.querySelector('.arrow-top5').style.display = 'block'
		document.querySelector('.arrow-down5').style.display = 'none'
		document.querySelector('.information-description5').style.display = 'none'
		document.querySelector(
			'.additional-information-description5'
		).style.display = 'block'
	}

	function closeArrow5() {
		document.querySelector('.arrow-down5').style.display = 'block'
		document.querySelector('.arrow-top5').style.display = 'none'
		document.querySelector('.information-description5').style.display = 'block'
		document.querySelector(
			'.additional-information-description5'
		).style.display = 'none'
	}

	function openArrow6() {
		document.querySelector('.arrow-top6').style.display = 'block'
		document.querySelector('.arrow-down6').style.display = 'none'
		document.querySelector('.information-description6').style.display = 'none'
		document.querySelector(
			'.additional-information-description6'
		).style.display = 'block'
	}

	function closeArrow6() {
		document.querySelector('.arrow-down6').style.display = 'block'
		document.querySelector('.arrow-top6').style.display = 'none'
		document.querySelector('.information-description6').style.display = 'block'
		document.querySelector(
			'.additional-information-description6'
		).style.display = 'none'
	}

	function openArrow7() {
		document.querySelector('.arrow-top7').style.display = 'block'
		document.querySelector('.arrow-down7').style.display = 'none'
		document.querySelector('.information-description7').style.display = 'none'
		document.querySelector(
			'.additional-information-description7'
		).style.display = 'block'
	}

	function closeArrow7() {
		document.querySelector('.arrow-down7').style.display = 'block'
		document.querySelector('.arrow-top7').style.display = 'none'
		document.querySelector('.information-description7').style.display = 'block'
		document.querySelector(
			'.additional-information-description7'
		).style.display = 'none'
	}

	function openArrow8() {
		document.querySelector('.arrow-top8').style.display = 'block'
		document.querySelector('.arrow-down8').style.display = 'none'
		document.querySelector('.information-description8').style.display = 'none'
		document.querySelector(
			'.additional-information-description8'
		).style.display = 'block'
	}

	function closeArrow8() {
		document.querySelector('.arrow-down8').style.display = 'block'
		document.querySelector('.arrow-top8').style.display = 'none'
		document.querySelector('.information-description8').style.display = 'block'
		document.querySelector(
			'.additional-information-description8'
		).style.display = 'none'
	}

	function openArrow9() {
		document.querySelector('.arrow-top9').style.display = 'block'
		document.querySelector('.arrow-down9').style.display = 'none'
		document.querySelector('.information-description9').style.display = 'none'
		document.querySelector(
			'.additional-information-description9'
		).style.display = 'block'
	}

	function closeArrow9() {
		document.querySelector('.arrow-down9').style.display = 'block'
		document.querySelector('.arrow-top9').style.display = 'none'
		document.querySelector('.information-description9').style.display = 'block'
		document.querySelector(
			'.additional-information-description9'
		).style.display = 'none'
	}

	function openArrow10() {
		document.querySelector('.arrow-top10').style.display = 'block'
		document.querySelector('.arrow-down10').style.display = 'none'
		document.querySelector('.information-description10').style.display = 'none'
		document.querySelector(
			'.additional-information-description10'
		).style.display = 'block'
	}

	function closeArrow10() {
		document.querySelector('.arrow-down10').style.display = 'block'
		document.querySelector('.arrow-top10').style.display = 'none'
		document.querySelector('.information-description10').style.display = 'block'
		document.querySelector(
			'.additional-information-description10'
		).style.display = 'none'
	}

	function openArrow11() {
		document.querySelector('.arrow-top11').style.display = 'block'
		document.querySelector('.arrow-down11').style.display = 'none'
		document.querySelector('.information-description11').style.display = 'none'
		document.querySelector(
			'.additional-information-description11'
		).style.display = 'block'
	}

	function closeArrow11() {
		document.querySelector('.arrow-down11').style.display = 'block'
		document.querySelector('.arrow-top11').style.display = 'none'
		document.querySelector('.information-description11').style.display = 'block'
		document.querySelector(
			'.additional-information-description11'
		).style.display = 'none'
	}

	function openArrow12() {
		document.querySelector('.arrow-top12').style.display = 'block'
		document.querySelector('.arrow-down12').style.display = 'none'
		document.querySelector('.information-description12').style.display = 'none'
		document.querySelector(
			'.additional-information-description12'
		).style.display = 'block'
	}

	function closeArrow12() {
		document.querySelector('.arrow-down12').style.display = 'block'
		document.querySelector('.arrow-top12').style.display = 'none'
		document.querySelector('.information-description12').style.display = 'block'
		document.querySelector(
			'.additional-information-description12'
		).style.display = 'none'
	}

	function openArrow13() {
		document.querySelector('.arrow-top13').style.display = 'block'
		document.querySelector('.arrow-down13').style.display = 'none'
		document.querySelector('.information-description13').style.display = 'none'
		document.querySelector(
			'.additional-information-description13'
		).style.display = 'block'
	}

	function closeArrow13() {
		document.querySelector('.arrow-down13').style.display = 'block'
		document.querySelector('.arrow-top13').style.display = 'none'
		document.querySelector('.information-description13').style.display = 'block'
		document.querySelector(
			'.additional-information-description13'
		).style.display = 'none'
	}

	function openArrow14() {
		document.querySelector('.arrow-top14').style.display = 'block'
		document.querySelector('.arrow-down14').style.display = 'none'
		document.querySelector('.information-description14').style.display = 'none'
		document.querySelector(
			'.additional-information-description14'
		).style.display = 'block'
	}

	function closeArrow14() {
		document.querySelector('.arrow-down14').style.display = 'block'
		document.querySelector('.arrow-top14').style.display = 'none'
		document.querySelector('.information-description14').style.display = 'block'
		document.querySelector(
			'.additional-information-description14'
		).style.display = 'none'
	}

	useEffect(() => {
		document.body.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header'>
						<Link to='/base'>
							<img src='/images/Arrow2.png' alt='' />
						</Link>
						<img
							src='/images/Frame 106.png'
							alt=''
							width={'23px'}
							height={'24px'}
						/>
					</header>
					<div className='header-title margin-bottom-56'>Profiles</div>

					<main className='main'>
						<div className='information-block'>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>
										1/3 - Investigator/Martyr
									</div>
									<div className='information-description'>
										This profile is characterized by...
									</div>
									<div className='additional-information-description information-description'>
										This profile is characterized by an interest in exploring
										and understanding the world, as well as the ability to be
										able to overcome challenges. A person with this profile may
										face obstacles, but comes to transformation.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down1'
										onClick={openArrow1}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top1'
										onClick={closeArrow1}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-strategy'>
								<div className='information-text'>
									<div className='information-title'>
										1/4 - Investigator/Opportunist
									</div>
									<div className='information-description information-description3'>
										This profile combines a desire for...
									</div>
									<div className='additional-information-description3 information-description'>
										This profile combines a desire for understanding and
										exploration with the ability to provide opportunities and
										resources to others. A person with this profile may be open
										to new knowledge and have the ability to share their
										resources.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down3'
										onClick={openArrow3}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top3'
										onClick={closeArrow3}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-inner'>
								<div className='information-text'>
									<div className='information-title'>
										2/4 - Connector/Guardian
									</div>
									<div className='information-description information-description5'>
										This profile combines a desire...
									</div>
									<div className='additional-information-description5 information-description'>
										This profile combines a desire to create harmony and
										connections with a desire to provide opportunities for
										others. A person with this profile can be a good facilitator
										and support for others.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down5'
										onClick={openArrow5}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top5'
										onClick={closeArrow5}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-definition'>
								<div className='information-text'>
									<div className='information-title'>
										2/5 - Connector/Knowledge
									</div>
									<div className='information-description information-description6'>
										This profile is characterized...
									</div>
									<div className='additional-information-description6 information-description'>
										This profile is characterized by a desire to create harmony
										and the ability to apply knowledge. A person with this
										profile can be wise and possess deep knowledge.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down6'
										onClick={openArrow6}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top6'
										onClick={closeArrow6}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-profile'>
								<div className='information-text'>
									<div className='information-title'>
										3/5 - Master/Knowledge
									</div>
									<div className='information-description information-description7'>
										This profile combines a desire...
									</div>
									<div className='additional-information-description7 information-description'>
										This profile combines a desire to overcome challenges with
										the ability to apply one's own knowledge and experience. A
										person with this profile may be capable of overcoming
										challenges and have a deep knowledge.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down7'
										onClick={openArrow7}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top7'
										onClick={closeArrow7}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-incarnation'>
								<div className='information-text'>
									<div className='information-title'>3/6 - Master/Power</div>
									<div className='information-description information-description8'>
										This profile combines the ability...
									</div>
									<div className='additional-information-description8 information-description'>
										This profile combines the ability to overcome challenges
										with a desire to set an example for others. A person with
										this profile can be an inspirational leader.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down8'
										onClick={openArrow8}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top8'
										onClick={closeArrow8}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-signature'>
								<div className='information-text'>
									<div className='information-title'>
										4/6 - Guardian/Role Model
									</div>
									<div className='information-description information-description9'>
										This profile combines the ability...
									</div>
									<div className='additional-information-description9 information-description'>
										This profile combines the ability to provide opportunities
										with the desire to be an example to others. A person with
										this profile can be a supportive leader.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down9'
										onClick={openArrow9}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top9'
										onClick={closeArrow9}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-digestion'>
								<div className='information-text'>
									<div className='information-title'>
										4/1 - Opportunist/Investigator
									</div>
									<div className='information-description information-description10'>
										This profile combines the ability...
									</div>
									<div className='additional-information-description10 information-description'>
										This profile combines the ability to provide opportunities
										with an interest in exploring and understanding the world. A
										person with this profile can be entrepreneurial and a good
										researcher.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down10'
										onClick={openArrow10}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top10'
										onClick={closeArrow10}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-design'>
								<div className='information-text'>
									<div className='information-title'>
										Knowledgeable/Investigator
									</div>
									<div className='information-description information-description11'>
										This profile is characterized...
									</div>
									<div className='additional-information-description11 information-description'>
										This profile is characterized by the ability to apply
										knowledge with an interest in learning and understanding the
										world. A person with this profile can be an innovator and
										explorer.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down11'
										onClick={openArrow11}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top11'
										onClick={closeArrow11}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-motivation'>
								<div className='information-text'>
									<div className='information-title'>
										5/2 - Knowledge/Connector
									</div>
									<div className='information-description information-description12'>
										This profile combines the ability...
									</div>
									<div className='additional-information-description12 information-description'>
										This profile combines the ability to apply knowledge with
										the desire to create harmony. A person with this profile can
										be a wise mediator.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down12'
										onClick={openArrow12}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top12'
										onClick={closeArrow12}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-perspective'>
								<div className='information-text'>
									<div className='information-title'>6/2 - Power/Hermit</div>
									<div className='information-description information-description13'>
										This profile combines the desire...
									</div>
									<div className='additional-information-description13 information-description'>
										This profile combines the desire to be an example with the
										desire to create harmony. A person with this profile can be
										an inspirational facilitator.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down13'
										onClick={openArrow13}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top13'
										onClick={closeArrow13}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-environment'>
								<div className='information-text'>
									<div className='information-title'>6/3 - Power/Master</div>
									<div className='information-description information-description14'>
										This profile combines the desire...
									</div>
									<div className='additional-information-description14 information-description'>
										This profile combines the desire to be an example with the
										desire to overcome challenges. A person with this profile
										can be an inspiring leader.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down14'
										onClick={openArrow14}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top14'
										onClick={closeArrow14}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
						</div>
					</main>
				</div>
				<footer className='footer'>
					<div className='container'>
						<div className='footer-images'>
							<Link to='/profile'>
								<img
									src='/images/calculate.png'
									alt=''
									width={'54px'}
									height={'38px'}
								/>
							</Link>

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
									src='/images/Insight.png'
									alt=''
									width={'33px'}
									height={'38px'}
								/>
							</Link>
							<Link to='/base'>
								<img
									src='/images/knowledge2.png'
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

export default Profiles
