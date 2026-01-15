import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/CompatibilityUsers.css'

export default function CompatibilityUsers() {
	let userName = localStorage.getItem('name')
	let userBirth = localStorage.getItem('birth')
	let userTime = localStorage.getItem('time')
	let secondUserName = localStorage.getItem('newName')
	let secondUserBirth = localStorage.getItem('newDate')
	let secondUserTime = localStorage.getItem('newTime')
	
	const API_KEY = 'a4490367-d5b9-4e01-9f31-88a46d9481b6'

	const url = `https://api.bodygraphchart.com/v221006/hd-data?api_key=${API_KEY}&date[0]=${userBirth}%20${userTime}&timezone[0]=Europe%2FMoscow&date[1]=${secondUserBirth}%20${secondUserTime}&timezone[1]=Europe%2FMoscow&relationship=1`

	const [data, setData] = useState([])

	useEffect(() => {
		axios.post(url).then(data => {
			setData(data)
			console.log(data)
		})
	}, [])

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

					<main className='main'>
						<div className='container'>
							<div className='header-title margin-bottom-62'>
								Compatibility <br /> {userName} & {secondUserName}
							</div>
							<div className='slider margin-bottom-42'>
								<Link to='/comparison' className='grey-line'>
									<span></span>
								</Link>
								<span className='blue-line'></span>
							</div>
							<div className='compatibility-information'>
								<div className='compatibility-information-title'>
									Definition
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.Definition &&
										data.data.Combined.Properties.Definition.option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.Definition &&
										data.data.Combined.Properties.Definition.description}
								</div>
								<div className='compatibility-information-title'>
									Connection Theme
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.ConnectionTheme &&
										data.data.Combined.Properties.ConnectionTheme.option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.ConnectionTheme &&
										data.data.Combined.Properties.ConnectionTheme.description}
								</div>
								<div className='compatibility-information-title'>
									Companionship Channels
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship.list[0].option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.companionship.list[0].description}
								</div>
								<div className='compatibility-information-title'>
									Dominance Channels
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.dominance &&
										data.data.Combined.Properties.RelationshipChannels.dominance
											.list[0] &&
										data.data.Combined.Properties.RelationshipChannels.dominance
											.list[0].option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.dominance &&
										data.data.Combined.Properties.RelationshipChannels.dominance
											.list[0] &&
										data.data.Combined.Properties.RelationshipChannels.dominance
											.list[0].description}
								</div>
								<div className='compatibility-information-title'>
									Compromise Channels
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise.list[0].option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.compromise.list[0].description}
								</div>
								<div className='compatibility-information-title'>
									Electromagnetic Channels
								</div>
								<div className='compatibility-information-option'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic.list[0].option}
								</div>
								<div className='compatibility-information-description'>
									{data.data &&
										data.data.Combined &&
										data.data.Combined.Properties &&
										data.data.Combined.Properties.RelationshipChannels &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic.list[0] &&
										data.data.Combined.Properties.RelationshipChannels
											.electromagnetic.list[0].description}
								</div>
							</div>
						</div>
					</main>
				</div>
				<footer className='footer compatibility-users-footer'>
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
