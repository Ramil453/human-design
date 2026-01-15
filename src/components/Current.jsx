import '../styles/Current.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = 'a4490367-d5b9-4e01-9f31-88a46d9481b6'

const Current = () => {
	let userPlace = localStorage.getItem('place')
	const [todayDate, setTodayDate] = useState(new Date())
	const hours = String(todayDate.getHours()).padStart(2, '0')
	const minutes = String(todayDate.getMinutes()).padStart(2, '0')
	const time = `${hours}:${minutes}`


	const url = `https://api.bodygraphchart.com/v221006/hd-data?api_key=${API_KEY}&date=${
		todayDate.toISOString().split('T')[0]
	} ${time}&timezone=Europe/Moscow`

	const [data, setData] = useState([])
	const [gate, setGate] = useState([])

	useEffect(() => {
		axios.post(url).then(data => {
			setData(data)
		})
		axios.get(url).then(gate => {
			setGate(gate.data.Gates)
			console.log(gate)
		})
	}, [])

	const checkNumberArr = [
		64, 61, 63, 47, 24, 4, 11, 43, 17, 23, 56, 35, 12, 45, 33, 8, 31, 20, 16,
		62,
	]

	return (
		<>
			<div className='relative-wrapper'>
				<div className='human-background-img'>
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
						<div className='header-title margin-bottom-20'>Сurrent Transit</div>
						<div className='current-info'>
							<div className='current-info-card'>
								{todayDate.toISOString().split('T')[0]}
							</div>
							<div className='current-info-card'>{time}</div>
							<div className='current-info-card'>{userPlace}</div>
						</div>
					</div>
					<div className='container'>
						<main className='main'>
							<div className='slider'>
								<span className='blue-line'></span>
								<Link to='/affirmation' className='grey-line'>
									<span></span>
								</Link>
							</div>
							<div className='clearfix'></div>

							<div className='main-img-text'>
								<div className='column-texts current-right-column'>
									<div className='right-column '>
										<div className='column-title'>Personality</div>
										<div className='column right-wrapper'>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Sun && (
														<div className='column-number'>
															{data.data.Personality.Sun.Gate}.
															{data.data.Personality.Sun.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-icon.png'
														alt=''
														className='w14x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Earth && (
														<div className='column-number'>
															{data.data.Personality.Earth.Gate}.
															{data.data.Personality.Earth.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector.png'
														alt=''
														className='w14x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Moon && (
														<div className='column-number'>
															{data.data.Personality.Moon.Gate}.
															{data.data.Personality.Moon.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (1).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality['North Node'] && (
														<div className='column-number'>
															{data.data.Personality['North Node'].Gate}.
															{data.data.Personality['North Node'].Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (2).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality['South Node'] && (
														<div className='column-number'>
															{data.data.Personality['South Node'].Gate}.
															{data.data.Personality['South Node'].Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (3).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Mercury && (
														<div className='column-number'>
															{data.data.Personality.Mercury.Gate}.
															{data.data.Personality.Mercury.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (4).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Venus && (
														<div className='column-number'>
															{data.data.Personality.Venus.Gate}.
															{data.data.Personality.Venus.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (5).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Mars && (
														<div className='column-number'>
															{data.data.Personality.Mars.Gate}.
															{data.data.Personality.Mars.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (6).png'
														alt=''
														className='w12x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Jupiter && (
														<div className='column-number'>
															{data.data.Personality.Jupiter.Gate}.
															{data.data.Personality.Jupiter.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (7).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Saturn && (
														<div className='column-number'>
															{data.data.Personality.Saturn.Gate}.
															{data.data.Personality.Saturn.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (8).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Uranus && (
														<div className='column-number'>
															{data.data.Personality.Uranus.Gate}.
															{data.data.Personality.Uranus.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (9).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Neptune && (
														<div className='column-number'>
															{data.data.Personality.Neptune.Gate}.
															{data.data.Personality.Neptune.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (10).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
											<div className='column-row'>
												{data.data &&
													data.data.Personality &&
													data.data.Personality.Pluto && (
														<div className='column-number'>
															{data.data.Personality.Pluto.Gate}.
															{data.data.Personality.Pluto.Line}
														</div>
													)}
												<div className='column-icon'>
													<img
														src='/images/blue-Vector (11).png'
														alt=''
														className='w10x14'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='main-img'>
								<div className='gate-numbers'>
									<div className='grey-triangle'>
										{checkNumberArr.map(number => (
											<div
												key={number}
												className='number n-64'
												style={{
													color: gate.includes(64) ? 'black' : '#E2E2E2',
												}}
											>
												64
											</div>
										))}

										{checkNumberArr.map(number => (
											<div
												key={number}
												className='number n-61'
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
												className='number n-63'
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
												className='number n-47'
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
												className='number n-24'
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
												className='number n-4'
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
												className='number n-17'
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
												className='number n-11'
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
												className='number n-43'
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
												className='number n-23'
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
												className='number n-56'
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
												className='number n-35'
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
												className='number n-12'
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
												className='number n-45'
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
												className='number n-33'
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
												className='number n-8'
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
												className='number n-31'
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
												className='number n-20'
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
												className='number n-16'
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
												className='number n-62'
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
												className='number n-1'
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
												className='number n-13'
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
												className='number n-25'
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
												className='number n-46'
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
												className='number n-2'
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
												className='number n-15'
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
												className='number n-10'
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
												className='number n-7'
												style={{
													color: gate.includes(7) ? 'black' : '#E2E2E2',
												}}
											>
												7
											</div>
										))}
									</div>
									<div className='grey-triangle-2'>
										{checkNumberArr.map(number => (
											<div
												key={number}
												className='number n-21'
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
												className='number n-51'
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
												className='number n-26'
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
												className='number n-40'
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
												className='number n-14'
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
												className='number n-29'
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
												className='number n-59'
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
												className='number n-9'
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
												className='number n-3'
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
												className='number n-42'
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
												className='number n-27'
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
												className='number n-34'
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
												className='number n-5'
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
												className='number n-48'
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
												className='number n-57'
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
												className='number n-44'
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
												className='number n-50'
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
												className='number n-32'
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
												className='number n-28'
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
												className='number n-18'
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
												className='number n-36'
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
												className='number n-22'
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
												className='number n-37'
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
												className='number n-6'
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
												className='number n-49'
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
												className='number n-55'
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
												className='number n-30'
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
												className='number n-60'
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
												className='number n-52'
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
												className='number n-19'
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
												className='number n-39'
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
												className='number n-41'
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
												className='number n-58'
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
												className='number n-38'
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
												className='number n-54'
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
												className='number n-53'
												style={{
													color: gate.includes(53) ? 'black' : '#E2E2E2',
												}}
											>
												53
											</div>
										))}
									</div>
								</div>

								<img src='/images/Group 28.png' alt='' className='main-image' />
							</div>
						</main>
					</div>
					<footer className='footer adaptive-footer'>
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
			</div>
		</>
	)
}

export default Current
