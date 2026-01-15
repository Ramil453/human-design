import { Link } from 'react-router-dom'
import '../styles/Description.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Description = () => {
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

	const [data, setData] = useState([])

	let userName = localStorage.getItem('name')
	let userBirth = localStorage.getItem('birth')
	let userPlace = localStorage.getItem('place')
	let userTime = localStorage.getItem('time')
	const API_KEY = 'a4490367-d5b9-4e01-9f31-88a46d9481b6'

	const url = `https://api.bodygraphchart.com/v221006/hd-data?api_key=${API_KEY}&date=${userBirth}%20${userTime}&timezone=Europe/Moscow`
	useEffect(() => {
		axios.post(url).then(data => {
			setData(data)
			console.log(data)
		})
	}, [])

	const typeDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Type &&
		data.data.Properties.Type.description

	const beginningTypeDescription = typeDescription
		? typeDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const senseDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Sense &&
		data.data.Properties.Sense.description

	const beginningSenseDescription = senseDescription
		? senseDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const strategyDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Strategy &&
		data.data.Properties.Strategy.description

	const beginningStrategyDescription = strategyDescription
		? strategyDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const gatesDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Gates &&
		data.data.Properties.Gates.list[0] &&
		data.data.Properties.Gates.list[0].description

	const beginningGatesDescription = gatesDescription
		? gatesDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const innerAuthorityDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.InnerAuthority &&
		data.data.Properties.InnerAuthority.description

	const beginningInnerAuthorityDescription = innerAuthorityDescription
		? innerAuthorityDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const definitionDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Definition &&
		data.data.Properties.Definition.description

	const beginningDefinitionDescription = definitionDescription
		? definitionDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const profileDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Profile &&
		data.data.Properties.Profile.description

	const beginningProfileDescription = profileDescription
		? profileDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const incarnationCrossDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.IncarnationCross &&
		data.data.Properties.IncarnationCross.description

	const beginningIncarnationCrossDescription = incarnationCrossDescription
		? incarnationCrossDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const signatureDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Signature &&
		data.data.Properties.Signature.description

	const beginningSignatureDescription = signatureDescription
		? signatureDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const digestionDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Digestion &&
		data.data.Properties.Digestion.description

	const beginningDigestionDescription = digestionDescription
		? digestionDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const designSenseDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.DesignSense &&
		data.data.Properties.DesignSense.description

	const beginningdesignSenseDescription = designSenseDescription
		? designSenseDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const motivationDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Motivation &&
		data.data.Properties.Motivation.description

	const beginningmotivationDescription = motivationDescription
		? motivationDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const perspectiveDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Perspective &&
		data.data.Properties.Perspective.description

	const beginningPerspectiveDescription = perspectiveDescription
		? perspectiveDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const environmentDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Environment &&
		data.data.Properties.Environment.description

	const beginningEnvironmentDescription = environmentDescription
		? environmentDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	//channels

	const channelsDescription =
		data.data &&
		data.data.Properties &&
		data.data.Properties.Channels &&
		data.data.Properties.Channels.list[0] &&
		data.data.Properties.Channels.list[0].description

	const beginningChannelsDescription = channelsDescription
		? channelsDescription.split(' ').slice(0, 7).join(' ')
		: 'Loading...'

	const typeBtn = () => {
		document
			.querySelector('.information-box-type')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow1()
	}

	const senseBtn = () => {
		document
			.querySelector('.information-box-sense')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow2()
	}

	const strategyBtn = () => {
		document
			.querySelector('.information-box-strategy')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow3()
	}

	const gatesBtn = () => {
		document
			.querySelector('.information-box-gates')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow4()
	}

	const innerBtn = () => {
		document
			.querySelector('.information-box-inner')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow5()
	}

	const definitionBtn = () => {
		document
			.querySelector('.information-box-definition')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow6()
	}

	const profileBtn = () => {
		document
			.querySelector('.information-box-profile')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow7()
	}

	const incarnationBtn = () => {
		document
			.querySelector('.information-box-incarnation')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow8()
	}

	const signatureBtn = () => {
		document
			.querySelector('.information-box-signature')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow9()
	}

	const digestionBtn = () => {
		document
			.querySelector('.information-box-digestion')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow10()
	}

	const designBtn = () => {
		document
			.querySelector('.information-box-design')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow11()
	}

	const motivationBtn = () => {
		document
			.querySelector('.information-box-motivation')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow12()
	}

	const perspectiveBtn = () => {
		document
			.querySelector('.information-box-perspective')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow13()
	}

	const environmentBtn = () => {
		document
			.querySelector('.information-box-environment')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow14()
	}

	const channelsBtn = () => {
		document
			.querySelector('.information-box-channels')
			.scrollIntoView({ behavior: 'smooth' })
		openArrow15()
	}

	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header margin-bottom-20'>
						<Link to='/calculations'>
							<img
								src='/images/Vector2.png'
								alt=''
								width={'24px'}
								height={'13px'}
							/>
						</Link>
						<div className='header-title'>Description</div>
						<Link to='/settings'>
							<img
								src='/images/Frame 106.png'
								alt=''
								width={'23px'}
								height={'24px'}
							/>
						</Link>
					</header>
					<main className='main'>
						<div className='scroll-wrapper'>
							<div className='list'>
								<ul>
									<li className='color-blue type' onClick={typeBtn}>
										Type
									</li>
									<li className='color-blue strategy' onClick={strategyBtn}>
										Strategy
									</li>
									<li className='color-blue inner' onClick={innerBtn}>
										Inner
									</li>
									<li className='color-blue definition' onClick={definitionBtn}>
										Definition
									</li>
									<li className='color-blue profile' onClick={profileBtn}>
										Profile
									</li>

									<li
										className='color-blue incarnation'
										onClick={incarnationBtn}
									>
										Incarnation{' '}
									</li>
									<li className='color-blue signature' onClick={signatureBtn}>
										Signature
									</li>

									<li className='color-blue digestion' onClick={digestionBtn}>
										Digestion
									</li>

									<li className='color-blue sense' onClick={senseBtn}>
										Sense
									</li>

									<li className='color-blue design' onClick={designBtn}>
										Design{' '}
									</li>

									<li className='color-blue motivation' onClick={motivationBtn}>
										Motivation
									</li>

									<li
										className='color-blue perspective'
										onClick={perspectiveBtn}
									>
										Perspective
									</li>

									<li
										className='color-blue environment'
										onClick={environmentBtn}
									>
										Environment
									</li>

									<li className='color-blue gates' onClick={gatesBtn}>
										Gates
									</li>

									<li className='color-blue channels' onClick={channelsBtn}>
										Channels
									</li>
								</ul>
							</div>
						</div>

						<div className='link-buttons'>
							<Link to='/profile'>
								<button className='inactive-button'>Bodygraph</button>
							</Link>
							<Link to='/description'>
								<button className='active-button'>Description</button>
							</Link>
						</div>
						<div className='information-block'>
							<div className='information-box information-box-type'>
								<div className='information-text'>
									<div className='information-title'>Type</div>
									<div className='information-description'>
										{beginningTypeDescription}...
									</div>
									<div className='additional-information-description information-description'>
										{typeDescription}
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
									<div className='information-title'>Strategy</div>
									<div className='information-description information-description3'>
										{beginningStrategyDescription}...
									</div>
									<div className='additional-information-description3 information-description'>
										{strategyDescription}
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
									<div className='information-title'>Inner Authority</div>
									<div className='information-description information-description5'>
										{beginningInnerAuthorityDescription}....
									</div>
									<div className='additional-information-description5 information-description'>
										{innerAuthorityDescription}
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
									<div className='information-title'>Definition</div>
									<div className='information-description information-description6'>
										{beginningDefinitionDescription}...
									</div>
									<div className='additional-information-description6 information-description'>
										{definitionDescription}
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
									<div className='information-title'>Profile</div>
									<div className='information-description information-description7'>
										{beginningProfileDescription}...
									</div>
									<div className='additional-information-description7 information-description'>
										{profileDescription}
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
									<div className='information-title'>Incarnation Cross</div>
									<div className='information-description information-description8'>
										{beginningIncarnationCrossDescription}...
									</div>
									<div className='additional-information-description8 information-description'>
										{incarnationCrossDescription}
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
									<div className='information-title'>Signature</div>
									<div className='information-description information-description9'>
										{beginningSignatureDescription}...
									</div>
									<div className='additional-information-description9 information-description'>
										{signatureDescription}
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
									<div className='information-title'>Digestion</div>
									<div className='information-description information-description10'>
										{beginningDigestionDescription}...
									</div>
									<div className='additional-information-description10 information-description'>
										{digestionDescription}
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
									<div className='information-title'>Sense</div>
									<div className='information-description information-description2'>
										{beginningSenseDescription}...
									</div>
									<div className='additional-information-description2 information-description'>
										{senseDescription}
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
									<div className='information-title'>Design Sense</div>
									<div className='information-description information-description11'>
										{beginningdesignSenseDescription}...
									</div>
									<div className='additional-information-description11 information-description'>
										{designSenseDescription}
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
									<div className='information-title'>Motivation</div>
									<div className='information-description information-description12'>
										{beginningmotivationDescription}...
									</div>
									<div className='additional-information-description12 information-description'>
										{motivationDescription}
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
									<div className='information-title'>Perspective</div>
									<div className='information-description information-description13'>
										{beginningPerspectiveDescription}...
									</div>
									<div className='additional-information-description13 information-description'>
										{perspectiveDescription}
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
									<div className='information-title'>Environment</div>
									<div className='information-description information-description14'>
										{beginningEnvironmentDescription}...
									</div>
									<div className='additional-information-description14 information-description'>
										{environmentDescription}
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
									<div className='information-title'>Gates</div>
									<div className='information-description information-description4'>
										{beginningGatesDescription}...
									</div>
									<div className='additional-information-description4 information-description'>
										{gatesDescription}
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
									<div className='information-title'>Channels</div>
									<div className='information-description information-description15'>
										{beginningChannelsDescription}...
									</div>
									<div className='additional-information-description15 information-description'>
										{channelsDescription}
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
						</div>
					</main>
				</div>
				<footer className='footer'>
					<div className='container'>
						<div className='footer-images'>
							<Link to='/profile'>
								<img
									src='/images/calculate2.png'
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

export default Description
