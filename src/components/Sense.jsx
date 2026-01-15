import { Link } from 'react-router-dom'
import '../styles/Description.css'

const Sense = () => {
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

	return (
		<>
			<div className='background-header-img'>
				<div className='container'>
					<header className='header margin-bottom-20'>
						<Link to='/calculations'>
							<img src='/images/Vector2.png' alt='' />
						</Link>
						<div className='header-title'>Sense</div>
						<Link to='/settings'>
							<img src='/images/Frame 106.png' alt='' />
						</Link>
					</header>
					<main className='main'>
						<div className='list'>
							<ul>
								<Link to='/description'>
									<li className='color-blue'>Type</li>
								</Link>
								<Link to='/sense'>
									<li className='highlight-btn'>Sense</li>
								</Link>
								<Link to='/strategy'>
									<li className='color-blue'>Strategy</li>
								</Link>
								<Link to='/gates'>
									<li className='color-blue'>Gates</li>
								</Link>
							</ul>
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
							<div className='information-box'>
								<div className='information-text'>
									<div className='information-title'>Type</div>
									<div className='information-description'>
										Lorem ipsum dolor sit amet consectetur adipisicing...
									</div>
									<div className='additional-information-description information-description'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iusto inventore assumenda iure nulla perferendis tempore
										quidem repellendus alias, ullam cumque. Blanditiis
										voluptates eos vel quidem non dignissimos tenetur, aliquid
										illum.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down1'
										onClick={openArrow1}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top1'
										onClick={closeArrow1}
									/>
								</div>
							</div>

							<div className='information-box'>
								<div className='information-text'>
									<div className='information-title'>Sense</div>
									<div className='information-description information-description2'>
										Lorem ipsum dolor sit amet consectetur adipisicing...
									</div>
									<div className='additional-information-description2 information-description'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iusto inventore assumenda iure nulla perferendis tempore
										quidem repellendus alias, ullam cumque. Blanditiis
										voluptates eos vel quidem non dignissimos tenetur, aliquid
										illum.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down2'
										onClick={openArrow2}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top2'
										onClick={closeArrow2}
									/>
								</div>
							</div>

							<div className='information-box'>
								<div className='information-text'>
									<div className='information-title'>Strategy</div>
									<div className='information-description information-description3'>
										Lorem ipsum dolor sit amet consectetur adipisicing...
									</div>
									<div className='additional-information-description3 information-description'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iusto inventore assumenda iure nulla perferendis tempore
										quidem repellendus alias, ullam cumque. Blanditiis
										voluptates eos vel quidem non dignissimos tenetur, aliquid
										illum.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down3'
										onClick={openArrow3}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top3'
										onClick={closeArrow3}
									/>
								</div>
							</div>

							<div className='information-box'>
								<div className='information-text'>
									<div className='information-title'>Gates</div>
									<div className='information-description information-description4'>
										Lorem ipsum dolor sit amet consectetur adipisicing...
									</div>
									<div className='additional-information-description4 information-description'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iusto inventore assumenda iure nulla perferendis tempore
										quidem repellendus alias, ullam cumque. Blanditiis
										voluptates eos vel quidem non dignissimos tenetur, aliquid
										illum.
									</div>
								</div>
								<div className='generate-wrapper'>
									<img
										src='/images/Arrow-down.png'
										alt=''
										className='arrow-down arrow-down4'
										onClick={openArrow4}
									/>
									<img
										src='/images/Arrow-top.png'
										alt=''
										className='arrow-top arrow-top4'
										onClick={closeArrow4}
									/>
								</div>
							</div>
						</div>
					</main>
				</div>
				<footer className='footer'>
					<div className='container'>
						<div className='footer-images'>
							<Link to='/calculations'>
								<img src='/images/calculate.png' alt='' />
							</Link>
							<Link to='/compatibility'>
								<img src='/images/compatibility.png' alt='' />
							</Link>
							<Link to='/current'>
								<img src='/images/Insight.png' alt='' />
							</Link>
							<Link to='/base'>
								<img src='/images/knowledge.png' alt='' />
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Sense
