import React from 'react'

let startRef=false
const Controllers = ({ handleStart,handlePause,handleResume,handleReset,isActive}) => {

const start = () => {
	startRef = true
	handleStart()
}
	return (
		<div className='controllers'>
			<button type="button" className="btn" onClick={start} hidden={startRef || isActive}>Start</button>
			<button type="button" className='btn' onClick={handlePause} hidden={!isActive}>Pause</button>
			<button type="button" className='btn' onClick={handleResume} hidden={isActive} >Resume</button>
			<button type="button" className='btn' onClick={handleReset}>Reset</button>
		</div>
	)
}

export default Controllers