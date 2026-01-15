import { Link } from 'react-router-dom'
import '../styles/Bases.css'
import { useEffect } from 'react'

const ChannelsBase = () => {
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

	function openArrow2() {
		document.querySelector('.arrow-top2').style.display = 'block'
		document.querySelector('.arrow-down2').style.display = 'none'
		document.querySelector('.information-description2').style.display = 'none'
		document.querySelector(
			'.additional-information-description2'
		).style.display = 'block'
	}

	function closeArrow2() {
		document.querySelector('.arrow-down2').style.display = 'block'
		document.querySelector('.arrow-top2').style.display = 'none'
		document.querySelector('.information-description2').style.display = 'block'
		document.querySelector(
			'.additional-information-description2'
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

	function openArrow4() {
		document.querySelector('.arrow-top4').style.display = 'block'
		document.querySelector('.arrow-down4').style.display = 'none'
		document.querySelector('.information-description4').style.display = 'none'
		document.querySelector(
			'.additional-information-description4'
		).style.display = 'block'
	}

	function closeArrow4() {
		document.querySelector('.arrow-down4').style.display = 'block'
		document.querySelector('.arrow-top4').style.display = 'none'
		document.querySelector('.information-description4').style.display = 'block'
		document.querySelector(
			'.additional-information-description4'
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

	function openArrow15() {
		document.querySelector('.arrow-top15').style.display = 'block'
		document.querySelector('.arrow-down15').style.display = 'none'
		document.querySelector('.information-description15').style.display = 'none'
		document.querySelector(
			'.additional-information-description15'
		).style.display = 'block'
	}

	function closeArrow15() {
		document.querySelector('.arrow-down15').style.display = 'block'
		document.querySelector('.arrow-top15').style.display = 'none'
		document.querySelector('.information-description15').style.display = 'block'
		document.querySelector(
			'.additional-information-description15'
		).style.display = 'none'
	}

	function openArrow16() {
		document.querySelector('.arrow-top16').style.display = 'block'
		document.querySelector('.arrow-down16').style.display = 'none'
		document.querySelector('.information-description16').style.display = 'none'
		document.querySelector(
			'.additional-information-description16'
		).style.display = 'block'
	}

	function closeArrow16() {
		document.querySelector('.arrow-down16').style.display = 'block'
		document.querySelector('.arrow-top16').style.display = 'none'
		document.querySelector('.information-description16').style.display = 'block'
		document.querySelector(
			'.additional-information-description16'
		).style.display = 'none'
	}

	function openArrow17() {
		document.querySelector('.arrow-top17').style.display = 'block'
		document.querySelector('.arrow-down17').style.display = 'none'
		document.querySelector('.information-description17').style.display = 'none'
		document.querySelector(
			'.additional-information-description17'
		).style.display = 'block'
	}

	function closeArrow17() {
		document.querySelector('.arrow-down17').style.display = 'block'
		document.querySelector('.arrow-top17').style.display = 'none'
		document.querySelector('.information-description17').style.display = 'block'
		document.querySelector(
			'.additional-information-description17'
		).style.display = 'none'
	}

	function openArrow18() {
		document.querySelector('.arrow-top18').style.display = 'block'
		document.querySelector('.arrow-down18').style.display = 'none'
		document.querySelector('.information-description18').style.display = 'none'
		document.querySelector(
			'.additional-information-description18'
		).style.display = 'block'
	}

	function closeArrow18() {
		document.querySelector('.arrow-down18').style.display = 'block'
		document.querySelector('.arrow-top18').style.display = 'none'
		document.querySelector('.information-description18').style.display = 'block'
		document.querySelector(
			'.additional-information-description18'
		).style.display = 'none'
	}

	function openArrow19() {
		document.querySelector('.arrow-top19').style.display = 'block'
		document.querySelector('.arrow-down19').style.display = 'none'
		document.querySelector('.information-description19').style.display = 'none'
		document.querySelector(
			'.additional-information-description19'
		).style.display = 'block'
	}

	function closeArrow19() {
		document.querySelector('.arrow-down19').style.display = 'block'
		document.querySelector('.arrow-top19').style.display = 'none'
		document.querySelector('.information-description19').style.display = 'block'
		document.querySelector(
			'.additional-information-description19'
		).style.display = 'none'
	}

	function openArrow20() {
		document.querySelector('.arrow-top20').style.display = 'block'
		document.querySelector('.arrow-down20').style.display = 'none'
		document.querySelector('.information-description20').style.display = 'none'
		document.querySelector(
			'.additional-information-description20'
		).style.display = 'block'
	}

	function closeArrow20() {
		document.querySelector('.arrow-down20').style.display = 'block'
		document.querySelector('.arrow-top20').style.display = 'none'
		document.querySelector('.information-description20').style.display = 'block'
		document.querySelector(
			'.additional-information-description20'
		).style.display = 'none'
	}

	function openArrow21() {
		document.querySelector('.arrow-top21').style.display = 'block'
		document.querySelector('.arrow-down21').style.display = 'none'
		document.querySelector('.information-description21').style.display = 'none'
		document.querySelector(
			'.additional-information-description21'
		).style.display = 'block'
	}

	function closeArrow21() {
		document.querySelector('.arrow-down21').style.display = 'block'
		document.querySelector('.arrow-top21').style.display = 'none'
		document.querySelector('.information-description21').style.display = 'block'
		document.querySelector(
			'.additional-information-description21'
		).style.display = 'none'
	}

	function openArrow22() {
		document.querySelector('.arrow-top22').style.display = 'block'
		document.querySelector('.arrow-down22').style.display = 'none'
		document.querySelector('.information-description22').style.display = 'none'
		document.querySelector(
			'.additional-information-description22'
		).style.display = 'block'
	}

	function closeArrow22() {
		document.querySelector('.arrow-down22').style.display = 'block'
		document.querySelector('.arrow-top22').style.display = 'none'
		document.querySelector('.information-description22').style.display = 'block'
		document.querySelector(
			'.additional-information-description22'
		).style.display = 'none'
	}

	function openArrow23() {
		document.querySelector('.arrow-top23').style.display = 'block'
		document.querySelector('.arrow-down23').style.display = 'none'
		document.querySelector('.information-description23').style.display = 'none'
		document.querySelector(
			'.additional-information-description23'
		).style.display = 'block'
	}

	function closeArrow23() {
		document.querySelector('.arrow-down23').style.display = 'block'
		document.querySelector('.arrow-top23').style.display = 'none'
		document.querySelector('.information-description23').style.display = 'block'
		document.querySelector(
			'.additional-information-description23'
		).style.display = 'none'
	}

	function openArrow24() {
		document.querySelector('.arrow-top24').style.display = 'block'
		document.querySelector('.arrow-down24').style.display = 'none'
		document.querySelector('.information-description24').style.display = 'none'
		document.querySelector(
			'.additional-information-description24'
		).style.display = 'block'
	}

	function closeArrow24() {
		document.querySelector('.arrow-down24').style.display = 'block'
		document.querySelector('.arrow-top24').style.display = 'none'
		document.querySelector('.information-description24').style.display = 'block'
		document.querySelector(
			'.additional-information-description24'
		).style.display = 'none'
	}

	function openArrow25() {
		document.querySelector('.arrow-top25').style.display = 'block'
		document.querySelector('.arrow-down25').style.display = 'none'
		document.querySelector('.information-description25').style.display = 'none'
		document.querySelector(
			'.additional-information-description25'
		).style.display = 'block'
	}

	function closeArrow25() {
		document.querySelector('.arrow-down25').style.display = 'block'
		document.querySelector('.arrow-top25').style.display = 'none'
		document.querySelector('.information-description25').style.display = 'block'
		document.querySelector(
			'.additional-information-description25'
		).style.display = 'none'
	}

	function openArrow26() {
		document.querySelector('.arrow-top26').style.display = 'block'
		document.querySelector('.arrow-down26').style.display = 'none'
		document.querySelector('.information-description26').style.display = 'none'
		document.querySelector(
			'.additional-information-description26'
		).style.display = 'block'
	}

	function closeArrow26() {
		document.querySelector('.arrow-down26').style.display = 'block'
		document.querySelector('.arrow-top26').style.display = 'none'
		document.querySelector('.information-description26').style.display = 'block'
		document.querySelector(
			'.additional-information-description26'
		).style.display = 'none'
	}

	function openArrow27() {
		document.querySelector('.arrow-top27').style.display = 'block'
		document.querySelector('.arrow-down27').style.display = 'none'
		document.querySelector('.information-description27').style.display = 'none'
		document.querySelector(
			'.additional-information-description27'
		).style.display = 'block'
	}

	function closeArrow27() {
		document.querySelector('.arrow-down27').style.display = 'block'
		document.querySelector('.arrow-top27').style.display = 'none'
		document.querySelector('.information-description27').style.display = 'block'
		document.querySelector(
			'.additional-information-description27'
		).style.display = 'none'
	}

	function openArrow28() {
		document.querySelector('.arrow-top28').style.display = 'block'
		document.querySelector('.arrow-down28').style.display = 'none'
		document.querySelector('.information-description28').style.display = 'none'
		document.querySelector(
			'.additional-information-description28'
		).style.display = 'block'
	}

	function closeArrow28() {
		document.querySelector('.arrow-down28').style.display = 'block'
		document.querySelector('.arrow-top28').style.display = 'none'
		document.querySelector('.information-description28').style.display = 'block'
		document.querySelector(
			'.additional-information-description28'
		).style.display = 'none'
	}

	function openArrow29() {
		document.querySelector('.arrow-top29').style.display = 'block'
		document.querySelector('.arrow-down29').style.display = 'none'
		document.querySelector('.information-description29').style.display = 'none'
		document.querySelector(
			'.additional-information-description29'
		).style.display = 'block'
	}

	function closeArrow29() {
		document.querySelector('.arrow-down29').style.display = 'block'
		document.querySelector('.arrow-top29').style.display = 'none'
		document.querySelector('.information-description29').style.display = 'block'
		document.querySelector(
			'.additional-information-description29'
		).style.display = 'none'
	}

	function openArrow30() {
		document.querySelector('.arrow-top30').style.display = 'block'
		document.querySelector('.arrow-down30').style.display = 'none'
		document.querySelector('.information-description30').style.display = 'none'
		document.querySelector(
			'.additional-information-description30'
		).style.display = 'block'
	}

	function closeArrow30() {
		document.querySelector('.arrow-down30').style.display = 'block'
		document.querySelector('.arrow-top30').style.display = 'none'
		document.querySelector('.information-description30').style.display = 'block'
		document.querySelector(
			'.additional-information-description30'
		).style.display = 'none'
	}
	function openArrow31() {
		document.querySelector('.arrow-top31').style.display = 'block'
		document.querySelector('.arrow-down31').style.display = 'none'
		document.querySelector('.information-description31').style.display = 'none'
		document.querySelector(
			'.additional-information-description31'
		).style.display = 'block'
	}

	function closeArrow31() {
		document.querySelector('.arrow-down31').style.display = 'block'
		document.querySelector('.arrow-top31').style.display = 'none'
		document.querySelector('.information-description31').style.display = 'block'
		document.querySelector(
			'.additional-information-description31'
		).style.display = 'none'
	}

	function openArrow32() {
		document.querySelector('.arrow-top32').style.display = 'block'
		document.querySelector('.arrow-down32').style.display = 'none'
		document.querySelector('.information-description32').style.display = 'none'
		document.querySelector(
			'.additional-information-description32'
		).style.display = 'block'
	}

	function closeArrow32() {
		document.querySelector('.arrow-down32').style.display = 'block'
		document.querySelector('.arrow-top32').style.display = 'none'
		document.querySelector('.information-description32').style.display = 'block'
		document.querySelector(
			'.additional-information-description32'
		).style.display = 'none'
	}

	function openArrow33() {
		document.querySelector('.arrow-top33').style.display = 'block'
		document.querySelector('.arrow-down33').style.display = 'none'
		document.querySelector('.information-description33').style.display = 'none'
		document.querySelector(
			'.additional-information-description33'
		).style.display = 'block'
	}

	function closeArrow33() {
		document.querySelector('.arrow-down33').style.display = 'block'
		document.querySelector('.arrow-top33').style.display = 'none'
		document.querySelector('.information-description33').style.display = 'block'
		document.querySelector(
			'.additional-information-description33'
		).style.display = 'none'
	}

	function openArrow34() {
		document.querySelector('.arrow-top34').style.display = 'block'
		document.querySelector('.arrow-down34').style.display = 'none'
		document.querySelector('.information-description34').style.display = 'none'
		document.querySelector(
			'.additional-information-description34'
		).style.display = 'block'
	}

	function closeArrow34() {
		document.querySelector('.arrow-down34').style.display = 'block'
		document.querySelector('.arrow-top34').style.display = 'none'
		document.querySelector('.information-description34').style.display = 'block'
		document.querySelector(
			'.additional-information-description34'
		).style.display = 'none'
	}

	function openArrow35() {
		document.querySelector('.arrow-top35').style.display = 'block'
		document.querySelector('.arrow-down35').style.display = 'none'
		document.querySelector('.information-description35').style.display = 'none'
		document.querySelector(
			'.additional-information-description35'
		).style.display = 'block'
	}

	function closeArrow35() {
		document.querySelector('.arrow-down35').style.display = 'block'
		document.querySelector('.arrow-top35').style.display = 'none'
		document.querySelector('.information-description35').style.display = 'block'
		document.querySelector(
			'.additional-information-description35'
		).style.display = 'none'
	}

	function openArrow36() {
		document.querySelector('.arrow-top36').style.display = 'block'
		document.querySelector('.arrow-down36').style.display = 'none'
		document.querySelector('.information-description36').style.display = 'none'
		document.querySelector(
			'.additional-information-description36'
		).style.display = 'block'
	}

	function closeArrow36() {
		document.querySelector('.arrow-down36').style.display = 'block'
		document.querySelector('.arrow-top36').style.display = 'none'
		document.querySelector('.information-description36').style.display = 'block'
		document.querySelector(
			'.additional-information-description36'
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
					<div className='header-title margin-bottom-56'>Channels</div>

					<main className='main'>
						<div className='information-block'>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 1-8: The Creativity Channel
									</div>
									<div className='information-description'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description information-description'>
										This channel reflects the ability to transform ideas into
										reality, to attract sources of material support. People who
										have this channel activated have a unique ability to
										transform their ideas into reality.
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
										Channel 2-14: The Beating Channel.
									</div>
									<div className='information-description information-description3'>
										It reflects the ability to listen...
									</div>
									<div className='additional-information-description3 information-description'>
										It reflects the ability to listen to one's inner voice, to
										seek truth and values. People who have this channel
										activated have a natural ability to sense and accept truth
										and values that are meaningful to them. They may be able to
										recognize which ideas and values are most meaningful to
										them, and they often strive to live in accordance with those
										values.
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
										Channel 3-60: Channel of Mutation
									</div>
									<div className='information-description information-description5'>
										This channel reflects the theme...
									</div>
									<div className='additional-information-description5 information-description'>
										This channel reflects the theme of liberation from
										limitations. People with an activated channel may have the
										ability to overcome limitations, whether in their own
										thoughts, attitudes, or in their environment. They may be
										innovators and creative thinkers, able to find
										unconventional solutions and rethink existing frameworks.
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
										Channel 4-63: Logic Channel
									</div>
									<div className='information-description information-description6'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description6 information-description'>
										This channel reflects the ability to team up with others to
										accomplish outstanding ideas and projects. People with this
										channel may have a unique ability to create something great
										when working in partnership with others.
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
										Channel 5-15: Fixed Rhythms Channel
									</div>
									<div className='information-description information-description7'>
										This channel reflects the theme of...
									</div>
									<div className='additional-information-description7 information-description'>
										This channel reflects the theme of rituals, ceremonies,
										mindfulness in life, and the pursuit of perfection. People
										with this channel may have an inner need to create rituals
										and rites of passage to give meaning and structure to their
										lives. This channel is also associated with an understanding
										of the value of time. It reflects a desire for stability,
										for long-term plans and goals. People with this channel may
										feel satisfaction from rituals and observance of traditions,
										which can bring them a sense of confidence and stability in
										their lives.
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
										Channel 6-59: The Intimacy Channel
									</div>
									<div className='information-description information-description8'>
										This channel reflects a capacity...
									</div>
									<div className='additional-information-description8 information-description'>
										This channel reflects a capacity for experimentation,
										innovation, and a desire to try new things. People with this
										channel can be spontaneous, open to new ideas and have an
										interest in exploring different aspects of life. This
										channel is also associated with the idea of intimacy and
										deep connections. It reflects a desire to create deeper,
										more sincere connections with others where there is room for
										intimacy and understanding. It is also associated with the
										area of experimentation in relationships and partnerships.
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
										Channel 7-31: Alpha Leader Channel
									</div>
									<div className='information-description information-description9'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description9 information-description'>
										This channel reflects the ability to attract resources and
										transform them into something inspiring. People with this
										channel may have a unique ability to materialize their
										passions and interests.
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
										Channel 9-52: Concentration Channel
									</div>
									<div className='information-description information-description10'>
										This channel reflects kindness, and...
									</div>
									<div className='additional-information-description10 information-description'>
										This channel reflects kindness, and the ability to help
										others. People with this channel may possess the ability to
										serve others and be a support in times of need.
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
							<div className='information-box information-box-sense'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 10-20: Awakening Channel
									</div>
									<div className='information-description information-description2'>
										This channel reflects the cyclical...
									</div>
									<div className='additional-information-description2 information-description'>
										This channel reflects the cyclical nature of life, the
										ability to start over and change. People with this channel
										may have the ability to see cycles, processes of rebirth and
										transformation.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down2'
										onClick={openArrow2}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top2'
										onClick={closeArrow2}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-design'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 10-34: The channel of Exploration
									</div>
									<div className='information-description information-description11'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description11 information-description'>
										This channel reflects the ability to achieve goals,
										realization and success through strategies and planning.
										People with this channel may possess innovative thinking and
										a drive to achieve goals.
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
										Channel 10-57: Perfect Form Channel
									</div>
									<div className='information-description information-description12'>
										This channel reflects support and...
									</div>
									<div className='additional-information-description12 information-description'>
										This channel reflects support and interaction with others to
										achieve goals. People with this channel may have the ability
										to inspire and support others to achieve desired results.
										This channel also reflects the ability to intuitively
										understand the essence of things.
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
									<div className='information-title'>
										Channel 11-56: Channel of Curiosity
									</div>
									<div className='information-description information-description13'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description13 information-description'>
										This channel reflects the ability to commit to high
										standards, ideals, and beliefs. People with this channel may
										have strongly held beliefs and strive to achieve high goals
										by conforming to their ideals.
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
									<div className='information-title'>
										Channel 12-22. Channel of Openness
									</div>
									<div className='information-description information-description14'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description14 information-description'>
										This channel reflects the ability to see and appreciate the
										beauty and harmony in the world, as well as the ability to
										bring compassion and grace to interactions with others.
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
							<div className='information-box information-box-gates'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 13-33: The Waste Channel
									</div>
									<div className='information-description information-description4'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description4 information-description'>
										This channel reflects the ability to possess intellectual
										discrimination and principled decision making. People with
										this channel may possess the ability to see and discriminate
										between different options and choose the most appropriate
										one based on their principles.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down4'
										onClick={openArrow4}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top4'
										onClick={closeArrow4}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-channels'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 16-48: The Mastery Channel
									</div>
									<div className='information-description information-description15'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description15 information-description'>
										This channel reflects the ability to learn from past
										experiences and turn them into wisdom. People with this
										channel may have the ability to learn from their mistakes
										and strive for self-improvement.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down15'
										onClick={openArrow15}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top15'
										onClick={closeArrow15}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-strategy'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 17-62: The channel of Accepting Opinions
									</div>
									<div className='information-description information-description16'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description16 information-description'>
										This channel reflects the ability to possess certainty in
										one's beliefs and to follow one's paradigm. People with this
										channel may have a strong gift of persuasion and a clear
										vision of their path.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down16'
										onClick={openArrow16}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top16'
										onClick={closeArrow16}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-inner'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 18-58: The Judgment Channel
									</div>
									<div className='information-description information-description17'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description17 information-description'>
										This channel reflects the ability to pay attention to detail
										and bring things to completion. People with this channel may
										have the ability to notice details and apply them to
										accomplish goals.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down17'
										onClick={openArrow17}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top17'
										onClick={closeArrow17}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-definition'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 19-49: Synthesis Channel
									</div>
									<div className='information-description information-description18'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description18 information-description'>
										This channel reflects the ability to generate ideas and
										principles that can be inspiring to others. People with this
										channel may possess the ability to create new ideas and
										principles that can inspire and motivate others.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down18'
										onClick={openArrow18}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top18'
										onClick={closeArrow18}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-profile'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 20-34: The Charisma Channel
									</div>
									<div className='information-description information-description19'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description19 information-description'>
										This channel reflects the ability to turn ideas into actions
										and materialize them into reality. People with this channel
										have the ability to give their ideas, projects or plans
										physical form and carry them out.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down19'
										onClick={openArrow19}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top19'
										onClick={closeArrow19}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-incarnation'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 20-57: Channel of Insight
									</div>
									<div className='information-description information-description20'>
										This channel reflects the capacity...
									</div>
									<div className='additional-information-description20 information-description'>
										This channel reflects the capacity for vivid intuition.
										People with this channel may have the ability to use their
										intuition to create resources that allow them to make
										significant changes in the world around them.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down20'
										onClick={openArrow20}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top20'
										onClick={closeArrow20}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-signature'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 21-45: Money Channel
									</div>
									<div className='information-description information-description21'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description21 information-description'>
										This channel reflects the ability to lead and organize
										others. People with this channel often have leadership
										qualities and the ability to coordinate groups in
										accomplishing certain tasks.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down21'
										onClick={openArrow21}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top21'
										onClick={closeArrow21}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-digestion'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 23-43: The Structuring channel
									</div>
									<div className='information-description information-description22'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description22 information-description'>
										This channel reflects the ability to create structure and
										order out of potentially dangerous or unstable situations.
										People with this channel usually have the ability to see
										structure in chaos and the ability to organize in ways that
										benefit from dangerous or unpredictable situations.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down22'
										onClick={openArrow22}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top22'
										onClick={closeArrow22}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-sense'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 24-61: The channel of Awareness
									</div>
									<div className='information-description information-description23'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description23 information-description'>
										This channel reflects the ability to make commitments and
										return to them when necessary. People with this channel have
										the ability to be committed and responsible when they make
										certain commitments.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down23'
										onClick={openArrow23}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top23'
										onClick={closeArrow23}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-design'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 25-51: Initiation Channel
									</div>
									<div className='information-description information-description24'>
										This channel reflects the ability...
									</div>
									<div className='additional-information-description24 information-description'>
										This channel reflects the ability to initiate new processes
										or directions without fear of the unknown. People with this
										channel may possess the courage and willingness to start new
										things without fear of uncertainty.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down24'
										onClick={openArrow24}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top24'
										onClick={closeArrow24}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-motivation'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 26-44 Transmission Channel
									</div>
									<div className='information-description information-description25'>
										This channel is associated with...
									</div>
									<div className='additional-information-description25 information-description'>
										This channel is associated with the energies of information
										sharing, knowledge transfer and learning. People with this
										channel can be natural teachers and communicators.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down25'
										onClick={openArrow25}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top25'
										onClick={closeArrow25}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-perspective'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 27-50 Preservation Channel
									</div>
									<div className='information-description information-description26'>
										This channel is associated with...
									</div>
									<div className='additional-information-description26 information-description'>
										This channel is associated with the energy of preservation
										and sustainability. People with this channel have the
										ability to conserve resources, maintain stability, and
										create a secure environment.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down26'
										onClick={openArrow26}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top26'
										onClick={closeArrow26}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-environment'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 28-38 Channel of Struggle
									</div>
									<div className='information-description information-description27'>
										This channel is associated with...
									</div>
									<div className='additional-information-description27 information-description'>
										This channel is associated with the energy of striving to
										achieve goals, striving to overcome difficulties and
										struggling to succeed
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down27'
										onClick={openArrow27}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top27'
										onClick={closeArrow27}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-gates'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 29-46 Channel of Discovery
									</div>
									<div className='information-description information-description28'>
										This channel is associated with...
									</div>
									<div className='additional-information-description28 information-description'>
										This channel is associated with the energy of discovery and
										discovering new things, both within oneself and in the world
										around. People with this channel can be sensitive to new
										ideas and experiences.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down28'
										onClick={openArrow28}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top28'
										onClick={closeArrow28}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-channels'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 30-41 Channel of Recognizing Feelings
									</div>
									<div className='information-description information-description29'>
										This channel is associated with...
									</div>
									<div className='additional-information-description29 information-description'>
										This channel is associated with the energy of sensitivity,
										intuition, and the ability to recognize emotional and
										energetic states around you. People with this channel may be
										especially receptive to energy and feelings.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down29'
										onClick={openArrow29}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top29'
										onClick={closeArrow29}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 32-54 Channel of Transformation
									</div>
									<div className='information-description30'>
										This channel is associated with...
									</div>
									<div className='additional-information-description30 information-description'>
										This channel is associated with the energies of
										transformation, change, and transmutation. People with this
										channel may be agents of change and transformation.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down30'
										onClick={openArrow30}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top30'
										onClick={closeArrow30}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-strategy'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 34-57 Channel of Force
									</div>
									<div className='information-description information-description31'>
										This channel is associated with...
									</div>
									<div className='additional-information-description31 information-description'>
										This channel is associated with the energy of the power of
										influence and leadership. People with this channel may have
										the power and ability to influence those around them.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down31'
										onClick={openArrow31}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top31'
										onClick={closeArrow31}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-inner'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 35-36 Channel of Momentum
									</div>
									<div className='information-description information-description32'>
										This channel is associated with...
									</div>
									<div className='additional-information-description32 information-description'>
										This channel is associated with the energy of fickleness,
										fleeting impressions and the ability to renew. People with
										this channel may be prone to rapid changes in their
										interests and perceptions.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down32'
										onClick={openArrow32}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top32'
										onClick={closeArrow32}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-definition'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 37-40 Community Channel
									</div>
									<div className='information-description information-description33'>
										This channel is associated with...
									</div>
									<div className='additional-information-description33 information-description'>
										This channel is associated with the energy of community,
										communication and interaction within a group. People with
										this channel usually feel comfortable in a community and are
										able to create strong bonds.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down33'
										onClick={openArrow33}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top33'
										onClick={closeArrow33}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-profile'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 39-55 Emotionality Channel
									</div>
									<div className='information-description information-description34'>
										This channel is associated with...
									</div>
									<div className='additional-information-description34 information-description'>
										This channel is associated with the energy of deep emotional
										experiences and processing feelings. People with this
										channel may have pronounced emotional reactions and the
										ability to communicate through emotion.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down34'
										onClick={openArrow34}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top34'
										onClick={closeArrow34}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-incarnation'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 42-53 Maturation Channel
									</div>
									<div className='information-description information-description35'>
										This channel is associated with...
									</div>
									<div className='additional-information-description35 information-description'>
										This channel is associated with the energy of the process of
										gaining wisdom and evolution. People with this channel may
										experience periods of transformation in various areas of
										their lives.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down35'
										onClick={openArrow35}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top35'
										onClick={closeArrow35}
										width={'16px'}
										height={'8px'}
									/>
								</div>
							</div>
							<div className='information-box information-box-signature'>
								<div className='information-text'>
									<div className='information-title'>
										Channel 47-64 Channel of Abstraction
									</div>
									<div className='information-description information-description36'>
										This channel is associated with...
									</div>
									<div className='additional-information-description36 information-description'>
										This channel is associated with the energy of abstract
										thinking, intelligence and the ability to see things at a
										higher level of abstraction. People with this channel may
										have a unique way of perceiving and understanding
										information.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down36'
										onClick={openArrow36}
										width={'16px'}
										height={'8px'}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top36'
										onClick={closeArrow36}
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

export default ChannelsBase
