import React from 'react'

const ColumnRow = (props) => {

  
  return (
		<div>
			<div className='column-row'>
				<div className='column-icon'>
					<img src='/images/icon.png' alt='' />
				</div>
				<div className='column-number'>{props.gate}.{props.line}</div>
			</div> 
		</div>
	)
}

export default ColumnRow
