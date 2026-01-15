import { Link } from 'react-router-dom'
import '../styles/Bases.css'
import { useEffect } from 'react'

const PlanetsBase = () => {

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
					<div className='header-title margin-bottom-56'>Planets</div>

					<main className='main'>
						<div className='information-block'>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>Sun</div>
									<div className='information-description'>
										Associated with the power center...
									</div>
									<div className='additional-information-description information-description'>
										Associated with the power center and the central channel. It
										represents life energy and individuality.
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
									<div className='information-title'>Earth</div>
									<div className='information-description information-description3'>
										Associated with the fundamental energy...
									</div>
									<div className='additional-information-description3 information-description'>
										Associated with the fundamental energy centers and
										connecting channels that are the basis for human perception
										and interaction with the world around us. It can also be
										associated with the idea of the fundamental structure and
										foundations upon which the personality and its energetic
										design is built.
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
									<div className='information-title'>Moon</div>
									<div className='information-description information-description5'>
										Influences the center of emotions and...
									</div>
									<div className='additional-information-description5 information-description'>
										Influences the center of emotions and the center of the
										head. Moon reflects a person's emotional state and intuitive
										processes.
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
									<div className='information-title'>Mercury</div>
									<div className='information-description information-description6'>
										Associated with the center of...
									</div>
									<div className='additional-information-description6 information-description'>
										Associated with the center of mental activity and
										communication. Mercury influences communication and logic.
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
									<div className='information-title'>Venus</div>
									<div className='information-description information-description7'>
										Relates to the center of love...
									</div>
									<div className='additional-information-description7 information-description'>
										Relates to the center of love and relationships. Venus
										influences love, beauty and relationships.
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
									<div className='information-title'>Mars</div>
									<div className='information-description information-description8'>
										Relates to the center of action...
									</div>
									<div className='additional-information-description8 information-description'>
										Relates to the center of action and energy. Mars influences
										action, ambition and passions.
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
									<div className='information-title'>Jupiter</div>
									<div className='information-description information-description9'>
										Affects the center of abundance...
									</div>
									<div className='additional-information-description9 information-description'>
										Affects the center of abundance and contentment. Jupiter
										relates to growth, luck and education.
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
									<div className='information-title'>Saturn</div>
									<div className='information-description information-description10'>
										Associated with the center of...
									</div>
									<div className='additional-information-description10 information-description'>
										Associated with the center of teaching and insight. Saturn
										influences structure, discipline, and life lessons.
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
									<div className='information-title'>Neptune</div>
									<div className='information-description information-description11'>
										Refers to the center of transformation...
									</div>
									<div className='additional-information-description11 information-description'>
										Refers to the center of transformation. Uranus influences
										unexpected change and innovation.
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
									<div className='information-title'>Pluto</div>
									<div className='information-description information-description12'>
										Pluto's energy is hidden in the...
									</div>
									<div className='additional-information-description12 information-description'>
										Pluto's energy is hidden in the depths of our subconscious.
										It determines a person's behavior alone with himself, his
										inner feelings, worldview, motivation for behavior and
										actions towards others. Pluto is your innermost thoughts,
										inner philosophy, hidden life attitudes and hidden goals. It
										shows the dark and light sides of your inner Truth, which
										you follow relentlessly.
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

export default PlanetsBase
