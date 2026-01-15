import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Comparison.css'
import axios from 'axios'

export default function Comparison() {
	let userName = localStorage.getItem('name')
	let userBirth = localStorage.getItem('birth')
	let userTime = localStorage.getItem('time')
	let secondUserName = localStorage.getItem('newName')
	let secondUserBirth = localStorage.getItem('newDate')
	let secondUserTime = localStorage.getItem('newTime')
	const API_KEY = 'a4490367-d5b9-4e01-9f31-88a46d9481b6'

	const url = `https://api.bodygraphchart.com/v221006/hd-data?api_key=${API_KEY}&date=${userBirth}%20${userTime}&timezone=Europe/Moscow`

	const secondUrl = `https://api.bodygraphchart.com/v221006/hd-data?api_key=${API_KEY}&date=${secondUserBirth} ${secondUserTime}&timezone=Europe/Moscow`

	const [data, setData] = useState([])
	const [secondData, setSecondData] = useState([])
	const [gate, setGate] = useState([])
	const [secondGate, setSecondGate] = useState([])

	useEffect(() => {
		axios.post(url).then(data => {
			setData(data)
			// console.log(data)
		})
		axios.get(url).then(gate => {
			setGate(gate.data.Gates)
			//console.log(gate)
		})
	}, [])

	useEffect(() => {
		axios.post(secondUrl).then(secondData => {
			setSecondData(secondData)
			console.log(secondData)
		})
		axios.get(secondUrl).then(secondGate => {
			setSecondGate(secondGate.data.Gates)
			//console.log(secondGate)
		})
	}, [])

	const checkNumberArr = [
		64, 61, 63, 47, 24, 4, 11, 43, 17, 23, 56, 35, 12, 45, 33, 8, 31, 20, 16,
		62,
	]

	return (
		<div>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header'>
						<Link to='/calculations'>
							<img
								src='/images/Vector2.png'
								alt=''
								width={'24px'}
								height={'13px'}
							/>
						</Link>
						<Link to='/settings'>
							<img
								src='/images/Frame 106.png'
								alt=''
								width={'23px'}
								height={'24px'}
							/>
						</Link>
					</header>
					<div className='comparison-header-down'>
						<div className='user-names'>
							<h2 className='comparison-user-name'>{userName}</h2>
							<h2 className='comparison-user-name'>{secondUserName}</h2>
						</div>
						<div className='comparison-buttons'>
							<div className='profile-generate-wrapper comparison-btn'>
								{data.data &&
									data.data.Properties &&
									data.data.Properties.Type &&
									data.data.Properties.Type.id}
							</div>
							<div className='projector-btn'>
								{secondData.data &&
									secondData.data.Properties &&
									secondData.data.Properties.Type &&
									secondData.data.Properties.Type.id}
							</div>
						</div>
					</div>

					<div className='slider'>
						<div className='blue-line'>
							<span></span>
						</div>
						<Link to='/compatibilityUsers' className='grey-line'>
							<span className='grey-line'></span>
						</Link>
					</div>
					<main className='main'>
						<div className='container'>
							<div className='user-info-rows'>
								<div className='personality-row'>
									<div className='personality-row-title'>Personality</div>
									<div className='comparison-user-info'>
										<div className='user-info-name'>{userName}</div>
										<div className='comparison-user-gates'>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Sun && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Sun?.Gate ===
																	secondData?.data?.Personality?.Sun?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Sun.Gate}.
															{data.data.Personality.Sun.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (0).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Earth && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Earth?.Gate ===
																	secondData?.data?.Personality?.Earth?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Earth.Gate}.
															{data.data.Personality.Earth.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (1).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Moon && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Moon?.Gate ===
																	secondData?.data?.Personality?.Moon?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Moon.Gate}.
															{data.data.Personality.Moon.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (2).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.['North Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality['North Node']?.Gate ===
																	secondData?.data?.Personality?.['North Node']
																		?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality['North Node'].Gate}.
															{data.data.Personality['North Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (3).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.['South Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality['South Node']?.Gate ===
																	secondData?.data?.Personality?.['South Node']
																		?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality['South Node'].Gate}.
															{data.data.Personality['South Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (4).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Mercury && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Mercury?.Gate ===
																	secondData?.data?.Personality?.Mercury?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Mercury.Gate}.
															{data.data.Personality.Mercury.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (5).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Venus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Venus?.Gate ===
																	secondData?.data?.Personality?.Venus?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Venus.Gate}.
															{data.data.Personality.Venus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (6).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Mars && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Mars?.Gate ===
																	secondData?.data?.Personality?.Mars?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Mars.Gate}.
															{data.data.Personality.Mars.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (7).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Jupiter && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Jupiter?.Gate ===
																	secondData?.data?.Personality?.Jupiter?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Jupiter.Gate}.
															{data.data.Personality.Jupiter.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (8).png'
														alt=''
														className='w10x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Saturn && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Saturn?.Gate ===
																	secondData?.data?.Personality?.Saturn?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Saturn.Gate}.
															{data.data.Personality.Saturn.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (9).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Uranus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Uranus?.Gate ===
																	secondData?.data?.Personality?.Uranus?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Uranus.Gate}.
															{data.data.Personality.Uranus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (10).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Neptune && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Neptune?.Gate ===
																	secondData?.data?.Personality?.Neptune?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Neptune.Gate}.
															{data.data.Personality.Neptune.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (11).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Personality?.Pluto && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Pluto?.Gate ===
																	secondData?.data?.Personality?.Pluto?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Pluto.Gate}.
															{data.data.Personality.Pluto.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (12).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='comparison-user-info'>
										<div className='user-info-name'>{secondUserName}</div>
										<div className='comparison-user-gates'>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Sun && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Sun?.Gate ===
																	secondData?.data?.Personality?.Sun?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Sun.Gate}.
															{secondData.data.Personality.Sun.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (0).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Earth && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Earth?.Gate ===
																	secondData?.data?.Personality?.Earth?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Earth.Gate}.
															{secondData.data.Personality.Earth.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (1).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Moon && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Moon?.Gate ===
																	secondData?.data?.Personality?.Moon?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Moon.Gate}.
															{secondData.data.Personality.Moon.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (2).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.['North Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality['North Node']?.Gate ===
																	secondData?.data?.Personality?.['North Node']
																		?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality['North Node'].Gate}.
															{secondData.data.Personality['North Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (3).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.['South Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality['South Node']?.Gate ===
																	secondData?.data?.Personality?.['South Node']
																		?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality['South Node'].Gate}.
															{secondData.data.Personality['South Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (4).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Mercury && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Mercury?.Gate ===
																	secondData?.data?.Personality?.Mercury?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Mercury.Gate}.
															{secondData.data.Personality.Mercury.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (5).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Venus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Venus?.Gate ===
																	secondData?.data?.Personality?.Venus?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Venus.Gate}.
															{secondData.data.Personality.Venus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (6).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Mars && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Mars?.Gate ===
																	secondData?.data?.Personality?.Mars?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Mars.Gate}.
															{secondData.data.Personality.Mars.Line}.
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (7).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Jupiter && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Jupiter?.Gate ===
																	secondData?.data?.Personality?.Jupiter?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Jupiter.Gate}.
															{secondData.data.Personality.Jupiter.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (8).png'
														alt=''
														className='w10x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Saturn && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Saturn?.Gate ===
																	secondData?.data?.Personality?.Saturn?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Saturn.Gate}.
															{secondData.data.Personality.Saturn.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (9).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Uranus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Uranus?.Gate ===
																	secondData?.data?.Personality?.Uranus?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Uranus.Gate}.
															{secondData.data.Personality.Uranus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (10).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Neptune && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Neptune?.Gate ===
																	secondData?.data?.Personality?.Neptune?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{secondData.data.Personality.Neptune.Gate}.
															{secondData.data.Personality.Neptune.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (11).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Personality?.Pluto && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Personality.Pluto?.Gate ===
																	secondData?.data?.Personality?.Pluto?.Gate
																		? '#0775A4'
																		: '',
															}}
														>
															{data.data.Personality.Pluto.Gate}.
															{data.data.Personality.Pluto.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (12).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='design-row'>
									<div className='design-row-title'>Design</div>
									<div className='comparison-user-info'>
										<div className='user-info-name'>{userName}</div>
										<div className='comparison-user-gates'>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Sun && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Sun?.Gate ===
																	secondData?.data?.Design?.Sun?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Sun.Gate}.
															{data.data.Design.Sun.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (0).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Earth && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Earth?.Gate ===
																	secondData?.data?.Design?.Earth?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Earth.Gate}.
															{data.data.Design.Earth.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (1).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Moon && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Moon?.Gate ===
																	secondData?.data?.Design?.Moon?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Moon.Gate}.
															{data.data.Design.Moon.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (2).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.['North Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design['North Node']?.Gate ===
																	secondData?.data?.Design?.['North Node']?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design['North Node'].Gate}.
															{data.data.Design['North Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (3).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.['South Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design['South Node']?.Gate ===
																	secondData?.data?.Design?.['South Node']?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design['South Node'].Gate}.
															{data.data.Design['South Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (4).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Mercury && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Mercury?.Gate ===
																	secondData?.data?.Design?.Mercury?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Mercury.Gate}.
															{data.data.Design.Mercury.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (5).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Venus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Venus?.Gate ===
																	secondData?.data?.Design?.Venus?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Venus.Gate}.
															{data.data.Design.Venus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (6).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Mars && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Mars?.Gate ===
																	secondData?.data?.Design?.Mars?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Mars.Gate}.
															{data.data.Design.Mars.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (7).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Jupiter && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Jupiter?.Gate ===
																	secondData?.data?.Design?.Jupiter?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Jupiter.Gate}.
															{data.data.Design.Jupiter.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (8).png'
														alt=''
														className='w10x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Saturn && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Saturn?.Gate ===
																	secondData?.data?.Design?.Saturn?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Saturn.Gate}.
															{data.data.Design.Saturn.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (9).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Uranus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Uranus?.Gate ===
																	secondData?.data?.Design?.Uranus?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Uranus.Gate}.
															{data.data.Design.Uranus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (10).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Neptune && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Neptune?.Gate ===
																	secondData?.data?.Design?.Neptune?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Neptune.Gate}.
															{data.data.Design.Neptune.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (11).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!data?.data?.Design?.Pluto && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Pluto?.Gate ===
																	secondData?.data?.Design?.Pluto?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Pluto.Gate}.
															{data.data.Design.Pluto.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (12).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='comparison-user-info'>
										<div className='user-info-name'>{secondUserName}</div>
										<div className='comparison-user-gates'>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Sun && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Sun?.Gate ===
																	secondData?.data?.Design?.Sun?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Sun.Gate}.
															{secondData.data.Design.Sun.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (0).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Earth && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Earth?.Gate ===
																	secondData?.data?.Design?.Earth?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Earth.Gate}.
															{secondData.data.Design.Earth.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (1).png'
														alt=''
														className='w12x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Moon && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Moon?.Gate ===
																	secondData?.data?.Design?.Moon?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Moon.Gate}.
															{secondData.data.Design.Moon.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (2).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.['North Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design['North Node']?.Gate ===
																	secondData?.data?.Design?.['North Node']?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design['North Node'].Gate}.
															{secondData.data.Design['North Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (3).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.['South Node'] && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design['South Node']?.Gate ===
																	secondData?.data?.Design?.['South Node']?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design['South Node'].Gate}.
															{secondData.data.Design['South Node'].Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (4).png'
														alt=''
														className='w10x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Mercury && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Mercury?.Gate ===
																	secondData?.data?.Design?.Mercury?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Mercury.Gate}.
															{secondData.data.Design.Mercury.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (5).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Venus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Venus?.Gate ===
																	secondData?.data?.Design?.Venus?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Venus.Gate}.
															{secondData.data.Design.Venus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (6).png'
														alt=''
														className='w7x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Mars && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Mars?.Gate ===
																	secondData?.data?.Design?.Mars?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Mars.Gate}.
															{secondData.data.Design.Mars.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (7).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Jupiter && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Jupiter?.Gate ===
																	secondData?.data?.Design?.Jupiter?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Jupiter.Gate}.
															{secondData.data.Design.Jupiter.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (8).png'
														alt=''
														className='w10x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Saturn && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Saturn?.Gate ===
																	secondData?.data?.Design?.Saturn?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Saturn.Gate}.
															{secondData.data.Design.Saturn.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (9).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Uranus && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Uranus?.Gate ===
																	secondData?.data?.Design?.Uranus?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Uranus.Gate}.
															{secondData.data.Design.Uranus.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (10).png'
														alt=''
														className='w8x10'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Neptune && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Neptune?.Gate ===
																	secondData?.data?.Design?.Neptune?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{secondData.data.Design.Neptune.Gate}.
															{secondData.data.Design.Neptune.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (11).png'
														alt=''
														className='w9x12'
													/>
												</div>
											</div>
											<div className='user-info-gates'>
												<div className='gate-number'>
													{!!secondData?.data?.Design?.Pluto && (
														<div
															className='column-number gate-number'
															style={{
																color:
																	data.data.Design.Pluto?.Gate ===
																	secondData?.data?.Design?.Pluto?.Gate
																		? '#B6053A'
																		: '',
															}}
														>
															{data.data.Design.Pluto.Gate}.
															{data.data.Design.Pluto.Line}
														</div>
													)}
												</div>
												<div className='gate-icon'>
													<img
														src='/images/Layer_1 (12).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='users-rave-card'>
								<div className='first-rave-card'>
									<div className='rave-card-title'>{userName}'s rave card</div>
									<img
										src='/images/Group 30 (2).png'
										alt=''
										width={'181px'}
										height={'222px'}
									/>
									<div className='comparison-gate-numbers'>
										<div className='grey-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-64'
													style={{
														color: gate.includes(64) ? 'black' : '#E2E2E2',
														// border:'1px solid',
														// borderRadius:'100px',
														// padding: '1px'
													}}
												>
													64
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-61'
													style={{
														color: gate.includes(61) ? 'black' : '#E2E2E2',
													}}
												>
													61
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-63'
													style={{
														color: gate.includes(63) ? 'black' : '#E2E2E2',
													}}
												>
													63
												</div>
											))}
										</div>
										<div className='green-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-47'
													style={{
														color: gate.includes(47) ? 'black' : '#E2E2E2',
													}}
												>
													47
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-24'
													style={{
														color: gate.includes(24) ? 'black' : '#E2E2E2',
													}}
												>
													24
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-4'
													style={{
														color: gate.includes(4) ? 'black' : '#E2E2E2',
													}}
												>
													4
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-17'
													style={{
														color: gate.includes(17) ? 'black' : '#E2E2E2',
													}}
												>
													17
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-11'
													style={{
														color: gate.includes(11) ? 'black' : '#E2E2E2',
													}}
												>
													11
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-43'
													style={{
														color: gate.includes(43) ? 'black' : '#E2E2E2',
													}}
												>
													43
												</div>
											))}
										</div>
										<div className='blue-hexagon'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-23'
													style={{
														color: gate.includes(23) ? 'black' : '#E2E2E2',
													}}
												>
													23
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-56'
													style={{
														color: gate.includes(56) ? 'black' : '#E2E2E2',
													}}
												>
													56
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-35'
													style={{
														color: gate.includes(35) ? 'black' : '#E2E2E2',
													}}
												>
													35
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-12'
													style={{
														color: gate.includes(12) ? 'black' : '#E2E2E2',
													}}
												>
													12
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-45'
													style={{
														color: gate.includes(45) ? 'black' : '#E2E2E2',
													}}
												>
													45
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-33'
													style={{
														color: gate.includes(33) ? 'black' : '#E2E2E2',
													}}
												>
													33
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-8'
													style={{
														color: gate.includes(8) ? 'black' : '#E2E2E2',
													}}
												>
													8
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-31'
													style={{
														color: gate.includes(31) ? 'black' : '#E2E2E2',
													}}
												>
													31
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-20'
													style={{
														color: gate.includes(20) ? 'black' : '#E2E2E2',
													}}
												>
													20
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-16'
													style={{
														color: gate.includes(16) ? 'black' : '#E2E2E2',
													}}
												>
													16
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-62'
													style={{
														color: gate.includes(62) ? 'black' : '#E2E2E2',
													}}
												>
													62
												</div>
											))}
										</div>
										<div className='yellow-rhomb'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-1'
													style={{
														color: gate.includes(1) ? 'black' : '#E2E2E2',
													}}
												>
													1
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-13'
													style={{
														color: gate.includes(13) ? 'black' : '#E2E2E2',
													}}
												>
													13
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-25'
													style={{
														color: gate.includes(25) ? 'black' : '#E2E2E2',
													}}
												>
													25
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-46'
													style={{
														color: gate.includes(46) ? 'black' : '#E2E2E2',
													}}
												>
													46
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-2'
													style={{
														color: gate.includes(2) ? 'black' : '#E2E2E2',
													}}
												>
													2
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-15'
													style={{
														color: gate.includes(15) ? 'black' : '#E2E2E2',
													}}
												>
													15
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-10'
													style={{
														color: gate.includes(10) ? 'black' : '#E2E2E2',
													}}
												>
													10
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-7'
													style={{
														color: gate.includes(7) ? 'black' : '#E2E2E2',
													}}
												>
													7
												</div>
											))}
										</div>
										<div className='gray-triangle-2'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-21'
													style={{
														color: gate.includes(21) ? 'black' : '#E2E2E2',
													}}
												>
													21
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-51'
													style={{
														color: gate.includes(51) ? 'black' : '#E2E2E2',
													}}
												>
													51
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-26'
													style={{
														color: gate.includes(26) ? 'black' : '#E2E2E2',
													}}
												>
													26
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-40'
													style={{
														color: gate.includes(40) ? 'black' : '#E2E2E2',
													}}
												>
													40
												</div>
											))}
										</div>
										<div className='orange-circle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-14'
													style={{
														color: gate.includes(14) ? 'black' : '#E2E2E2',
													}}
												>
													14
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-29'
													style={{
														color: gate.includes(29) ? 'black' : '#E2E2E2',
													}}
												>
													29
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-59'
													style={{
														color: gate.includes(59) ? 'black' : '#E2E2E2',
													}}
												>
													59
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-9'
													style={{
														color: gate.includes(9) ? 'black' : '#E2E2E2',
													}}
												>
													9
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-3'
													style={{
														color: gate.includes(3) ? 'black' : '#E2E2E2',
													}}
												>
													3
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-42'
													style={{
														color: gate.includes(42) ? 'black' : '#E2E2E2',
													}}
												>
													42
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-27'
													style={{
														color: gate.includes(27) ? 'black' : '#E2E2E2',
													}}
												>
													27
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-34'
													style={{
														color: gate.includes(34) ? 'black' : '#E2E2E2',
													}}
												>
													34
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-5'
													style={{
														color: gate.includes(5) ? 'black' : '#E2E2E2',
													}}
												>
													5
												</div>
											))}
										</div>
										<div className='orange-circle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-14'
													style={{
														color: gate.includes(14) ? 'black' : '#E2E2E2',
													}}
												>
													14
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-29'
													style={{
														color: gate.includes(29) ? 'black' : '#E2E2E2',
													}}
												>
													29
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-59'
													style={{
														color: gate.includes(59) ? 'black' : '#E2E2E2',
													}}
												>
													59
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-9'
													style={{
														color: gate.includes(9) ? 'black' : '#E2E2E2',
													}}
												>
													9
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-3'
													style={{
														color: gate.includes(3) ? 'black' : '#E2E2E2',
													}}
												>
													3
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-42'
													style={{
														color: gate.includes(42) ? 'black' : '#E2E2E2',
													}}
												>
													42
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-27'
													style={{
														color: gate.includes(27) ? 'black' : '#E2E2E2',
													}}
												>
													27
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-34'
													style={{
														color: gate.includes(34) ? 'black' : '#E2E2E2',
													}}
												>
													34
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-5'
													style={{
														color: gate.includes(5) ? 'black' : '#E2E2E2',
													}}
												>
													5
												</div>
											))}
										</div>
										<div className='grey-triangle-3'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-48'
													style={{
														color: gate.includes(48) ? 'black' : '#E2E2E2',
													}}
												>
													48
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-57'
													style={{
														color: gate.includes(57) ? 'black' : '#E2E2E2',
													}}
												>
													57
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-44'
													style={{
														color: gate.includes(44) ? 'black' : '#E2E2E2',
													}}
												>
													44
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-50'
													style={{
														color: gate.includes(50) ? 'black' : '#E2E2E2',
													}}
												>
													50
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-32'
													style={{
														color: gate.includes(32) ? 'black' : '#E2E2E2',
													}}
												>
													32
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-28'
													style={{
														color: gate.includes(28) ? 'black' : '#E2E2E2',
													}}
												>
													28
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-18'
													style={{
														color: gate.includes(18) ? 'black' : '#E2E2E2',
													}}
												>
													18
												</div>
											))}
										</div>
										<div className='blue-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-36'
													style={{
														color: gate.includes(36) ? 'black' : '#E2E2E2',
													}}
												>
													36
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-22'
													style={{
														color: gate.includes(22) ? 'black' : '#E2E2E2',
													}}
												>
													22
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-37'
													style={{
														color: gate.includes(37) ? 'black' : '#E2E2E2',
													}}
												>
													37
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-6'
													style={{
														color: gate.includes(6) ? 'black' : '#E2E2E2',
													}}
												>
													6
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-49'
													style={{
														color: gate.includes(49) ? 'black' : '#E2E2E2',
													}}
												>
													49
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-55'
													style={{
														color: gate.includes(55) ? 'black' : '#E2E2E2',
													}}
												>
													55
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-30'
													style={{
														color: gate.includes(30) ? 'black' : '#E2E2E2',
													}}
												>
													30
												</div>
											))}
										</div>
										<div className='blue-square'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-60'
													style={{
														color: gate.includes(60) ? 'black' : '#E2E2E2',
													}}
												>
													60
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-52'
													style={{
														color: gate.includes(52) ? 'black' : '#E2E2E2',
													}}
												>
													52
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-19'
													style={{
														color: gate.includes(19) ? 'black' : '#E2E2E2',
													}}
												>
													19
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-39'
													style={{
														color: gate.includes(39) ? 'black' : '#E2E2E2',
													}}
												>
													39
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-41'
													style={{
														color: gate.includes(41) ? 'black' : '#E2E2E2',
													}}
												>
													41
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-58'
													style={{
														color: gate.includes(58) ? 'black' : '#E2E2E2',
													}}
												>
													58
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-38'
													style={{
														color: gate.includes(38) ? 'black' : '#E2E2E2',
													}}
												>
													38
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-54'
													style={{
														color: gate.includes(54) ? 'black' : '#E2E2E2',
													}}
												>
													54
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-53'
													style={{
														color: gate.includes(53) ? 'black' : '#E2E2E2',
													}}
												>
													53
												</div>
											))}
										</div>
									</div>
								</div>
								<div className='second-rave-card'>
									<div className='rave-card-title'>
										{secondUserName}'s rave card
									</div>
									<img
										src='/images/Group 30 (2).png'
										alt=''
										width={'181px'}
										height={'222px'}
									/>
									<div className='comparison-gate-numbers'>
										<div className='grey-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-64'
													style={{
														color: secondGate.includes(64)
															? 'black'
															: '#E2E2E2',
														// border:'1px solid',
														// borderRadius:'100px',
														// padding: '1px'
													}}
												>
													64
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-61'
													style={{
														color: secondGate.includes(61)
															? 'black'
															: '#E2E2E2',
													}}
												>
													61
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-63'
													style={{
														color: secondGate.includes(63)
															? 'black'
															: '#E2E2E2',
													}}
												>
													63
												</div>
											))}
										</div>
										<div className='green-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-47'
													style={{
														color: secondGate.includes(47)
															? 'black'
															: '#E2E2E2',
													}}
												>
													47
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-24'
													style={{
														color: gate.includes(24) ? 'black' : '#E2E2E2',
													}}
												>
													24
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-4'
													style={{
														color: secondGate.includes(4) ? 'black' : '#E2E2E2',
													}}
												>
													4
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-17'
													style={{
														color: secondGate.includes(17)
															? 'black'
															: '#E2E2E2',
													}}
												>
													17
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-11'
													style={{
														color: secondGate.includes(11)
															? 'black'
															: '#E2E2E2',
													}}
												>
													11
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-43'
													style={{
														color: secondGate.includes(43)
															? 'black'
															: '#E2E2E2',
													}}
												>
													43
												</div>
											))}
										</div>
										<div className='blue-hexagon'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-23'
													style={{
														color: secondGate.includes(23)
															? 'black'
															: '#E2E2E2',
													}}
												>
													23
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-56'
													style={{
														color: secondGate.includes(56)
															? 'black'
															: '#E2E2E2',
													}}
												>
													56
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-35'
													style={{
														color: secondGate.includes(35)
															? 'black'
															: '#E2E2E2',
													}}
												>
													35
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-12'
													style={{
														color: secondGate.includes(12)
															? 'black'
															: '#E2E2E2',
													}}
												>
													12
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-45'
													style={{
														color: secondGate.includes(45)
															? 'black'
															: '#E2E2E2',
													}}
												>
													45
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-33'
													style={{
														color: secondGate.includes(33)
															? 'black'
															: '#E2E2E2',
													}}
												>
													33
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-8'
													style={{
														color: secondGate.includes(8) ? 'black' : '#E2E2E2',
													}}
												>
													8
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-31'
													style={{
														color: secondGate.includes(31)
															? 'black'
															: '#E2E2E2',
													}}
												>
													31
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-20'
													style={{
														color: secondGate.includes(20)
															? 'black'
															: '#E2E2E2',
													}}
												>
													20
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-16'
													style={{
														color: secondGate.includes(16)
															? 'black'
															: '#E2E2E2',
													}}
												>
													16
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-62'
													style={{
														color: secondGate.includes(62)
															? 'black'
															: '#E2E2E2',
													}}
												>
													62
												</div>
											))}
										</div>
										<div className='yellow-rhomb'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-1'
													style={{
														color: secondGate.includes(1) ? 'black' : '#E2E2E2',
													}}
												>
													1
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-13'
													style={{
														color: secondGate.includes(13)
															? 'black'
															: '#E2E2E2',
													}}
												>
													13
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-25'
													style={{
														color: secondGate.includes(25)
															? 'black'
															: '#E2E2E2',
													}}
												>
													25
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-46'
													style={{
														color: secondGate.includes(46)
															? 'black'
															: '#E2E2E2',
													}}
												>
													46
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-2'
													style={{
														color: secondGate.includes(2) ? 'black' : '#E2E2E2',
													}}
												>
													2
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-15'
													style={{
														color: secondGate.includes(15)
															? 'black'
															: '#E2E2E2',
													}}
												>
													15
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-10'
													style={{
														color: secondGate.includes(10)
															? 'black'
															: '#E2E2E2',
													}}
												>
													10
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-7'
													style={{
														color: secondGate.includes(7) ? 'black' : '#E2E2E2',
													}}
												>
													7
												</div>
											))}
										</div>
										<div className='gray-triangle-2'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-21'
													style={{
														color: secondGate.includes(21)
															? 'black'
															: '#E2E2E2',
													}}
												>
													21
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-51'
													style={{
														color: secondGate.includes(51)
															? 'black'
															: '#E2E2E2',
													}}
												>
													51
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-26'
													style={{
														color: secondGate.includes(26)
															? 'black'
															: '#E2E2E2',
													}}
												>
													26
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-40'
													style={{
														color: secondGate.includes(40)
															? 'black'
															: '#E2E2E2',
													}}
												>
													40
												</div>
											))}
										</div>
										<div className='orange-circle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-14'
													style={{
														color: secondGate.includes(14)
															? 'black'
															: '#E2E2E2',
													}}
												>
													14
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-29'
													style={{
														color: secondGate.includes(29)
															? 'black'
															: '#E2E2E2',
													}}
												>
													29
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-59'
													style={{
														color: secondGate.includes(59)
															? 'black'
															: '#E2E2E2',
													}}
												>
													59
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-9'
													style={{
														color: secondGate.includes(9) ? 'black' : '#E2E2E2',
													}}
												>
													9
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-3'
													style={{
														color: secondGate.includes(3) ? 'black' : '#E2E2E2',
													}}
												>
													3
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-42'
													style={{
														color: secondGate.includes(42)
															? 'black'
															: '#E2E2E2',
													}}
												>
													42
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-27'
													style={{
														color: secondGate.includes(27)
															? 'black'
															: '#E2E2E2',
													}}
												>
													27
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-34'
													style={{
														color: secondGate.includes(34)
															? 'black'
															: '#E2E2E2',
													}}
												>
													34
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-5'
													style={{
														color: secondGate.includes(5) ? 'black' : '#E2E2E2',
													}}
												>
													5
												</div>
											))}
										</div>
										<div className='orange-circle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-14'
													style={{
														color: secondGate.includes(14)
															? 'black'
															: '#E2E2E2',
													}}
												>
													14
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-29'
													style={{
														color: secondGate.includes(29)
															? 'black'
															: '#E2E2E2',
													}}
												>
													29
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-59'
													style={{
														color: secondGate.includes(59)
															? 'black'
															: '#E2E2E2',
													}}
												>
													59
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-9'
													style={{
														color: secondGate.includes(9) ? 'black' : '#E2E2E2',
													}}
												>
													9
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-3'
													style={{
														color: secondGate.includes(3) ? 'black' : '#E2E2E2',
													}}
												>
													3
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-42'
													style={{
														color: secondGate.includes(42)
															? 'black'
															: '#E2E2E2',
													}}
												>
													42
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-27'
													style={{
														color: secondGate.includes(27)
															? 'black'
															: '#E2E2E2',
													}}
												>
													27
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-34'
													style={{
														color: secondGate.includes(34)
															? 'black'
															: '#E2E2E2',
													}}
												>
													34
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-5'
													style={{
														color: secondGate.includes(5) ? 'black' : '#E2E2E2',
													}}
												>
													5
												</div>
											))}
										</div>
										<div className='grey-triangle-3'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-48'
													style={{
														color: secondGate.includes(48)
															? 'black'
															: '#E2E2E2',
													}}
												>
													48
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-57'
													style={{
														color: secondGate.includes(57)
															? 'black'
															: '#E2E2E2',
													}}
												>
													57
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-44'
													style={{
														color: secondGate.includes(44)
															? 'black'
															: '#E2E2E2',
													}}
												>
													44
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-50'
													style={{
														color: secondGate.includes(50)
															? 'black'
															: '#E2E2E2',
													}}
												>
													50
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-32'
													style={{
														color: secondGate.includes(32)
															? 'black'
															: '#E2E2E2',
													}}
												>
													32
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-28'
													style={{
														color: secondGate.includes(28)
															? 'black'
															: '#E2E2E2',
													}}
												>
													28
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-18'
													style={{
														color: secondGate.includes(18)
															? 'black'
															: '#E2E2E2',
													}}
												>
													18
												</div>
											))}
										</div>
										<div className='blue-triangle'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-36'
													style={{
														color: secondGate.includes(36)
															? 'black'
															: '#E2E2E2',
													}}
												>
													36
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-22'
													style={{
														color: secondGate.includes(22)
															? 'black'
															: '#E2E2E2',
													}}
												>
													22
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-37'
													style={{
														color: secondGate.includes(37)
															? 'black'
															: '#E2E2E2',
													}}
												>
													37
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-6'
													style={{
														color: secondGate.includes(6) ? 'black' : '#E2E2E2',
													}}
												>
													6
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-49'
													style={{
														color: secondGate.includes(49)
															? 'black'
															: '#E2E2E2',
													}}
												>
													49
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-55'
													style={{
														color: secondGate.includes(55)
															? 'black'
															: '#E2E2E2',
													}}
												>
													55
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-30'
													style={{
														color: secondGate.includes(30)
															? 'black'
															: '#E2E2E2',
													}}
												>
													30
												</div>
											))}
										</div>
										<div className='blue-square'>
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-60'
													style={{
														color: secondGate.includes(60)
															? 'black'
															: '#E2E2E2',
													}}
												>
													60
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-52'
													style={{
														color: secondGate.includes(52)
															? 'black'
															: '#E2E2E2',
													}}
												>
													52
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-19'
													style={{
														color: secondGate.includes(19)
															? 'black'
															: '#E2E2E2',
													}}
												>
													19
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-39'
													style={{
														color: secondGate.includes(39)
															? 'black'
															: '#E2E2E2',
													}}
												>
													39
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-41'
													style={{
														color: secondGate.includes(41)
															? 'black'
															: '#E2E2E2',
													}}
												>
													41
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-58'
													style={{
														color: secondGate.includes(58)
															? 'black'
															: '#E2E2E2',
													}}
												>
													58
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-38'
													style={{
														color: secondGate.includes(38)
															? 'black'
															: '#E2E2E2',
													}}
												>
													38
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-54'
													style={{
														color: secondGate.includes(54)
															? 'black'
															: '#E2E2E2',
													}}
												>
													54
												</div>
											))}
											{checkNumberArr.map(number => (
												<div
													key={number}
													className='number cn-53'
													style={{
														color: secondGate.includes(53)
															? 'black'
															: '#E2E2E2',
													}}
												>
													53
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
				<footer className='footer comparison-footer'>
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
									src='/images/compatibility2.png'
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
		</div>
	)
}
