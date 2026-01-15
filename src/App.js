import './styles/App.css'
// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Interface from './components/Interface'
import Explanation from './components/Explanation'
import Explanation1 from './components/Explanation1'
import Explanation2 from './components/Explanation2'
import Purpose from './components/Purpose'
import Name from './components/Name'
import Gender from './components/Gender'
import Birth from './components/Birth'
import Time from './components/Time'
import Place from './components/Place'
import Profile from './components/Profile'
import Description from './components/Description'
import Settings from './components/Settings'
import Calculations from './components/Calculations'
import AddNewPerson from './components/AddNewPerson'
import Subscription from './components/Subscription'
import Base from './components/Base'
import GatesBase from './Base/GatesBase'
import ChannelsBase from './Base/ChannelsBase'
import CentresBase from './Base/CentresBase.jsx'
import PlanetsBase from './Base/PlanetsBase.jsx'
import ProfilesBase from './Base/ProfilesBase.jsx'
import TypesBase from './Base/TypesBase.jsx'
import Current from './components/Current.jsx'
import Affirmation from './components/Affirmation.jsx'
import Compatibility from './components/Compatibility.jsx'
import ChoosePerson from './components/ChoosePerson.jsx'
import Sense from './components/Sense.jsx'
import Gates from './components/Gates.jsx'
import Strategy from './components/Strategy.jsx'
import GatesBase1 from './GateBase/GatesBase1.jsx'
import GatesBase2 from './GateBase/GatesBase2.jsx'
import GatesBase3 from './GateBase/GatesBase3.jsx'
import GatesBase4 from './GateBase/GatesBase4.jsx'
import GatesBase5 from './GateBase/GatesBase5.jsx'
import GatesBase6 from './GateBase/GatesBase6.jsx'
import ChannelBase1 from './ChannelBase/ChannelBase1.jsx'
import ChannelBase2 from './ChannelBase/ChannelBase2.jsx'
import ChannelBase3 from './ChannelBase/ChannelBase3.jsx'
import ChannelBase4 from './ChannelBase/ChannelBase4.jsx'
import ChannelBase5 from './ChannelBase/ChannelBase5.jsx'
import ChannelBase6 from './ChannelBase/ChannelBase6.jsx'
import CentresBase1 from './CentresBase/CentresBase1.jsx'
import CentresBase2 from './CentresBase/CentresBase2.jsx'
import CentresBase3 from './CentresBase/CentresBase3.jsx'
import CentresBase4 from './CentresBase/CentresBase4.jsx'
import CentresBase5 from './CentresBase/CentresBase5.jsx'
import CentresBase6 from './CentresBase/CentresBase6.jsx'
import TypesBase1 from './TypesBase/TypesBase1.jsx'
import TypesBase2 from './TypesBase/TypesBase2.jsx'
import TypesBase3 from './TypesBase/TypesBase3.jsx'
import TypesBase4 from './TypesBase/TypesBase4.jsx'
import TypesBase5 from './TypesBase/TypesBase5.jsx'
import TypesBase6 from './TypesBase/TypesBase6.jsx'
import ProfilesBase1 from './ProfilesBase/ProfilesBase1.jsx'
import ProfilesBase2 from './ProfilesBase/ProfilesBase2.jsx'
import ProfilesBase3 from './ProfilesBase/ProfilesBase3.jsx'
import ProfilesBase4 from './ProfilesBase/ProfilesBase4.jsx'
import ProfilesBase5 from './ProfilesBase/ProfilesBase5.jsx'
import ProfilesBase6 from './ProfilesBase/ProfilesBase6.jsx'
import PlanetsBase1 from './PlanetsBase/PlanetsBase1.jsx'
import PlanetsBase2 from './PlanetsBase/PlanetsBase2.jsx'
import PlanetsBase3 from './PlanetsBase/PlanetsBase3.jsx'
import PlanetsBase4 from './PlanetsBase/PlanetsBase4.jsx'
import PlanetsBase5 from './PlanetsBase/PlanetsBase5.jsx'
import PlanetsBase6 from './PlanetsBase/PlanetsBase6.jsx'
import Comparison from './components/Comparison.jsx'
import CompatibilityUsers from './components/CompatibilityUsers.jsx'
import Profile2 from './components/Profile2.jsx'
import InternalAuthorities from './Base/InternalAuthorities.jsx'
import Generators from './Base/Generators.jsx'
import Manifestors from './Base/Manifestors.jsx'
import Projectors from './Base/Projectors.jsx'
import Reflectors from './Base/Reflectors.jsx'
import ManifestingGenerators from './Base/ManifestingGenerators.jsx'


// import TypeInformation from './components/TypeInformation'
// import SenseInformation from './components/SenseInformation'
// import StrategyInformation from './components/StrategyInformation'
// import GatesInformation from './components/GatesInformation'
// import GatesBase2 from './Base/GateBase2.jsx'

function App() {

  const [userData, setUserData] = useState({ name: '', birthday: '' })
  const [secondUserData, setSecondUserData] = useState({ secondName: '', secondBirthday: '' })
  const [sharedName, setSharedName] = useState('')
  const [sharedSecondName, setSharedSecondName] = useState('')

	const updateUserData = data => {
		setUserData(data)
	}

	const updateSecondUserData = secondData => {
		setSecondUserData(secondData)
	}

	const handleNameChange = (name) => {
		setSharedName(name)
	}

	const handleSecondNameChange = (name) => {
		setSharedSecondName(name)
	}

	return (
		<div className='App'>

				<Routes>
					<Route path='/' element={<Interface />} />
					<Route path='/explanation' element={<Explanation />} />
					<Route path='/explanation1' element={<Explanation1 />} />
					<Route path='/explanation2' element={<Explanation2 />} />
					<Route path='/purpose' element={<Purpose />} />
					<Route path='/name' element={<Name />} />
					<Route path='/gender' element={<Gender />} />
					<Route path='/birth' element={<Birth />} />
					<Route path='/time' element={<Time />} />
					<Route path='/place' element={<Place />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/description' element={<Description />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/calculations' element={<Calculations />} />
					<Route path='/new' element={<AddNewPerson />} />
					<Route path='/subscription' element={<Subscription />} />
					<Route path='/base' element={<Base />} />
					<Route path='/gatesBase' element={<GatesBase />} />
					<Route path='/channelsBase' element={<ChannelsBase />} />
					<Route path='/centresBase' element={<CentresBase />} />
					<Route path='/planetsBase' element={<PlanetsBase />} />
					<Route path='/profilesBase' element={<ProfilesBase />} />
					<Route path='/typesBase' element={<TypesBase />} />
					<Route path='/current' element={<Current />} />
					<Route path='/affirmation' element={<Affirmation />} />
					<Route
						path='/compatibility'
						element={
							<Compatibility
								userData={userData}
								secondUserData={secondUserData}
								onSharedName={handleNameChange}
								onSharedSecondName={handleSecondNameChange}
							/>
						}
					/>
					<Route
						path='/choose'
						element={
							<ChoosePerson
								onUpdate={updateUserData}
								onSecondUpdate={updateSecondUserData}
							/>
						}
					/>
					<Route path='/sense' element={<Sense />} />
					<Route path='/gates' element={<Gates />} />
					<Route path='/strategy' element={<Strategy />} />
					<Route path='/gatesBase1' element={<GatesBase1 />} />
					<Route path='/gatesBase2' element={<GatesBase2 />} />
					<Route path='/gatesBase3' element={<GatesBase3 />} />
					<Route path='/gatesBase4' element={<GatesBase4 />} />
					<Route path='/gatesBase5' element={<GatesBase5 />} />
					<Route path='/gatesBase6' element={<GatesBase6 />} />
					<Route path='/channelBase1' element={<ChannelBase1 />} />
					<Route path='/channelBase2' element={<ChannelBase2 />} />
					<Route path='/channelBase3' element={<ChannelBase3 />} />
					<Route path='/channelBase4' element={<ChannelBase4 />} />
					<Route path='/channelBase5' element={<ChannelBase5 />} />
					<Route path='/channelBase6' element={<ChannelBase6 />} />
					<Route path='/centresBase1' element={<CentresBase1 />} />
					<Route path='/centresBase2' element={<CentresBase2 />} />
					<Route path='/centresBase3' element={<CentresBase3 />} />
					<Route path='/centresBase4' element={<CentresBase4 />} />
					<Route path='/centresBase5' element={<CentresBase5 />} />
					<Route path='/centresBase6' element={<CentresBase6 />} />
					<Route path='/typesBase1' element={<TypesBase1 />} />
					<Route path='/typesBase2' element={<TypesBase2 />} />
					<Route path='/typesBase3' element={<TypesBase3 />} />
					<Route path='/typesBase4' element={<TypesBase4 />} />
					<Route path='/typesBase5' element={<TypesBase5 />} />
					<Route path='/typesBase6' element={<TypesBase6 />} />
					<Route path='/profilesBase1' element={<ProfilesBase1 />} />
					<Route path='/profilesBase2' element={<ProfilesBase2 />} />
					<Route path='/profilesBase3' element={<ProfilesBase3 />} />
					<Route path='/profilesBase4' element={<ProfilesBase4 />} />
					<Route path='/profilesBase5' element={<ProfilesBase5 />} />
					<Route path='/profilesBase6' element={<ProfilesBase6 />} />
					<Route path='/planetsBase1' element={<PlanetsBase1 />} />
					<Route path='/planetsBase2' element={<PlanetsBase2 />} />
					<Route path='/planetsBase3' element={<PlanetsBase3 />} />
					<Route path='/planetsBase4' element={<PlanetsBase4 />} />
					<Route path='/planetsBase5' element={<PlanetsBase5 />} />
					<Route path='/planetsBase6' element={<PlanetsBase6 />} />
					<Route
						path='/comparison'
						element={
							<Comparison
								sharedUserName={sharedName}
								sharedSecondUserName={sharedSecondName}
							/>
						}
					/>
					<Route path='/compatibilityUsers' element={<CompatibilityUsers />} />
					<Route path='/profile2' element={<Profile2 />} />
					<Route
						path='/internalAuthorities'
						element={<InternalAuthorities />}
					/>
					<Route path='/generators' element={<Generators />} />
					<Route path='/manifestors' element={<Manifestors />} />
					<Route path='/projectors' element={<Projectors />} />
					<Route path='/reflectors' element={<Reflectors />} />
					<Route
						path='/manifestingGenerators'
						element={<ManifestingGenerators />}
					/>
				</Routes>

		</div>
	)
}

export default App
