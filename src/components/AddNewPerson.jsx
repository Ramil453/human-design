import { Link } from 'react-router-dom';
import '../styles/AddNewPerson.css';
import Select from 'react-select';
import { useState } from 'react';

const AddNewPerson = () => {

	function addNewPerson () {
		localStorage.setItem('newName', document.querySelector('.person-new-name').value)
		localStorage.setItem('newDate', document.querySelector('.person-new-date').value)
		localStorage.setItem('newPlace', document.querySelector('.person-new-place').value)
		localStorage.setItem('newTime', document.querySelector('.person-new-time').value)
		localStorage.setItem('newGender', document.querySelector('.person-new-gender').value)
	}

	const carBrands = [
		{ value: 'new_york', label: 'New York' },
		{ value: 'los_angeles', label: 'Los Angeles' },
		{ value: 'chicago', label: 'Chicago' },
		{ value: 'houston', label: 'Houston' },
		{ value: 'phoenix', label: 'Phoenix' },
		{ value: 'philadelphia', label: 'Philadelphia' },
		{ value: 'san_antonio', label: 'San Antonio' },
		{ value: 'san_diego', label: 'San Diego' },
		{ value: 'dallas', label: 'Dallas' },
		{ value: 'san_jose', label: 'San Jose' },
		{ value: 'austin', label: 'Austin' },
		{ value: 'jacksonville', label: 'Jacksonville' },
		{ value: 'fort_worth', label: 'Fort Worth' },
		{ value: 'columbus', label: 'Columbus' },
		{ value: 'charlotte', label: 'Charlotte' },
		{ value: 'san_francisco', label: 'San Francisco' },
		{ value: 'indianapolis', label: 'Indianapolis' },
		{ value: 'seattle', label: 'Seattle' },
		{ value: 'denver', label: 'Denver' },
		{ value: 'washington_dc', label: 'Washington D.C.' },
		{ value: 'boston', label: 'Boston' },
		{ value: 'el_paso', label: 'El Paso' },
		{ value: 'nashville', label: 'Nashville' },
		{ value: 'detroit', label: 'Detroit' },
		{ value: 'oklahoma_city', label: 'Oklahoma City' },
		{ value: 'portland', label: 'Portland' },
		{ value: 'las_vegas', label: 'Las Vegas' },
		{ value: 'memphis', label: 'Memphis' },
		{ value: 'louisville', label: 'Louisville' },
		{ value: 'milwaukee', label: 'Milwaukee' },
		{ value: 'albuquerque', label: 'Albuquerque' },
		{ value: 'tucson', label: 'Tucson' },
		{ value: 'fresno', label: 'Fresno' },
		{ value: 'sacramento', label: 'Sacramento' },
		{ value: 'long_beach', label: 'Long Beach' },
		{ value: 'kansas_city', label: 'Kansas City' },
		{ value: 'mesa', label: 'Mesa' },
		{ value: 'virginia_beach', label: 'Virginia Beach' },
		{ value: 'atlanta', label: 'Atlanta' },
		{ value: 'colorado_springs', label: 'Colorado Springs' },
		{ value: 'omaha', label: 'Omaha' },
		{ value: 'raleigh', label: 'Raleigh' },
		{ value: 'miami', label: 'Miami' },
		{ value: 'cleveland', label: 'Cleveland' },
		{ value: 'tulsa', label: 'Tulsa' },
		{ value: 'oakland', label: 'Oakland' },
		{ value: 'minneapolis', label: 'Minneapolis' },
		{ value: 'wichita', label: 'Wichita' },
		{ value: 'arlington', label: 'Arlington' },
		{ value: 'new_orleans', label: 'New Orleans' },
		{ value: 'bakersfield', label: 'Bakersfield' },
		{ value: 'tampa', label: 'Tampa' },
		{ value: 'honolulu', label: 'Honolulu' },
		{ value: 'anaheim', label: 'Anaheim' },
		{ value: 'aurora', label: 'Aurora' },
		{ value: 'santa_ana', label: 'Santa Ana' },
		{ value: 'st_louis', label: 'St. Louis' },
		{ value: 'pittsburgh', label: 'Pittsburgh' },
		{ value: 'Corpus_christi', label: 'Corpus Christi' },
		{ value: 'riverside', label: 'Riverside' },
		{ value: 'cincinnati', label: 'Cincinnati' },
		{ value: 'lexington', label: 'Lexington' },
		{ value: 'anchorage', label: 'Anchorage' },
		{ value: 'stockton', label: 'Stockton' },
		{ value: 'henderson', label: 'Henderson' },
		{ value: 'greensboro', label: 'Greensboro' },
		{ value: 'plano', label: 'Plano' },
		{ value: 'newark', label: 'Newark' },
		{ value: 'toledo', label: 'Toledo' },
		{ value: 'orlando', label: 'Orlando' },
		{ value: 'chula_vista', label: 'Chula Vista' },
		{ value: 'irvine', label: 'Irvine' },
		{ value: 'fremont', label: 'Fremont' },
		{ value: 'san_bernardino', label: 'San Bernardino' },
		{ value: 'modesto', label: 'Modesto' },
		{ value: 'fontana', label: 'Fontana' },
		{ value: 'des_moines', label: 'Des Moines' },
		{ value: 'durham', label: 'Durham' },
		{ value: 'st_petersburg', label: 'St. Petersburg' },
		{ value: 'laredo', label: 'Laredo' },
		{ value: 'buffalo', label: 'Buffalo' },
		{ value: 'madison', label: 'Madison' },
		{ value: 'lubbock', label: 'Lubbock' },
		{ value: 'chandler', label: 'Chandler' },
		{ value: 'scottsdale', label: 'Scottsdale' },
		{ value: 'glendale', label: 'Glendale' },
		{ value: 'renoa', label: 'Reno' },
		{ value: 'norfolk', label: 'Norfolk' },
		{ value: 'winston_salem', label: 'Winston-Salem' },
		{ value: 'north_las_vegas', label: 'North Las Vegas' },
		{ value: 'irving', label: 'Irving' },
		{ value: 'chesapeake', label: 'Chesapeake' },
		{ value: 'gilbert', label: 'Gilbert' },
		{ value: 'hialeah', label: 'Hialeah' },
		{ value: 'garland', label: 'Garland' },
		{ value: 'frederick', label: 'Frederick' },
		{ value: 'boise', label: 'Boise' },
		{ value: 'richmond', label: 'Richmond' },
		{ value: 'mobile', label: 'Mobile' },
		{ value: 'tallahassee', label: 'Tallahassee' },
		{ value: 'grand_rapids', label: 'Grand Rapids' },
		{ value: 'overland_park', label: 'Overland Park' },
		{ value: 'salt_lake_city', label: 'Salt Lake City' },
		{ value: 'huntsville', label: 'Huntsville' },
		{ value: 'knoxville', label: 'Knoxville' },
		{ value: 'worcester', label: 'Worcester' },
		{ value: 'newport_news', label: 'Newport News' },
		{ value: 'brownsville', label: 'Brownsville' },
		{ value: 'santa_clara', label: 'Santa Clara' },
		{ value: 'cape_coral', label: 'Cape Coral' },
		{ value: 'sioux_falls', label: 'Sioux Falls' },
		{ value: 'springfield', label: 'Springfield' },
		{ value: 'salem', label: 'Salem' },
		{ value: 'corona', label: 'Corona' },
		{ value: 'eugene', label: 'Eugene' },
		{ value: 'cincinnati', label: 'Cincinnati' },
		{ value: 'fort_collins', label: 'Fort Collins' },
		{ value: 'peoria', label: 'Peoria' },
		{ value: 'ontario', label: 'Ontario' },
		{ value: 'jackson', label: 'Jackson' },
		{ value: 'elizabeth', label: 'Elizabeth' },
		{ value: 'boulder', label: 'Boulder' },
		{ value: 'gainesville', label: 'Gainesville' },
		{ value: 'lansing', label: 'Lansing' },
		{ value: 'palm_bay', label: 'Palm Bay' },
		{ value: 'buenos_aires', label: 'Buenos Aires' },
		{ value: 'sao_paulo', label: 'São Paulo' },
		{ value: 'mexico_city', label: 'Mexico City' },
		{ value: 'bogota', label: 'Bogotá' },
		{ value: 'lima', label: 'Lima' },
		{ value: 'rio_de_janeiro', label: 'Rio de Janeiro' },
		{ value: 'caracas', label: 'Caracas' },
		{ value: 'santiago', label: 'Santiago' },
		{ value: 'quito', label: 'Quito' },
		{ value: 'asuncion', label: 'Asunción' },
		{ value: 'montevideo', label: 'Montevideo' },
		{ value: 'la_paz', label: 'La Paz' },
		{ value: 'havana', label: 'Havana' },
		{ value: 'guatemala_city', label: 'Guatemala City' },
		{ value: 'san_jose', label: 'San José' },
		{ value: 'tijuana', label: 'Tijuana' },
		{ value: 'merida', label: 'Mérida' },
		{ value: 'salvador', label: 'Salvador' },
		{ value: 'recife', label: 'Recife' },
		{ value: 'cordoba', label: 'Córdoba' },
		{ value: 'puebla', label: 'Puebla' },
		{ value: 'cali', label: 'Cali' },
		{ value: 'mendoza', label: 'Mendoza' },
		{ value: 'santo_domingo', label: 'Santo Domingo' },
		{ value: 'managua', label: 'Managua' },
		{ value: 'port_au_prince', label: 'Port-au-Prince' },
		{ value: 'sucre', label: 'Sucre' },
		{ value: 'valparaiso', label: 'Valparaíso' },
		{ value: 'belo_horizonte', label: 'Belo Horizonte' },
		{ value: 'juarez', label: 'Juárez' },
		{ value: 'maracaibo', label: 'Maracaibo' },
		{ value: 'cancun', label: 'Cancún' },
		{ value: 'arica', label: 'Arica' },
		{ value: 'ciudad_del_este', label: 'Ciudad del Este' },
		{ value: 'tucuman', label: 'Tucumán' },
		{ value: 'trujillo', label: 'Trujillo' },
		{ value: 'palmira', label: 'Palmira' },
		{ value: 'neiva', label: 'Neiva' },
		{ value: 'arequipa', label: 'Arequipa' },
		{ value: 'cuenca', label: 'Cuenca' },
		{ value: 'manizales', label: 'Manizales' },
		{ value: 'cartagena', label: 'Cartagena' },
		{ value: 'santa_cruz', label: 'Santa Cruz' },
		{ value: 'maracay', label: 'Maracay' },
		{ value: 'valencia', label: 'Valencia' },
		{ value: 'barranquilla', label: 'Barranquilla' },
		{ value: 'la_plata', label: 'La Plata' },
		{ value: 'santiago_del_estrecho', label: 'Santiago del Estero' },
		{ value: 'nueva_gerona', label: 'Nueva Gerona' },
		{ value: 'santa_ana', label: 'Santa Ana' },
		{ value: 'temuco', label: 'Temuco' },
		{ value: 'cali', label: 'Cali' },
		{ value: 'cochabamba', label: 'Cochabamba' },
		{ value: 'tarija', label: 'Tarija' },
		{ value: 'potosi', label: 'Potosí' },
		{ value: 'london', label: 'London' },
		{ value: 'paris', label: 'Paris' },
		{ value: 'berlin', label: 'Berlin' },
		{ value: 'madrid', label: 'Madrid' },
		{ value: 'rome', label: 'Rome' },
		{ value: 'brussels', label: 'Brussels' },
		{ value: 'amsterdam', label: 'Amsterdam' },
		{ value: 'vienna', label: 'Vienna' },
		{ value: 'budapest', label: 'Budapest' },
		{ value: 'stockholm', label: 'Stockholm' },
		{ value: 'copenhagen', label: 'Copenhagen' },
		{ value: 'lisbon', label: 'Lisbon' },
		{ value: 'dublin', label: 'Dublin' },
		{ value: 'oslo', label: 'Oslo' },
		{ value: 'helsinki', label: 'Helsinki' },
		{ value: 'prague', label: 'Prague' },
		{ value: 'warsaw', label: 'Warsaw' },
		{ value: 'kiev', label: 'Kyiv' },
		{ value: 'zagreb', label: 'Zagreb' },
		{ value: 'sarajevo', label: 'Sarajevo' },
		{ value: 'bratislava', label: 'Bratislava' },
		{ value: 'ljubljana', label: 'Ljubljana' },
		{ value: 'tallinn', label: 'Tallinn' },
		{ value: 'riga', label: 'Riga' },
		{ value: 'vilnius', label: 'Vilnius' },
		{ value: 'sofia', label: 'Sofia' },
		{ value: 'skopje', label: 'Skopje' },
		{ value: 'belgrade', label: 'Belgrade' },
		{ value: 'podgorica', label: 'Podgorica' },
		{ value: 'pristina', label: 'Pristina' },
		{ value: 'malmo', label: 'Malmö' },
		{ value: 'gothenburg', label: 'Gothenburg' },
		{ value: 'antwerp', label: 'Antwerp' },
		{ value: 'rotterdam', label: 'Rotterdam' },
		{ value: 'munich', label: 'Munich' },
		{ value: 'frankfurt', label: 'Frankfurt' },
		{ value: 'stuttgart', label: 'Stuttgart' },
		{ value: 'hamburg', label: 'Hamburg' },
		{ value: 'cologne', label: 'Cologne' },
		{ value: 'leipzig', label: 'Leipzig' },
		{ value: 'nuremberg', label: 'Nuremberg' },
		{ value: 'bremen', label: 'Bremen' },
		{ value: 'duesseldorf', label: 'Düsseldorf' },
		{ value: 'geneva', label: 'Geneva' },
		{ value: 'lausanne', label: 'Lausanne' },
		{ value: 'nice', label: 'Nice' },
		{ value: 'marseille', label: 'Marseille' },
		{ value: 'lyon', label: 'Lyon' },
		{ value: 'valencia', label: 'Valencia' },
		{ value: 'seville', label: 'Seville' },
		{ value: 'malaga', label: 'Malaga' },
		{ value: 'bilbao', label: 'Bilbao' },
		{ value: 'porto', label: 'Porto' },
		{ value: 'braga', label: 'Braga' },
		{ value: 'toulouse', label: 'Toulouse' },
		{ value: 'nice', label: 'Nice' },
		{ value: 'strasbourg', label: 'Strasbourg' },
		{ value: 'marseille', label: 'Marseille' },
		{ value: 'catania', label: 'Catania' },
		{ value: 'palermo', label: 'Palermo' },
		{ value: 'naples', label: 'Naples' },
		{ value: 'bologna', label: 'Bologna' },
		{ value: 'florence', label: 'Florence' },
		{ value: 'milan', label: 'Milan' },
		{ value: 'turin', label: 'Turin' },
		{ value: 'genoa', label: 'Genoa' },
		{ value: 'verona', label: 'Verona' },
		{ value: 'trieste', label: 'Trieste' },
		{ value: 'bari', label: 'Bari' },
		{ value: 'catania', label: 'Catania' },
		{ value: 'palermo', label: 'Palermo' },
		{ value: 'naples', label: 'Naples' },
		{ value: 'bologna', label: 'Bologna' },
		{ value: 'florence', label: 'Florence' },
		{ value: 'catania', label: 'Catania' },
		{ value: 'nice', label: 'Nice' },
		{ value: 'marseille', label: 'Marseille' },
		{ value: 'lyon', label: 'Lyon' },
		{ value: 'toulouse', label: 'Toulouse' },
		{ value: 'strasbourg', label: 'Strasbourg' },
		{ value: 'lille', label: 'Lille' },
		{ value: 'nantes', label: 'Nantes' },
		{ value: 'montpellier', label: 'Montpellier' },
		{ value: 'bordeaux', label: 'Bordeaux' },
		{ value: 'avignon', label: 'Avignon' },
		{ value: 'reims', label: 'Reims' },
		{ value: 'gent', label: 'Ghent' },
		{ value: 'bruges', label: 'Bruges' },
		{ value: 'antwerp', label: 'Antwerp' },
		{ value: 'ghent', label: 'Ghent' },
		{ value: 'leuven', label: 'Leuven' },
		{ value: 'liege', label: 'Liège' },
		{ value: 'namur', label: 'Namur' },
		{ value: 'luxembourg_city', label: 'Luxembourg City' },
		{ value: 'tallinn', label: 'Tallinn' },
		{ value: 'riga', label: 'Riga' },
		{ value: 'vilnius', label: 'Vilnius' },
		{ value: 'kaunas', label: 'Kaunas' },
		{ value: 'klaipeda', label: 'Klaipeda' },
		{ value: 'osijek', label: 'Osijek' },
		{ value: 'split', label: 'Split' },
		{ value: 'zadar', label: 'Zadar' },
		{ value: 'pula', label: 'Pula' },
		{ value: 'ljubljana', label: 'Ljubljana' },
		{ value: 'bratislava', label: 'Bratislava' },
		{ value: 'kosice', label: 'Košice' },
		{ value: 'sibenik', label: 'Šibenik' },
		{ value: 'skopje', label: 'Skopje' },
		{ value: 'bitola', label: 'Bitola' },
		{ value: 'pristina', label: 'Pristina' },
		{ value: 'belgrade', label: 'Belgrade' },
		{ value: 'podgorica', label: 'Podgorica' },
		{ value: 'sarajevo', label: 'Sarajevo' },
		{ value: 'tiranë', label: 'Tirana' },
		{ value: 'algiers', label: 'Algiers' },
		{ value: 'catania', label: 'Catania' },
		{ value: 'bologna', label: 'Bologna' },
		{ value: 'moscow', label: 'Moscow' },
		{ value: 'saint_petersburg', label: 'Saint Petersburg' },
		{ value: 'novosibirsk', label: 'Novosibirsk' },
		{ value: 'yekaterinburg', label: 'Yekaterinburg' },
		{ value: 'nizhny_novgorod', label: 'Nizhny Novgorod' },
		{ value: 'kazan', label: 'Kazan' },
		{ value: 'chelyabinsk', label: 'Chelyabinsk' },
		{ value: 'omsk', label: 'Omsk' },
		{ value: 'samara', label: 'Samara' },
		{ value: 'rostov_on_don', label: 'Rostov-on-Don' },
		{ value: 'ufa', label: 'Ufa' },
		{ value: 'volgograd', label: 'Volgograd' },
		{ value: 'krasnoyarsk', label: 'Krasnoyarsk' },
		{ value: 'voronezh', label: 'Voronezh' },
		{ value: 'saransk', label: 'Saransk' },
		{ value: 'tula', label: 'Tula' },
		{ value: 'ryazan', label: 'Ryazan' },
		{ value: 'ivanovo', label: 'Ivanovo' },
		{ value: 'tver', label: 'Tver' },
		{ value: 'khabarovsk', label: 'Khabarovsk' },
		{ value: 'yaroslavl', label: 'Yaroslavl' },
		{ value: 'magnitogorsk', label: 'Magnitogorsk' },
		{ value: 'chita', label: 'Chita' },
		{ value: 'blagoveshchensk', label: 'Blagoveshchensk' },
		{ value: 'petrozavodsk', label: 'Petrozavodsk' },
		{ value: 'kurgan', label: 'Kurgan' },
		{ value: 'saratov', label: 'Saratov' },
		{ value: 'vladivostok', label: 'Vladivostok' },
		{ value: 'nalchik', label: 'Nalchik' },
		{ value: 'orenburg', label: 'Orenburg' },
		{ value: 'sevastopol', label: 'Sevastopol' },
		{ value: 'simferopol', label: 'Simferopol' },
		{ value: 'cherepovets', label: 'Cherepovets' },
		{ value: 'togliatti', label: 'Togliatti' },
		{ value: 'krasnodar', label: 'Krasnodar' },
		{ value: 'stavropol', label: 'Stavropol' },
		{ value: 'nizhnekamsk', label: 'Nizhnekamsk' },
		{ value: 'surgut', label: 'Surgut' },
		{ value: 'tyumen', label: 'Tyumen' },
		{ value: 'novokuznetsk', label: 'Novokuznetsk' },
		{ value: 'barnaul', label: 'Barnaul' },
		{ value: 'izhevsk', label: 'Izhevsk' },
		{ value: 'vladimir', label: 'Vladimir' },
		{ value: 'murmansk', label: 'Murmansk' },
		{ value: 'penza', label: 'Penza' },
		{ value: 'smolensk', label: 'Smolensk' },
		{ value: 'kaluga', label: 'Kaluga' },
		{ value: 'kostroma', label: 'Kostroma' },
		{ value: 'rybinsk', label: 'Rybinsk' },
		{ value: 'syktyvkar', label: 'Syktyvkar' },
		{ value: 'petropavlovsk_kamchatsky', label: 'Petropavlovsk-Kamchatsky' },
		{ value: 'komsomolsk_na_amure', label: 'Komsomolsk-na-Amure' },
		{ value: 'kolomna', label: 'Kolomna' },
		{ value: 'belgorod', label: 'Belgorod' },
		{ value: 'lipetsk', label: 'Lipetsk' },
		{ value: 'taganrog', label: 'Taganrog' },
		{ value: 'armavir', label: 'Armavir' },
		{ value: 'angarsk', label: 'Angarsk' },
		{ value: 'vyborg', label: 'Vyborg' },
		{ value: 'naberezhnye_chelny', label: 'Naberezhnye Chelny' },
		{ value: 'sochi', label: 'Sochi' },
		{ value: 'gelendzhik', label: 'Gelendzhik' },
		{ value: 'surgut', label: 'Surgut' },
		{ value: 'zelenograd', label: 'Zelenograd' },
		{ value: 'cherepovets', label: 'Cherepovets' },
		{ value: 'dzerzhinsk', label: 'Dzerzhinsk' },
		{ value: 'krasnogorsk', label: 'Krasnogorsk' },
		{ value: 'maykop', label: 'Maykop' },
		{ value: 'balashikha', label: 'Balashikha' },
		{ value: 'sergiev_posad', label: 'Sergiev Posad' },
		{ value: 'saratov', label: 'Saratov' },
		{ value: 'shchelkovo', label: 'Shchelkovo' },
		{ value: 'tikhvin', label: 'Tikhvin' },
		{ value: 'voronezh', label: 'Voronezh' },
		{ value: 'cherepovets', label: 'Cherepovets' },
		{ value: 'irkutsk', label: 'Irkutsk' },
		{ value: 'surgut', label: 'Surgut' },
		{ value: 'aerograd', label: 'Aerograd' },
		{ value: 'anapa', label: 'Anapa' },
		{ value: 'archangelsk', label: 'Archangelsk' },
		{ value: 'bryansk', label: 'Bryansk' },
		{ value: 'tver', label: 'Tver' },
		{ value: 'murmansk', label: 'Murmansk' },
		{ value: 'vologda', label: 'Vologda' },
		{ value: 'yaroslavl', label: 'Yaroslavl' },
		{ value: 'kyshtym', label: 'Kyshtym' },
		{ value: 'nalchik', label: 'Nalchik' },
		{ value: 'ozersk', label: 'Ozersk' },
		{ value: 'krasnoturyinsk', label: 'Krasnoturyinsk' },
		{ value: 'dvinsk', label: 'Dvinsk' },
		{ value: 'zelenodolsk', label: 'Zelenodolsk' },
		{ value: 'ryazan', label: 'Ryazan' },
	]


	const styles = {
		placeholder: provided => ({
			...provided,
			color: '#CFCFCF',
		}),
		singleValue: provided => ({
			...provided,
			color: '#000',
		}),
		control: provided => ({
			...provided,
			minHeight: '0px',
			height: '0px',
			border: 'none',
			color: '#fff',
			margin: '0 -10px',
			width: '200px',
		}),
		input: provided => ({
			...provided,
			margin: '0',
			color: '#fff',
			padding: '0',
		}),
		indicatorsContainer: provided => ({
			...provided,
			display: 'none',
		}),
	}

	const [selectedCar, setSelectedCar] = useState(null);
		
	const handleChange = selectedCar => {
		setSelectedCar(selectedCar)
		console.log(selectedCar)
		localStorage.setItem('place', selectedCar.label)
	}
		
	
  return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header padding-top-32'>
						<Link to='/calculations'>
							<img src='/images/Arrow2.png' alt='' />
						</Link>
					</header>
					<div className='header-title margin-bottom-75'>Add new person</div>
					<main className='main'>
						<div className='new-person-info'>
							<div className='new-person'>
								<div className='person-title'>Name or nickname</div>
								<input
									type='text'
									className='input-person person-new-name color'
									placeholder='Type name'
								/>
							</div>
							<div className='new-person'>
								<div className='person-title'>Date of birth</div>
								<input
									type='date'
									className='input-person person-new-date'
									placeholder='Select date'
								/>
							</div>
							<div className='new-person'>
								<div className='person-title'>Place of birth</div>
								<Select
									options={carBrands}
									onChange={handleChange}
									placeholder='Enter a place'
									styles={styles}
									id='place'
									className='input-person person-new-place'
								/>
							</div>
							<div className='new-person'>
								<div className='person-title'>Time of Birth</div>
								<input
									type='time'
									className='input-person person-new-time'
									placeholder='Select time'
								/>
							</div>
							<div className='new-person'>
								<div className='person-title'>Gender</div>
								<select className='input-person person-new-gender '>
									<option className='color'>Female</option>
									<option className='color'>Male</option>
									<option className='color'>Other</option>
								</select>
							</div>
						</div>

						<div className='add-person-button'>
							<Link to='/compatibility'>
								<button className='add-person-btn' onClick={addNewPerson}>
									Add and calculate
								</button>
							</Link>
						</div>
					</main>

					<div className='new-footer-img'>
						<img src='/images/Layer_22.png' alt='' />
					</div>
				</div>
			</div>
		</>
	)
}

export default AddNewPerson;