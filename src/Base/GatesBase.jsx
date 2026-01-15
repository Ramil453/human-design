import { Link } from 'react-router-dom'
import '../styles/Bases.css'
import { useEffect } from 'react'

const GatesBase = () => {

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
			document.querySelector('.information-description2').style.display =
				'block'
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
			document.querySelector('.information-description3').style.display =
				'block'
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
			document.querySelector('.information-description4').style.display =
				'block'
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
			document.querySelector('.information-description5').style.display =
				'block'
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
			document.querySelector('.information-description6').style.display =
				'block'
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
			document.querySelector('.information-description7').style.display =
				'block'
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
			document.querySelector('.information-description8').style.display =
				'block'
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
			document.querySelector('.information-description9').style.display =
				'block'
			document.querySelector(
				'.additional-information-description9'
			).style.display = 'none'
		}

		function openArrow10() {
			document.querySelector('.arrow-top10').style.display = 'block'
			document.querySelector('.arrow-down10').style.display = 'none'
			document.querySelector('.information-description10').style.display =
				'none'
			document.querySelector(
				'.additional-information-description10'
			).style.display = 'block'
		}

		function closeArrow10() {
			document.querySelector('.arrow-down10').style.display = 'block'
			document.querySelector('.arrow-top10').style.display = 'none'
			document.querySelector('.information-description10').style.display =
				'block'
			document.querySelector(
				'.additional-information-description10'
			).style.display = 'none'
		}

		function openArrow11() {
			document.querySelector('.arrow-top11').style.display = 'block'
			document.querySelector('.arrow-down11').style.display = 'none'
			document.querySelector('.information-description11').style.display =
				'none'
			document.querySelector(
				'.additional-information-description11'
			).style.display = 'block'
		}

		function closeArrow11() {
			document.querySelector('.arrow-down11').style.display = 'block'
			document.querySelector('.arrow-top11').style.display = 'none'
			document.querySelector('.information-description11').style.display =
				'block'
			document.querySelector(
				'.additional-information-description11'
			).style.display = 'none'
		}

		function openArrow12() {
			document.querySelector('.arrow-top12').style.display = 'block'
			document.querySelector('.arrow-down12').style.display = 'none'
			document.querySelector('.information-description12').style.display =
				'none'
			document.querySelector(
				'.additional-information-description12'
			).style.display = 'block'
		}

		function closeArrow12() {
			document.querySelector('.arrow-down12').style.display = 'block'
			document.querySelector('.arrow-top12').style.display = 'none'
			document.querySelector('.information-description12').style.display =
				'block'
			document.querySelector(
				'.additional-information-description12'
			).style.display = 'none'
		}

		function openArrow13() {
			document.querySelector('.arrow-top13').style.display = 'block'
			document.querySelector('.arrow-down13').style.display = 'none'
			document.querySelector('.information-description13').style.display =
				'none'
			document.querySelector(
				'.additional-information-description13'
			).style.display = 'block'
		}

		function closeArrow13() {
			document.querySelector('.arrow-down13').style.display = 'block'
			document.querySelector('.arrow-top13').style.display = 'none'
			document.querySelector('.information-description13').style.display =
				'block'
			document.querySelector(
				'.additional-information-description13'
			).style.display = 'none'
		}

		function openArrow14() {
			document.querySelector('.arrow-top14').style.display = 'block'
			document.querySelector('.arrow-down14').style.display = 'none'
			document.querySelector('.information-description14').style.display =
				'none'
			document.querySelector(
				'.additional-information-description14'
			).style.display = 'block'
		}

		function closeArrow14() {
			document.querySelector('.arrow-down14').style.display = 'block'
			document.querySelector('.arrow-top14').style.display = 'none'
			document.querySelector('.information-description14').style.display =
				'block'
			document.querySelector(
				'.additional-information-description14'
			).style.display = 'none'
		}

		function openArrow15() {
			document.querySelector('.arrow-top15').style.display = 'block'
			document.querySelector('.arrow-down15').style.display = 'none'
			document.querySelector('.information-description15').style.display =
				'none'
			document.querySelector(
				'.additional-information-description15'
			).style.display = 'block'
		}

		function closeArrow15() {
			document.querySelector('.arrow-down15').style.display = 'block'
			document.querySelector('.arrow-top15').style.display = 'none'
			document.querySelector('.information-description15').style.display =
				'block'
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
			document.querySelector('.information-description17').style.display =
				'none'
			document.querySelector(
				'.additional-information-description17'
			).style.display = 'block'
		}

		function closeArrow17() {
			document.querySelector('.arrow-down17').style.display = 'block'
			document.querySelector('.arrow-top17').style.display = 'none'
			document.querySelector('.information-description17').style.display =
				'block'
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
			document.querySelector('.information-description18').style.display =
				'block'
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
			document.querySelector('.information-description19').style.display =
				'block'
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
			document.querySelector('.information-description20').style.display =
				'block'
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
			document.querySelector('.information-description21').style.display =
				'block'
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
			document.querySelector('.information-description22').style.display =
				'block'
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
			document.querySelector('.information-description23').style.display =
				'block'
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
			document.querySelector('.information-description24').style.display =
				'block'
			document.querySelector(
				'.additional-information-description24'
			).style.display = 'none'
		}

		function openArrow25() {
			document.querySelector('.arrow-top25').style.display = 'block'
			document.querySelector('.arrow-down25').style.display = 'none'
			document.querySelector('.information-description25').style.display =
				'none'
			document.querySelector(
				'.additional-information-description25'
			).style.display = 'block'
		}

		function closeArrow25() {
			document.querySelector('.arrow-down25').style.display = 'block'
			document.querySelector('.arrow-top25').style.display = 'none'
			document.querySelector('.information-description25').style.display =
				'block'
			document.querySelector(
				'.additional-information-description25'
			).style.display = 'none'
		}

		function openArrow26() {
			document.querySelector('.arrow-top26').style.display = 'block'
			document.querySelector('.arrow-down26').style.display = 'none'
			document.querySelector('.information-description26').style.display =
				'none'
			document.querySelector(
				'.additional-information-description26'
			).style.display = 'block'
		}

		function closeArrow26() {
			document.querySelector('.arrow-down26').style.display = 'block'
			document.querySelector('.arrow-top26').style.display = 'none'
			document.querySelector('.information-description26').style.display =
				'block'
			document.querySelector(
				'.additional-information-description26'
			).style.display = 'none'
		}

		function openArrow27() {
			document.querySelector('.arrow-top27').style.display = 'block'
			document.querySelector('.arrow-down27').style.display = 'none'
			document.querySelector('.information-description27').style.display =
				'none'
			document.querySelector(
				'.additional-information-description27'
			).style.display = 'block'
		}

		function closeArrow27() {
			document.querySelector('.arrow-down27').style.display = 'block'
			document.querySelector('.arrow-top27').style.display = 'none'
			document.querySelector('.information-description27').style.display =
				'block'
			document.querySelector(
				'.additional-information-description27'
			).style.display = 'none'
		}

		function openArrow28() {
			document.querySelector('.arrow-top28').style.display = 'block'
			document.querySelector('.arrow-down28').style.display = 'none'
			document.querySelector('.information-description28').style.display =
				'none'
			document.querySelector(
				'.additional-information-description28'
			).style.display = 'block'
		}

		function closeArrow28() {
			document.querySelector('.arrow-down28').style.display = 'block'
			document.querySelector('.arrow-top28').style.display = 'none'
			document.querySelector('.information-description28').style.display =
				'block'
			document.querySelector(
				'.additional-information-description28'
			).style.display = 'none'
		}

		function openArrow29() {
			document.querySelector('.arrow-top29').style.display = 'block'
			document.querySelector('.arrow-down29').style.display = 'none'
			document.querySelector('.information-description29').style.display =
				'none'
			document.querySelector(
				'.additional-information-description29'
			).style.display = 'block'
		}

		function closeArrow29() {
			document.querySelector('.arrow-down29').style.display = 'block'
			document.querySelector('.arrow-top29').style.display = 'none'
			document.querySelector('.information-description29').style.display =
				'block'
			document.querySelector(
				'.additional-information-description29'
			).style.display = 'none'
		}

		function openArrow30() {
			document.querySelector('.arrow-top30').style.display = 'block'
			document.querySelector('.arrow-down30').style.display = 'none'
			document.querySelector('.information-description30').style.display =
				'none'
			document.querySelector(
				'.additional-information-description30'
			).style.display = 'block'
		}

		function closeArrow30() {
			document.querySelector('.arrow-down30').style.display = 'block'
			document.querySelector('.arrow-top30').style.display = 'none'
			document.querySelector('.information-description30').style.display =
				'block'
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
			document.querySelector('.information-description32').style.display =
				'block'
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
			document.querySelector('.information-description33').style.display =
				'block'
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
			document.querySelector('.information-description34').style.display =
				'block'
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
			document.querySelector('.information-description35').style.display =
				'block'
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
			document.querySelector('.information-description36').style.display =
				'block'
			document.querySelector(
				'.additional-information-description36'
			).style.display = 'none'
		}

		function openArrow37() {
			document.querySelector('.arrow-top37').style.display = 'block'
			document.querySelector('.arrow-down37').style.display = 'none'
			document.querySelector('.information-description37').style.display = 'none'
			document.querySelector(
				'.additional-information-description37'
			).style.display = 'block'
		}

		function closeArrow37() {
			document.querySelector('.arrow-down37').style.display = 'block'
			document.querySelector('.arrow-top37').style.display = 'none'
			document.querySelector('.information-description37').style.display =
				'block'
			document.querySelector(
				'.additional-information-description37'
			).style.display = 'none'
		}

		function openArrow38() {
			document.querySelector('.arrow-top38').style.display = 'block'
			document.querySelector('.arrow-down38').style.display = 'none'
			document.querySelector('.information-description38').style.display = 'none'
			document.querySelector(
				'.additional-information-description38'
			).style.display = 'block'
		}

		function closeArrow38() {
			document.querySelector('.arrow-down38').style.display = 'block'
			document.querySelector('.arrow-top38').style.display = 'none'
			document.querySelector('.information-description38').style.display =
				'block'
			document.querySelector(
				'.additional-information-description38'
			).style.display = 'none'
		}

		function openArrow39() {
			document.querySelector('.arrow-top39').style.display = 'block'
			document.querySelector('.arrow-down39').style.display = 'none'
			document.querySelector('.information-description39').style.display = 'none'
			document.querySelector(
				'.additional-information-description39'
			).style.display = 'block'
		}

		function closeArrow39() {
			document.querySelector('.arrow-down39').style.display = 'block'
			document.querySelector('.arrow-top39').style.display = 'none'
			document.querySelector('.information-description39').style.display =
				'block'
			document.querySelector(
				'.additional-information-description39'
			).style.display = 'none'
		}

		function openArrow40() {
			document.querySelector('.arrow-top40').style.display = 'block'
			document.querySelector('.arrow-down40').style.display = 'none'
			document.querySelector('.information-description40').style.display =
				'none'
			document.querySelector(
				'.additional-information-description40'
			).style.display = 'block'
		}

		function closeArrow40() {
			document.querySelector('.arrow-down40').style.display = 'block'
			document.querySelector('.arrow-top40').style.display = 'none'
			document.querySelector('.information-description40').style.display =
				'block'
			document.querySelector(
				'.additional-information-description40'
			).style.display = 'none'
		}

		function openArrow41() {
			document.querySelector('.arrow-top41').style.display = 'block'
			document.querySelector('.arrow-down41').style.display = 'none'
			document.querySelector('.information-description41').style.display =
				'none'
			document.querySelector(
				'.additional-information-description41'
			).style.display = 'block'
		}

		function closeArrow41() {
			document.querySelector('.arrow-down41').style.display = 'block'
			document.querySelector('.arrow-top41').style.display = 'none'
			document.querySelector('.information-description41').style.display =
				'block'
			document.querySelector(
				'.additional-information-description41'
			).style.display = 'none'
		}

		function openArrow42() {
			document.querySelector('.arrow-top42').style.display = 'block'
			document.querySelector('.arrow-down42').style.display = 'none'
			document.querySelector('.information-description42').style.display =
				'none'
			document.querySelector(
				'.additional-information-description42'
			).style.display = 'block'
		}

		function closeArrow42() {
			document.querySelector('.arrow-down42').style.display = 'block'
			document.querySelector('.arrow-top42').style.display = 'none'
			document.querySelector('.information-description42').style.display =
				'block'
			document.querySelector(
				'.additional-information-description42'
			).style.display = 'none'
		}

		function openArrow43() {
			document.querySelector('.arrow-top43').style.display = 'block'
			document.querySelector('.arrow-down43').style.display = 'none'
			document.querySelector('.information-description43').style.display =
				'none'
			document.querySelector(
				'.additional-information-description43'
			).style.display = 'block'
		}

		function closeArrow43() {
			document.querySelector('.arrow-down43').style.display = 'block'
			document.querySelector('.arrow-top43').style.display = 'none'
			document.querySelector('.information-description43').style.display =
				'block'
			document.querySelector(
				'.additional-information-description43'
			).style.display = 'none'
		}

		function openArrow44() {
			document.querySelector('.arrow-top44').style.display = 'block'
			document.querySelector('.arrow-down44').style.display = 'none'
			document.querySelector('.information-description44').style.display =
				'none'
			document.querySelector(
				'.additional-information-description44'
			).style.display = 'block'
		}

		function closeArrow44() {
			document.querySelector('.arrow-down44').style.display = 'block'
			document.querySelector('.arrow-to44').style.display = 'none'
			document.querySelector('.information-description44').style.display =
				'block'
			document.querySelector(
				'.additional-information-description44'
			).style.display = 'none'
		}

		function openArrow45() {
			document.querySelector('.arrow-top45').style.display = 'block'
			document.querySelector('.arrow-down45').style.display = 'none'
			document.querySelector('.information-description45').style.display =
				'none'
			document.querySelector(
				'.additional-information-description45'
			).style.display = 'block'
		}

		function closeArrow45() {
			document.querySelector('.arrow-down45').style.display = 'block'
			document.querySelector('.arrow-top45').style.display = 'none'
			document.querySelector('.information-description45').style.display =
				'block'
			document.querySelector(
				'.additional-information-description45'
			).style.display = 'none'
		}
		function openArrow46() {
			document.querySelector('.arrow-top46').style.display = 'block'
			document.querySelector('.arrow-down46').style.display = 'none'
			document.querySelector('.information-description46').style.display = 'none'
			document.querySelector(
				'.additional-information-description46'
			).style.display = 'block'
		}

		function closeArrow46() {
			document.querySelector('.arrow-down46').style.display = 'block'
			document.querySelector('.arrow-top46').style.display = 'none'
			document.querySelector('.information-description46').style.display = 'block'
			document.querySelector(
				'.additional-information-description46'
			).style.display = 'none'
		}

		function openArrow47() {
			document.querySelector('.arrow-top47').style.display = 'block'
			document.querySelector('.arrow-down47').style.display = 'none'
			document.querySelector('.information-description47').style.display = 'none'
			document.querySelector(
				'.additional-information-description47'
			).style.display = 'block'
		}

		function closeArrow47() {
			document.querySelector('.arrow-down47').style.display = 'block'
			document.querySelector('.arrow-top47').style.display = 'none'
			document.querySelector('.information-description47').style.display =
				'block'
			document.querySelector(
				'.additional-information-description47'
			).style.display = 'none'
		}

		function openArrow48() {
			document.querySelector('.arrow-top48').style.display = 'block'
			document.querySelector('.arrow-down48').style.display = 'none'
			document.querySelector('.information-description48').style.display = 'none'
			document.querySelector(
				'.additional-information-description48'
			).style.display = 'block'
		}

		function closeArrow48() {
			document.querySelector('.arrow-down48').style.display = 'block'
			document.querySelector('.arrow-top48').style.display = 'none'
			document.querySelector('.information-description48').style.display =
				'block'
			document.querySelector(
				'.additional-information-description48'
			).style.display = 'none'
		}

		function openArrow49() {
			document.querySelector('.arrow-top49').style.display = 'block'
			document.querySelector('.arrow-down49').style.display = 'none'
			document.querySelector('.information-description49').style.display = 'none'
			document.querySelector(
				'.additional-information-description49'
			).style.display = 'block'
		}

		function closeArrow49() {
			document.querySelector('.arrow-down49').style.display = 'block'
			document.querySelector('.arrow-top49').style.display = 'none'
			document.querySelector('.information-description49').style.display =
				'block'
			document.querySelector(
				'.additional-information-description4'
			).style.display = 'none'
		}

		function openArrow50() {
			document.querySelector('.arrow-top50').style.display = 'block'
			document.querySelector('.arrow-down50').style.display = 'none'
			document.querySelector('.information-description50').style.display = 'none'
			document.querySelector(
				'.additional-information-description50'
			).style.display = 'block'
		}

		function closeArrow50() {
			document.querySelector('.arrow-down50').style.display = 'block'
			document.querySelector('.arrow-top50').style.display = 'none'
			document.querySelector('.information-description50').style.display =
				'block'
			document.querySelector(
				'.additional-information-description50'
			).style.display = 'none'
		}

		function openArrow51() {
			document.querySelector('.arrow-top51').style.display = 'block'
			document.querySelector('.arrow-down51').style.display = 'none'
			document.querySelector('.information-description51').style.display = 'none'
			document.querySelector(
				'.additional-information-description51'
			).style.display = 'block'
		}

		function closeArrow51() {
			document.querySelector('.arrow-down51').style.display = 'block'
			document.querySelector('.arrow-top51').style.display = 'none'
			document.querySelector('.information-description51').style.display =
				'block'
			document.querySelector(
				'.additional-information-description51'
			).style.display = 'none'
		}

		function openArrow52() {
			document.querySelector('.arrow-top52').style.display = 'block'
			document.querySelector('.arrow-down52').style.display = 'none'
			document.querySelector('.information-description52').style.display = 'none'
			document.querySelector(
				'.additional-information-description52'
			).style.display = 'block'
		}

		function closeArrow52() {
			document.querySelector('.arrow-down52').style.display = 'block'
			document.querySelector('.arrow-top52').style.display = 'none'
			document.querySelector('.information-description52').style.display =
				'block'
			document.querySelector(
				'.additional-information-description52'
			).style.display = 'none'
		}

		function openArrow53() {
			document.querySelector('.arrow-top53').style.display = 'block'
			document.querySelector('.arrow-down53').style.display = 'none'
			document.querySelector('.information-description53').style.display = 'none'
			document.querySelector(
				'.additional-information-description53'
			).style.display = 'block'
		}

		function closeArrow53() {
			document.querySelector('.arrow-down53').style.display = 'block'
			document.querySelector('.arrow-top53').style.display = 'none'
			document.querySelector('.information-description53').style.display =
				'block'
			document.querySelector(
				'.additional-information-description53'
			).style.display = 'none'
		}

		function openArrow54() {
			document.querySelector('.arrow-top54').style.display = 'block'
			document.querySelector('.arrow-down54').style.display = 'none'
			document.querySelector('.information-description54').style.display = 'none'
			document.querySelector(
				'.additional-information-description54'
			).style.display = 'block'
		}

		function closeArrow54() {
			document.querySelector('.arrow-down54').style.display = 'block'
			document.querySelector('.arrow-top54').style.display = 'none'
			document.querySelector('.information-description54').style.display =
				'block'
			document.querySelector(
				'.additional-information-description54'
			).style.display = 'none'
		}

		function openArrow55() {
			document.querySelector('.arrow-top55').style.display = 'block'
			document.querySelector('.arrow-down55').style.display = 'none'
			document.querySelector('.information-description55').style.display =
				'none'
			document.querySelector(
				'.additional-information-description55'
			).style.display = 'block'
		}

		function closeArrow55() {
			document.querySelector('.arrow-down55').style.display = 'block'
			document.querySelector('.arrow-top55').style.display = 'none'
			document.querySelector('.information-description55').style.display =
				'block'
			document.querySelector(
				'.additional-information-description55'
			).style.display = 'none'
		}

		function openArrow56() {
			document.querySelector('.arrow-top56').style.display = 'block'
			document.querySelector('.arrow-down56').style.display = 'none'
			document.querySelector('.information-description56').style.display =
				'none'
			document.querySelector(
				'.additional-information-description56'
			).style.display = 'block'
		}

		function closeArrow56() {
			document.querySelector('.arrow-down56').style.display = 'block'
			document.querySelector('.arrow-top56').style.display = 'none'
			document.querySelector('.information-description56').style.display =
				'block'
			document.querySelector(
				'.additional-information-description56'
			).style.display = 'none'
		}

		function openArrow57() {
			document.querySelector('.arrow-top57').style.display = 'block'
			document.querySelector('.arrow-down57').style.display = 'none'
			document.querySelector('.information-description57').style.display =
				'none'
			document.querySelector(
				'.additional-information-description57'
			).style.display = 'block'
		}

		function closeArrow57() {
			document.querySelector('.arrow-down57').style.display = 'block'
			document.querySelector('.arrow-top57').style.display = 'none'
			document.querySelector('.information-description57').style.display =
				'block'
			document.querySelector(
				'.additional-information-description57'
			).style.display = 'none'
		}

		function openArrow58() {
			document.querySelector('.arrow-top58').style.display = 'block'
			document.querySelector('.arrow-down58').style.display = 'none'
			document.querySelector('.information-description58').style.display =
				'none'
			document.querySelector(
				'.additional-information-description58'
			).style.display = 'block'
		}

		function closeArrow58() {
			document.querySelector('.arrow-down58').style.display = 'block'
			document.querySelector('.arrow-top58').style.display = 'none'
			document.querySelector('.information-description58').style.display =
				'block'
			document.querySelector(
				'.additional-information-description58'
			).style.display = 'none'
		}

		function openArrow59() {
			document.querySelector('.arrow-top59').style.display = 'block'
			document.querySelector('.arrow-down59').style.display = 'none'
			document.querySelector('.information-description59').style.display =
				'none'
			document.querySelector(
				'.additional-information-description59'
			).style.display = 'block'
		}

		function closeArrow59() {
			document.querySelector('.arrow-down59').style.display = 'block'
			document.querySelector('.arrow-top59').style.display = 'none'
			document.querySelector('.information-description59').style.display =
				'block'
			document.querySelector(
				'.additional-information-description59'
			).style.display = 'none'
		}

		function openArrow60() {
			document.querySelector('.arrow-top60').style.display = 'block'
			document.querySelector('.arrow-down60').style.display = 'none'
			document.querySelector('.information-description60').style.display =
				'none'
			document.querySelector(
				'.additional-information-description60'
			).style.display = 'block'
		}

		function closeArrow60() {
			document.querySelector('.arrow-down60').style.display = 'block'
			document.querySelector('.arrow-top60').style.display = 'none'
			document.querySelector('.information-description60').style.display =
				'block'
			document.querySelector(
				'.additional-information-description60'
			).style.display = 'none'
		}
		function openArrow61() {
			document.querySelector('.arrow-top61').style.display = 'block'
			document.querySelector('.arrow-down61').style.display = 'none'
			document.querySelector('.information-description61').style.display =
				'none'
			document.querySelector(
				'.additional-information-description61'
			).style.display = 'block'
		}

		function closeArrow61() {
			document.querySelector('.arrow-down61').style.display = 'block'
			document.querySelector('.arrow-top61').style.display = 'none'
			document.querySelector('.information-description61').style.display =
				'block'
			document.querySelector(
				'.additional-information-description61'
			).style.display = 'none'
		}

		function openArrow62() {
			document.querySelector('.arrow-top62').style.display = 'block'
			document.querySelector('.arrow-down62').style.display = 'none'
			document.querySelector('.information-description62').style.display =
				'none'
			document.querySelector(
				'.additional-information-description62'
			).style.display = 'block'
		}

		function closeArrow62() {
			document.querySelector('.arrow-down62').style.display = 'block'
			document.querySelector('.arrow-top62').style.display = 'none'
			document.querySelector('.information-description62').style.display =
				'block'
			document.querySelector(
				'.additional-information-description62'
			).style.display = 'none'
		}

		function openArrow63() {
			document.querySelector('.arrow-top63').style.display = 'block'
			document.querySelector('.arrow-down63').style.display = 'none'
			document.querySelector('.information-description63').style.display =
				'none'
			document.querySelector(
				'.additional-information-description63'
			).style.display = 'block'
		}

		function closeArrow63() {
			document.querySelector('.arrow-down63').style.display = 'block'
			document.querySelector('.arrow-top63').style.display = 'none'
			document.querySelector('.information-description63').style.display =
				'block'
			document.querySelector(
				'.additional-information-description63'
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
					<div className='header-title margin-bottom-56'>Gates</div>

					<main className='main'>
						<div className='information-box information-box-type'>
							<div className='information-text'>
								<div className='information-title'>61 Gate of Inner Truth</div>
								<div className='information-description'>
									reflects a person's need for self-discovery...
								</div>
								<div className='additional-information-description information-description'>
									reflects a person's need for self-discovery, seeking harmony
									and truth in their actions. This is a time of inner growth,
									reflection and deepening into oneself.
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
								<div className='information-title'>63 Gate of Doubt</div>
								<div className='information-description information-description3'>
									People who have Gate 63 activated may...
								</div>
								<div className='additional-information-description3 information-description'>
									People who have Gate 63 activated may have a tendency to
									analyze the results of a completed process and learn from past
									experiences. They can be wise observers who are adept at
									seeing cycles, patterns, and important lessons in the past to
									apply to the future. This gate is also associated with the
									ability to find new ways to accomplish goals or to move on to
									new tasks after completing previous ones. People with Gate 63
									activated can be the initiators of new ideas or projects,
									drawing on their experience and wisdom gained from past
									accomplishments or circumstances.
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
								<div className='information-title'>64 Gate of Confusion</div>
								<div className='information-description information-description5'>
									People with an activated 64 Gate...
								</div>
								<div className='additional-information-description5 information-description'>
									People with an activated 64 Gate have the ability to see
									hidden connections and understand non-obvious aspects of what
									is going on. They may be intuitive and have a talent for
									insightful analysis. They may have the ability to see
									potential solutions or possible consequences of actions that
									may not be obvious to others. Gate 64 is also associated with
									unexpected change and the ability to adapt to change. People
									who have this gate activated may be open to new ideas, able to
									respond to the fluidity of events and make unconventional
									decisions.
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
								<div className='information-title'>4 Formulation Gate</div>
								<div className='information-description information-description6'>
									People who have Gate 4 activated may...
								</div>
								<div className='additional-information-description6 information-description'>
									People who have Gate 4 activated may have a talent for
									communication. They can often be talented at formulating their
									thoughts, articulating ideas, and being able to find common
									ground with different types of people. This can apply to both
									verbal communication and written communication. Gate 4 is also
									associated with the desire to share knowledge and experience
									with others. People with Gate 4 activated may seek to share
									information and ideas to help others expand their horizons and
									understanding of the world around them.
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
								<div className='information-title'>11 Gate of Ideas</div>
								<div className='information-description information-description7'>
									People who have Gate 11 activated...
								</div>
								<div className='additional-information-description7 information-description'>
									People who have Gate 11 activated usually have creativity and
									a sense of innovation. They can see opportunities where others
									do not and be able to turn their ideas into reality. This may
									relate to creativity, entrepreneurship, or the ability to
									innovate in different areas of life. Gate 11 also relates to
									making decisions to start new projects or initiatives. People
									with this gate may have the ability to weigh risks and make
									decisions about when and how to start something new.
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
								<div className='information-title'>17 Opinion Gate</div>
								<div className='information-description information-description8'>
									People with Gate 17 activated may...
								</div>
								<div className='additional-information-description8 information-description'>
									People with Gate 17 activated may have the ability to see
									opportunities for development and move forward in stages. They
									may be patient and consistent in their endeavors, striving for
									continuous improvement or movement toward goals. Gate 17 is
									also associated with changes in focus and the ability to see
									new perspectives. People with this gate may be open to change
									and new ideas, willing to adapt to change if necessary.
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
								<div className='information-title'>24 Rationalization Gate</div>
								<div className='information-description information-description9'>
									People with Gate 24 activated may...
								</div>
								<div className='additional-information-description9 information-description'>
									People with Gate 24 activated may have the ability to return
									to knowledge or experiences from past events. They may have
									some tendency to be cyclical in their actions or thoughts,
									their interests may revisit topics or ideas that have already
									been explored. Gate 24 can also signify the ability to learn
									from experience and go back to study previous mistakes or
									successes for their own growth and development. People with
									this gate can use their experiences as lessons for future
									decision-making.
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
								<div className='information-title'>43 Gate of Insight</div>
								<div className='information-description information-description10'>
									People with Gate 43 activated may...
								</div>
								<div className='additional-information-description10 information-description'>
									People with Gate 43 activated may have the ability to dedicate
									themselves to important ideas or goals. They may be willing to
									take responsibility for what is important to them and be
									committed to their goals to the end. Gate 43 is also
									associated with concentration and a focus on accomplishing
									goals. People with this gate may be goal-oriented, striving to
									succeed in their endeavors and willing to devote time and
									effort to achieve their goals.
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
								<div className='information-title'>47 Gate of Reflection</div>
								<div className='information-description information-description2'>
									People with an activated Gate 47 may...
								</div>
								<div className='additional-information-description2 information-description'>
									People with an activated Gate 47 may possess the capacity for
									coping and resilience in volatile environments. They may have
									the capacity for patience and endurance, allowing them to
									remain stable in volatile situations. Gate 47 is also
									associated with the ability to see potential in setbacks or
									difficulties. People with this gate can use their experiences
									and lessons from difficult situations for their personal
									growth and development.
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
								<div className='information-title'>8 Gate of Facilitation</div>
								<div className='information-description information-description11'>
									People with an activated Gate 8 may...
								</div>
								<div className='additional-information-description11 information-description'>
									People with an activated Gate 8 may have the willpower and
									determination to achieve their goals. They are often able to
									take the initiative. People with this gate can be confident in
									their beliefs and actions. Gate 8 is associated with the
									energy of strength and power. Such people can be good
									organizers and idea inspirers. People with an activated gate 8
									may have the resilience to overcome difficulties. They may be
									willing to fight for their beliefs and goals.
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
								<div className='information-title'>12 Cautious Gate</div>
								<div className='information-description information-description12'>
									People with an active gate 12 may...
								</div>
								<div className='additional-information-description12 information-description'>
									People with an active gate 12 may be prone to deep
									self-reflection, inner reflection and analyzing their thoughts
									and feelings. People with this gate may be cautious in their
									actions. People with activated gate 12 may have resilience and
									endurance, the ability to overcome difficulties and remain
									steadfast in difficult situations. People with this gate may
									appreciate breaks and a state of calm to better understand
									their goals. The energy of Gate 12 can help one see a
									situation from different points of view, which can make such
									people good counselors.
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
								<div className='information-title'>16 Gate of Mindfulness</div>
								<div className='information-description information-description13'>
									Gate 16 is associated with the energy...
								</div>
								<div className='additional-information-description13 information-description'>
									Gate 16 is associated with the energy of excitement and
									enthusiasm. People with activated Gate 16 can be energetic,
									possessing a positive outlook on life. The energy of gate 16
									can manifest in people becoming good motivators and inspirers
									to those around them. These are people who know how to pay
									attention to the positives in life and see the bright sides in
									situations. They inspire those around them to be open to new
									ideas, are communicative and positive in their interactions.
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
									20 Gate of the Present Moment
								</div>
								<div className='information-description information-description14'>
									Gate 20 is associated with the energy...
								</div>
								<div className='additional-information-description14 information-description'>
									Gate 20 is associated with the energy of deep reflection.
									People with Gate 20 activated can be prone to deep analysis
									and reflection on life issues. The energy of this gate can
									push a person to seek harmony in life. Such people may feel
									the need for solitude and rest to analyze and process their
									thoughts and impressions. The energy of Gate 20 may express an
									interest in spirituality, philosophy, and understanding the
									deeper aspects of life.
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
								<div className='information-title'>23 Assimilation Gate</div>
								<div className='information-description information-description4'>
									Gate 23 is associated with the energy...
								</div>
								<div className='additional-information-description4 information-description'>
									Gate 23 is associated with the energy of analysis and critical
									thinking. People with activated Gate 23 tend to analyze
									information carefully and think critically. Such people are
									particularly attentive to details and the world around them.
									They are interested in understanding cause and effect in
									various aspects of their lives. The energy of this gate can
									cause a person to strive for clarity and certainty in their
									thoughts and actions. People with an active gate 23 may have
									the ability to see different points of view and consider
									different aspects of a situation.
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
								<div className='information-title'>31 Leadership Gate</div>
								<div className='information-description information-description15'>
									The energy of gate 31 is associated...
								</div>
								<div className='additional-information-description15 information-description'>
									The energy of gate 31 is associated with influencing other
									people. People with gate 31 activated may have the ability to
									influence others with their energy and ideas. These people
									usually possess charisma and attraction. They seek
									recognition, are confident and can inspire confidence in those
									around them. People with an active 31 can easily relate to
									different people and can be influential in certain areas.
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
								<div className='information-title'>33 Gate of Solitude</div>
								<div className='information-description information-description16'>
									The energy of Gate 33 is associated...
								</div>
								<div className='additional-information-description16 information-description'>
									The energy of Gate 33 is associated with the desire for
									independence and the desire to act independently. People with
									an activated Gate 33 may be those who seek autonomy in their
									decision making and actions. These people are usually
									practical, value their personal space and need personal
									freedom. They are quite secretive and are able to find
									inspiration on their own.
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
								<div className='information-title'>45 Owner's Gate</div>
								<div className='information-description information-description17'>
									Gate 45 is associated with the energy...
								</div>
								<div className='additional-information-description17 information-description'>
									Gate 45 is associated with the energy of bringing people
									together. People with an activated 45 Gate can be good
									organizers, able to bring people together to achieve common
									goals. Such people feel comfortable in society and have
									communication skills. They are charismatic, they are
									interested in participating in public events.
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
								<div className='information-title'>56 Gate of Stimulation</div>
								<div className='information-description information-description18'>
									Gate 56 is associated with the energy...
								</div>
								<div className='additional-information-description18 information-description'>
									Gate 56 is associated with the energy of exploration and the
									drive to find meaning. People with Gate 54 activated may be
									fascinated with learning and understanding the world around
									them. Such people are hungry for new knowledge and
									experiences. These seek to enrich their minds through
									learning. These people tend to be reflective and think deeply
									about life's issues. Strive for variety, avoiding routine.
									Possess the ability to see and understand things in a deeper
									sense.
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
								<div className='information-title'>62 Gate of Detail</div>
								<div className='information-description information-description19'>
									Gate 62 is associated with an energy...
								</div>
								<div className='additional-information-description19 information-description'>
									Gate 62 is associated with an energy toward details. People
									with Gate 62 activated may possess thoroughness and attention
									to the small details and aspects of their lives. Such people
									are good at analyzing information and can be good organizers.
									They strive for a clear understanding of all aspects of their
									lives.
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
								<div className='information-title'>1 Creativity Gate</div>
								<div className='information-description information-description20'>
									Gate 1 is associated with creativity...
								</div>
								<div className='additional-information-description20 information-description'>
									Gate 1 is associated with creativity and innovative potential.
									People with Gate 1 activated can be creative, seeking to
									express themselves through various forms of art or innovative
									ideas. The energy of Gate 1 can encourage the initiation of
									new projects and the motivation to move forward, illuminating
									new paths and opportunities. People with Gate 1 activated can
									exhibit leadership qualities, able to inspire others with
									their energy and ideas. Such people can strive for change and
									improvement in life. They have a need for self-expression and
									the expression of their unique individuality.
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
									2 Gate of Higher Knowledge
								</div>
								<div className='information-description information-description21'>
									Gate 2 is associated with the energy...
								</div>
								<div className='additional-information-description21 information-description'>
									Gate 2 is associated with the energy of openness. People with
									Gate 2 activated may be able to adopt new information, ideas
									or experiences. The energy of gate 2 can motivate the desire
									for harmony in relationships. People with an active gate 2 may
									strive to create harmony and balance in their interactions
									with others. Such people may have flexibility and the ability
									to adapt to changes in the environment. They strive to work in
									a team and are able to resolve conflicts, value openness in
									communication, and are attentive to the opinions of others.
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
								<div className='information-title'>7 Own Role Gate</div>
								<div className='information-description information-description22'>
									Gate 7 is associated with the energies...
								</div>
								<div className='additional-information-description22 information-description'>
									Gate 7 is associated with the energies of leadership and
									organization. People with Gate 7 activated may have leadership
									qualities and the ability to organize others. The energy of
									Gate 7 can push the desire to form groups and teams to
									accomplish common goals. Such people can be energetic leaders,
									able to inspire their followers. They may feel comfortable
									making a personal contribution to a common cause, eager for
									success in their endeavors.
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
								<div className='information-title'>10 Gate of Own Behavior</div>
								<div className='information-description information-description23'>
									Gate 10 is associated with the energy...
								</div>
								<div className='additional-information-description23 information-description'>
									Gate 10 is associated with the energy of striving and
									achieving goals. People with an activated gate 10 may have a
									strong inner drive to succeed. The energy of gate 10 can
									motivate a sense of purpose and determination in activities.
									People with an active gate 10 can be persistent and willing to
									overcome challenges. Such people are able to act independently
									and take responsibility for their decisions and actions. They
									strive to be respected and recognized in their field of
									activity, strive to achieve high status.
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
								<div className='information-title'>13 Listener's Gate</div>
								<div className='information-description information-description24'>
									Gate 13 is associated with independence...
								</div>
								<div className='additional-information-description24 information-description'>
									Gate 13 is associated with independence and self-work. People
									with an activated Gate 13 may have an interest in
									self-discovery and seek to understand their own nature and
									goals. The energy of Gate 13 can contribute to difficulties in
									forming and maintaining long-term relationships in a team, as
									these people are more likely to prefer to work alone. These
									people are capable of deep and serious reasoning, especially
									in topics related to personal evolution and spiritual growth.
									They have a need for personal freedom and space to reflect and
									explore their inner world.
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
								<div className='information-title'>15 Gate of Extremes</div>
								<div className='information-description information-description25'>
									The energy of gate 15 can foster...
								</div>
								<div className='additional-information-description25 information-description'>
									The energy of gate 15 can foster a craving to analyze and
									evaluate situations. People with this gate can be good
									analysts and have the ability to see extremes in various
									issues. People with an active gate 15 can be sensitive to
									extreme situations and have the ability to delve into extremes
									in various areas. Such people strive for objectivity and lack
									of bias in their thinking. They are capable of solving complex
									problems and finding compromises to achieve them.
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
								<div className='information-title'>25 Self Spirit Gate</div>
								<div className='information-description information-description26'>
									Gate 25 is associated with the energy...
								</div>
								<div className='additional-information-description26 information-description'>
									Gate 25 is associated with the energy of innocence and
									simplicity. People with activated gate 25 can manifest
									spontaneity and ease with life. The energy of gate 25 can
									bring true joy and optimism. People with active gate 25 can
									see the bright side of life and bring joy to the environment.
									Such people can find pleasure in creativity and entertainment.
									They maintain a fresh perspective on the surrounding reality,
									prefer to avoid difficult commitments and enjoy the moment.
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
									46 Gate of Self Determination
								</div>
								<div className='information-description information-description27'>
									Gate 46 is associated with the energy...
								</div>
								<div className='additional-information-description27 information-description'>
									Gate 46 is associated with the energy of striving to reach new
									heights. People with this gate may feel an inner need to move
									forward and reach new heights in their lives. The energy of
									gate 46 can motivate you to pick yourself up after setbacks
									and keep moving forward even in difficult situations. People
									with an active gate 46 may have an inner drive to overcome
									obstacles and overcome challenges. Such people can be good
									leaders, motivating others to take action. They are committed
									to constant growth and development, both internal and
									external.
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
								<div className='information-title'>21 Hunter's Gate</div>
								<div className='information-description information-description28'>
									Gate 21 is associated with the energy...
								</div>
								<div className='additional-information-description28 information-description'>
									Gate 21 is associated with the energy of determination and the
									ability to overcome obstacles. People with this gate can show
									determination in achieving their goals. The energy of gate 21
									can promote analytical thinking. People with an active gate 21
									may be capable of overcoming challenges effectively and
									finding solutions in difficult situations. People with this
									gate can be persuasive in their statements. They have the
									ability to break through resistance and overcome obstacles.
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
								<div className='information-title'>26 Egoist Gate</div>
								<div className='information-description information-description29'>
									Gate 26 is associated with the energy...
								</div>
								<div className='additional-information-description29 information-description'>
									Gate 26 is associated with the energy of accompanying and
									supporting others. People with this gate may be capable of
									providing support and protection to those who need help.
									People with this gate can be attentive to the feelings and
									emotions of others. People with an active gate 26 may have the
									ability to create a cozy and protected atmosphere for
									themselves and others. Such people are able to provide
									physical and emotional security for themselves and others.
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
								<div className='information-title'>40 Gate of Solitude</div>
								<div className='information-description30 information-description '>
									Gate 40 is associated with the energies...
								</div>
								<div className='additional-information-description30 information-description'>
									Gate 40 is associated with the energies of release and relief.
									People with this gate may have the ability to soften
									environments and release tension. The energy of Gate 40 can
									help resolve conflicts and mend tense situations. Such people
									are able to transform difficult situations into easier and
									more positive ones. They can be sensitive to the needs of
									those around them.
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
								<div className='information-title'>51 Shock Gate</div>
								<div className='information-description information-description31'>
									Gate 51 is associated with activation...
								</div>
								<div className='additional-information-description31 information-description'>
									Gate 51 is associated with activation energy. People with this
									gate may be able to arouse the interest and energy of those
									around them. People with an active 51 Gate may have a talent
									for motivating others and inspiring them to take action. Such
									people may exhibit independence and a desire for freedom.
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
								<div className='information-title'>3 Arrangement Gate</div>
								<div className='information-description information-description32'>
									The energy of Gate 3 can support the...
								</div>
								<div className='additional-information-description32 information-description'>
									The energy of Gate 3 can support the desire to be unique and
									individual. People with this gate value their uniqueness.
									People with an active gate 3 may have the ability to solve
									problems and overcome difficulties in the initial stages. The
									energy of Gate 3 can help analyze and evaluate situations,
									especially in the beginning.
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
								<div className='information-title'>5 Fixed Risk Gate</div>
								<div className='information-description information-description33'>
									Gate 5 is associated with the energy of...
								</div>
								<div className='additional-information-description33 information-description'>
									Gate 5 is associated with the energy of patience and the
									ability to wait. People with this gate may be capable of
									patient waiting and long-term planning. People with this gate
									may be capable of rational thinking. Such people have the
									ability to understand cause and effect relationships and
									analyze situations. They tend to seek comprehensive
									information before making a decision.
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
								<div className='information-title'>9 Focus Gate</div>
								<div className='information-description information-description34'>
									Gate 9 is associated with the energy...
								</div>
								<div className='additional-information-description34 information-description'>
									Gate 9 is associated with the energy of enthusiasm and focus
									on a goal. People with this gate can have high energy and
									passion for what they do. The energy of Gate 9 promotes
									purposefulness and the ability to focus on specific tasks or
									goals. People with an active gate 9 have the ability to see
									important aspects from the general flow of information and
									focus on them. Such people are optimistic and believe in the
									successful outcome of their efforts. They possess leadership
									skills and the ability to motivate others.
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
								<div className='information-title'>14 Gate of Power Skills</div>
								<div className='information-description information-description35'>
									Gate 14 is associated with the energy...
								</div>
								<div className='additional-information-description35 information-description'>
									Gate 14 is associated with the energy of achievement,
									professional skills and the desire for recognition in one's
									field. People with an active Gate 14 strive to improve their
									professional skills and achieve outstanding results, have
									leadership qualities and the ability to influence others
									within their area of expertise.
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
								<div className='information-title'>27 Gate of Caring</div>
								<div className='information-description information-description36'>
									Gate 27 is associated with the energy...
								</div>
								<div className='additional-information-description36 information-description'>
									Gate 27 is associated with the energy of caring and support.
									People with this gate can be caring and able to support those
									around them. The energy of Gate 27 can promote sensitivity to
									the emotional and physical needs of others. People with an
									active gate 27 may have the ability to create a cozy and
									comfortable environment for themselves and others. These
									people understand the emotional needs of those around them.
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

						<div className='information-box information-box-digestion'>
							<div className='information-text'>
								<div className='information-title'>29 Gate of Concord</div>
								<div className='information-description information-description37'>
									Gate 29 is associated with the energies...
								</div>
								<div className='additional-information-description37 information-description'>
									Gate 29 is associated with the energies of commitment and
									obligation. People with this gate can experience a strong
									sense of responsibility to themselves and others. The energy
									of Gate 29 promotes the desire for sustainable relationships,
									projects, and commitments. People with an active gate 29 have
									the ability to make long-term decisions based on a clear
									vision of the future. These people want to build a strong
									foundation for the future, whether in relationships, work, or
									other areas of life.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down37'
									onClick={openArrow37}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top37'
									onClick={closeArrow37}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-sense'>
							<div className='information-text'>
								<div className='information-title'>34 Gate of Power</div>
								<div className='information-description information-description38'>
									Gate 34 is associated with the...
								</div>
								<div className='additional-information-description38 information-description'>
									Gate 34 is associated with the energy of ambition and
									strength. People with this gate have a strong drive to achieve
									their goals and manifest their inner strength. The energy of
									Gate 34 promotes aspirations for leadership in various spheres
									of life. People with an active gate 34 may have the energy of
									a leader and initiator, ready to take responsibility for
									themselves and lead others. These people show resilience in
									overcoming difficulties and achieving goals.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down38'
									onClick={openArrow38}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top38'
									onClick={closeArrow38}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-design'>
							<div className='information-text'>
								<div className='information-title'>42 Growth Gate</div>
								<div className='information-description information-description39'>
									Gate 42 is associated with the energy...
								</div>
								<div className='additional-information-description39 information-description'>
									Gate 42 is associated with the energy of growth. People with
									this gate may exhibit a desire to innovate, improve, and seek
									new opportunities. People with an active 42 Gate feel the need
									to make changes for improvement, both in their own lives and
									in the lives of others. These individuals strive for
									continuous improvement.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down39'
									onClick={openArrow39}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top39'
									onClick={closeArrow39}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-motivation'>
							<div className='information-text'>
								<div className='information-title'>59 Sexuality Gate</div>
								<div className='information-description information-description40'>
									Gate 59 is associated with the energy...
								</div>
								<div className='additional-information-description40 information-description'>
									Gate 59 is associated with the energy of exploration and the
									desire to understand complex issues. People with this gate are
									eager to share knowledge and help others sort through complex
									information. These people are able to resolve complex
									situations and find a way out of confusing circumstances. They
									lead others to awareness by helping people understand and new
									information.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down40'
									onClick={openArrow40}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top40'
									onClick={closeArrow40}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-perspective'>
							<div className='information-text'>
								<div className='information-title'>
									6 Friction (Conflict) Gate
								</div>
								<div className='information-description information-description41'>
									Gate 6 is associated with the energies...
								</div>
								<div className='additional-information-description41 information-description'>
									Gate 6 is associated with the energies of challenge and
									conflict. People with these may be more open to discussing and
									resolving conflicts in their lives. People with an active Gate
									6 may have the ability to resolve differences and participate
									in discussions to resolve conflict. Gate 6 energy can promote
									openness to new ideas and viewpoints, even if they cause
									conflict. Such people have the ability to express their
									thoughts and defend their views in conflict situations. They
									are eager to fight for justice in society.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down41'
									onClick={openArrow41}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top41'
									onClick={closeArrow41}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-environment'>
							<div className='information-text'>
								<div className='information-title'>22 Gate of Openness</div>
								<div className='information-description information-description42'>
									22 Gate of Openness: Gate 22 is...
								</div>
								<div className='additional-information-description42 information-description'>
									22 Gate of Openness: Gate 22 is associated with the energies
									of grace, elegance and beauty. People with this gate are
									charismatic and attractive. People with an active Gate 22 have
									the ability to create harmony in their environment and
									relationships. Such people attract attention and inspire
									others with their grace and style. They love beautiful and
									refined things and know how to enjoy aesthetics.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down42'
									onClick={openArrow42}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top42'
									onClick={closeArrow42}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-gates'>
							<div className='information-text'>
								<div className='information-title'>
									30 Sensation Recognition Gate
								</div>
								<div className='information-description information-description43'>
									Gate 30 is associated with the energy...
								</div>
								<div className='additional-information-description43 information-description'>
									Gate 30 is associated with the energy of passion and
									inspiration. People with this gate show passion for life.
									People with an active Gate 30 can easily get involved in
									projects with enthusiasm and passion. Such people seek
									self-expression through creativity and various forms of art.
									They can take risks and have the ability to inspire and
									motivate others with their energy.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down43'
									onClick={openArrow43}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top43'
									onClick={closeArrow43}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>36 Crisis Gate</div>
								<div className='information-description information-description44'>
									Gate 36 is associated with the energy...
								</div>
								<div className='additional-information-description44 information-description'>
									Gate 36 is associated with the energy of overcoming crises and
									difficulties. People with this gate have the ability to
									respond effectively to situations that require quick decision
									making. The energy of Gate 36 supports the desire for personal
									and professional growth through overcoming challenges. People
									with an active gate 36 may be able to find solutions in
									critical situations and be effective leaders in the face of
									uncertainty. Such people are adept at overcoming life's
									challenges, which they use for personal growth.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down44'
									onClick={openArrow44}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top44'
									onClick={closeArrow44}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-type'>
							<div className='information-text'>
								<div className='information-title'>37 Friendship Gate</div>
								<div className='information-description information-description45'>
									Gate 37 is associated with the energy...
								</div>
								<div className='additional-information-description45 information-description'>
									Gate 37 is associated with the energy of family bonding and
									community. People with this gate may have a strong sense of
									family values. The energy of Gate 37 supports the desire to
									create stable and harmonious relationships within the family
									and community. People with an active gate 37 are able to care
									for and support their loved ones, creating a cozy atmosphere
									in the family. Such people are able to solve family issues and
									conflicts, striving for harmony.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down45'
									onClick={openArrow45}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top45'
									onClick={closeArrow45}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-strategy'>
							<div className='information-text'>
								<div className='information-title'>49 Gate of Principles</div>
								<div className='information-description information-description46'>
									Gate 49 is associated with the energy...
								</div>
								<div className='additional-information-description46 information-description'>
									Gate 49 is associated with the energy of change and
									transformation. People with this gate are open to new ideas
									and are eager to make changes in their lives. The energy of
									Gate 49 can promote revolutionary thinking and a desire for
									change. Such people are able to see the need for change and
									work towards making it happen. They strive for justice and
									equality, especially in areas where change is needed.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down46'
									onClick={openArrow46}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top46'
									onClick={closeArrow46}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-inner'>
							<div className='information-text'>
								<div className='information-title'>55 Spirit Gate</div>
								<div className='information-description information-description47'>
									Gate 55 is associated with the...
								</div>
								<div className='additional-information-description47 information-description'>
									Gate 55 is associated with the energy of abundance. People
									with this gate feel connected to the energy of abundance in
									various areas of life. Such people are able to attract
									abundance in various areas of life, be it material resources
									or creative energy. They strive for wholeness and satisfaction
									in their lives.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down47'
									onClick={openArrow47}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top47'
									onClick={closeArrow47}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-definition'>
							<div className='information-text'>
								<div className='information-title'>18 Gate of Adjustment</div>
								<div className='information-description information-description48'>
									Gate 18 is associated with the energy...
								</div>
								<div className='additional-information-description48 information-description'>
									Gate 18 is associated with the energy of adjustment and
									improvement. People with this gate may feel motivated to work
									on improving themselves and their environment. The energy of
									gate 18 promotes the pursuit of perfection and correction in
									various areas of life. People with an active gate 18 are able
									to see where changes can be made and are motivated to initiate
									appropriate action. Such people are able to help others grow
									by providing support. They strive for harmony and order both
									around and within themselves.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down48'
									onClick={openArrow48}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top48'
									onClick={closeArrow48}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-profile'>
							<div className='information-text'>
								<div className='information-title'>28 Player's Gate</div>
								<div className='information-description information-description49'>
									Gate 28 is associated with the energy...
								</div>
								<div className='additional-information-description49 information-description'>
									Gate 28 is associated with the energy of struggle and
									overcoming difficulties. People with this gate have stamina
									and determination to overcome difficulties. The energy of gate
									28 promotes the desire to achieve goals through effort and
									labor, even if it requires struggle. People with an active
									gate 28 have the ability to find solutions and get out of
									difficult situations. Such people are able to overcome
									obstacles, relying on their own experience.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down49'
									onClick={openArrow49}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top49'
									onClick={closeArrow49}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-incarnation'>
							<div className='information-text'>
								<div className='information-title'>32 Continuity Gate</div>
								<div className='information-description information-description50'>
									Gate 32 is associated with the energies...
								</div>
								<div className='additional-information-description50 information-description'>
									Gate 32 is associated with the energies of advancement and
									stability. People with this gate are able to create stability
									in their lives. The energy of Gate 32 promotes the desire to
									finish what has been started, even in the face of uncertainty.
									Such people seek stable and secure relationships.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down50'
									onClick={openArrow50}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top50'
									onClick={closeArrow50}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-signature'>
							<div className='information-text'>
								<div className='information-title'>44 Vigilance Gate</div>
								<div className='information-description information-description51'>
									People with an active 44 Gate can...
								</div>
								<div className='additional-information-description51 information-description'>
									People with an active 44 Gate can be excellent communicators.
									They may find it easy to present their ideas and thoughts to
									others. This gate can foster ambition and drive to achieve
									success in their lives. Such people can inspire others with
									their ideas.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down51'
									onClick={openArrow51}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top51'
									onClick={closeArrow51}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-digestion'>
							<div className='information-text'>
								<div className='information-title'>48 Gate of Depth</div>
								<div className='information-description information-description52'>
									People with an active 48 Gate have...
								</div>
								<div className='additional-information-description52 information-description'>
									People with an active 48 Gate have a sharp mind and the
									ability to perceive details and subtleties in the world around
									them. Such people are able to see possibilities and solutions
									in complex situations. People with an active gate 48 tend to
									seek deep meaning in their lives and the world around them.
									Such people are able to see the potential and talent in other
									people, helping them to discover their potential.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down52'
									onClick={openArrow52}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top52'
									onClick={closeArrow52}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-sense'>
							<div className='information-text'>
								<div className='information-title'>50 Values Gate</div>
								<div className='information-description information-description53'>
									People with an active 50 Values Gate...
								</div>
								<div className='additional-information-description53 information-description'>
									People with an active 50 Values Gate have a strong energy that
									they channel into a variety of activities. They are open to
									new ideas and new experiences, eager for variety and
									unconventional approaches. Are able to respond effectively to
									changes and turbulence in the world around them. They have
									creativity, which is manifested in the ability to come up with
									new ideas and solutions, prefer to act on the basis of their
									beliefs.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down53'
									onClick={openArrow53}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top53'
									onClick={closeArrow53}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-design'>
							<div className='information-text'>
								<div className='information-title'>
									57 Gate of Intuitive Insight
								</div>
								<div className='information-description information-description54'>
									Gate 57 is associated with the energies...
								</div>
								<div className='additional-information-description54 information-description'>
									Gate 57 is associated with the energies of wisdom and deep
									thinking. People with an active Gate 57 seek to understand
									life on a deeper level. People with this gate can be advocates
									of ethics and justice, striving for fair and balanced
									relationships. They possess empathy towards other people. Such
									people are able to overcome challenges effectively.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down54'
									onClick={openArrow54}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top54'
									onClick={closeArrow54}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-motivation'>
							<div className='information-text'>
								<div className='information-title'>19 Desire Gate</div>
								<div className='information-description information-description55'>
									People with an active 19 Gate are...
								</div>
								<div className='additional-information-description55 information-description'>
									People with an active 19 Gate are capable of experiencing deep
									emotions and feelings that can influence their decisions. The
									energy of gate 19 promotes the potential for love and
									compassion for oneself and others. Such people strive for
									harmony in their lives and relationships and are open in
									expressing their feelings. They are honest and open in their
									dealings with others.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down55'
									onClick={openArrow55}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top55'
									onClick={closeArrow55}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-perspective'>
							<div className='information-text'>
								<div className='information-title'>38 Warrior Gate</div>
								<div className='information-description information-description56'>
									People with an active 38 Gate can...
								</div>
								<div className='additional-information-description56 information-description'>
									People with an active 38 Gate can show passion and energy in
									what they do. They can be very interested and involved in
									their projects and ideas. Gate 38 can facilitate quick and
									intuitive decision making, especially in situations of
									conflict or competition. These people have the ability to
									debate and argue their point of view. They are not afraid to
									express their feelings and beliefs and can be charismatic
									leaders.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down56'
									onClick={openArrow56}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top56'
									onClick={closeArrow56}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>
						<div className='information-box information-box-environment'>
							<div className='information-text'>
								<div className='information-title'>39 Provocateur Gate</div>
								<div className='information-description information-description57'>
									People with an active 39 Gate are...
								</div>
								<div className='additional-information-description57 information-description'>
									People with an active 39 Gate are open to new ideas and
									innovation. These people may be inclined to experiment and
									practice new concepts. They are willing to try new and unusual
									things. People with this gate defend their beliefs, easily
									find common ground with others, and are able to influence
									others.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down57'
									onClick={openArrow57}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top57'
									onClick={closeArrow57}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-gates'>
							<div className='information-text'>
								<div className='information-title'>41 Gate of Tightening</div>
								<div className='information-description information-description58'>
									People with an active 41 Gate may...
								</div>
								<div className='additional-information-description58 information-description'>
									People with an active 41 Gate may have the energy to exchange
									ideas and concepts. They may be open to discussion and sharing
									thoughts. People with this gate may be persuasive speakers and
									show an interest in learning. They exhibit a high level of
									intellectual activity and are eager to seek truth and deep
									insight.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down58'
									onClick={openArrow58}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top58'
									onClick={closeArrow58}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>52 Gate of Non-Activity</div>
								<div className='information-description information-description59'>
									People with an active 52 Gate value...
								</div>
								<div className='additional-information-description59 information-description'>
									People with an active 52 Gate value moments of solitude,
									prefer inner experience to outer experience, and seek deep
									self-knowledge. These people can be good listeners, attentive
									to the details and feelings of others. They strive for harmony
									and peace, both within themselves and in their relationships
									with others.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down59'
									onClick={openArrow59}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top59'
									onClick={closeArrow59}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>53 Gate of Beginnings</div>
								<div className='information-description information-description60'>
									People with an active 53 Gate can...
								</div>
								<div className='additional-information-description60 information-description'>
									People with an active 53 Gate can be pioneers in various areas
									of life. People with this gate can notice details and
									subtleties that others may miss. These people are proactive,
									overcome obstacles with confidence, and are able to share
									their ideas with others.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down60'
									onClick={openArrow60}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top60'
									onClick={closeArrow60}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>54 Gate of Ambition</div>
								<div className='information-description information-description61'>
									People with an active 54 Gate can...
								</div>
								<div className='additional-information-description61 information-description'>
									People with an active 54 Gate can exhibit a strong desire for
									achievement and success in various areas of life. These people
									are ambitious, highly motivated and willing to work hard to
									achieve their goals. They have leadership qualities, are able
									to inspire others, and clearly know what results they want to
									achieve. They strive for excellence and want to influence
									others.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down61'
									onClick={openArrow61}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top61'
									onClick={closeArrow61}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>58 Gate of Vitality</div>
								<div className='information-description information-description62'>
									People with an active 58 Gate may...
								</div>
								<div className='additional-information-description62 information-description'>
									People with an active 58 Gate may have a clear vision of the
									future. People with this gate have good intuition and are able
									to sense trends. They have the ability to see the whole
									picture, anticipate possible outcomes of events and based on
									this make decisions to achieve desired goals.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down62'
									onClick={openArrow62}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top62'
									onClick={closeArrow62}
									width={'16px'}
									height={'8px'}
								/>
							</div>
						</div>

						<div className='information-box information-box-channels'>
							<div className='information-text'>
								<div className='information-title'>
									60 Gate of Acceptance of Limitations
								</div>
								<div className='information-description information-description63'>
									People with an active 60 Gate can...
								</div>
								<div className='additional-information-description63 information-description'>
									People with an active 60 Gate can often feel a sense of
									responsibility for themselves and others. They strive to
									always fulfill their responsibilities and obligations. These
									people value structure and order in their lives and strive to
									organize and systematize their surroundings. Possess the
									ability to assess resources, both financial and energetic, and
									use them to their advantage.
								</div>
							</div>
							<div className='generate-wrapper'>
								<img
									src='/images/Arrow-down.png'
									alt=''
									className='arrow-down arrow-down63'
									onClick={openArrow63}
									width={'16px'}
									height={'8px'}
								/>
								<img
									src='/images/Arrow-top.png'
									alt=''
									className='arrow-top arrow-top63'
									onClick={closeArrow63}
									width={'16px'}
									height={'8px'}
								/>
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

export default GatesBase
