import { Link } from 'react-router-dom'
import '../styles/Bases.css'
import { useEffect } from 'react'

const InternalAuthorities = () => {
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
					<div className='header-title margin-bottom-10'>
						Internal Authorities
					</div>

					<main className='main'>
						<div className='information-block'>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>Emotional Authority </div>
									<div className='information-description'>
										People with this authority rely...
									</div>
									<div className='additional-information-description information-description'>
										People with this authority rely on their emotions to make
										decisions. They wait for their emotional cycle to settle
										before making a final decision.
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
									<div className='information-title'>Sacral authority</div>
									<div className='information-description information-description3'>
										Typical of generators and manifesting...
									</div>
									<div className='additional-information-description3 information-description'>
										Typical of generators and manifesting generators. They use
										their sacral energy (their internal "yes" or "no" response
										that manifests as a sound) to make decisions.
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
									<div className='information-title'>Spleen authority</div>
									<div className='information-description information-description5'>
										This type of authority allows...
									</div>
									<div className='additional-information-description5 information-description'>
										This type of authority allows a person to make decisions
										based on their internal state of confidence or lack of
										confidence in a particular situation or regarding a
										particular choice.
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
										Ego Manifested Authority
									</div>
									<div className='information-description information-description6'>
										This authority means that a person...
									</div>
									<div className='additional-information-description6 information-description'>
										This authority means that a person is able to initiate
										actions and make decisions based on their inner beliefs and
										feelings. They may be able to make decisions based on what
										is important to them and what is in line with their values,
										aspirations and personality.
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
										Ego projected internal authority
									</div>
									<div className='information-description information-description7'>
										People with ego projected authority...
									</div>
									<div className='additional-information-description7 information-description'>
										People with ego projected authority often need external
										validation for their decisions. They may feel confident in
										their decision making when others validate or support their
										decisions, their actions, or their paths. It is important
										for them to hear the opinions and support of others before
										making a final decision.
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
									<div className='information-title'>
										Self-Projected Internal Authority
									</div>
									<div className='information-description information-description8'>
										People with self-projected internal...
									</div>
									<div className='additional-information-description8 information-description'>
										People with self-projected internal authority usually make
										decisions through their ability to express themselves, to
										speak their thoughts and ideas out loud. They can use their
										voice and words to project their thoughts onto others or the
										environment, and through this process they can better
										understand and discuss their own thoughts and decisions.
										This means that they are more likely to discuss their
										decisions with others or express their thoughts out loud in
										order to better understand what is right for them or to make
										more informed decisions by hearing themselves and their
										thoughts out loud.Relates to the center of action and
										energy. Mars influences action, ambition and passions.
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
									<div className='information-title'>Lunar Authority</div>
									<div className='information-description information-description9'>
										People with lunar authority usually...
									</div>
									<div className='additional-information-description9 information-description'>
										People with lunar authority usually take quite a long time
										to make decisions, going through a cycle of their own
										thoughts. This process can be cyclical and changeable,
										similar to the phases of the moon. People with this type of
										authority may need extra time to process information before
										making a final decision. This type of inner authority
										implies that it is important to give yourself time to think,
										process, and recycle information in order to make decisions.
										During this time, it is possible to experience cycles of
										certainty and uncertainty.
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

export default InternalAuthorities
