import React, { useEffect, useState } from 'react'

const Timer = ({ time }) => {

	let { hours, minutes, seconds, milliseconds } = time
	return (
		<div className='timer py-2'>
			<span className='time'>{hours >= 10 ? hours : '0' + hours} : </span>
			<span className='time'> {minutes >= 10 ? minutes : ' 0' + minutes} : </span>
			<span className='time'> {seconds >= 10 ? seconds : ' 0' + seconds} : </span>
			<span className='time'> {milliseconds > 10 ? milliseconds : ' 0' + milliseconds}</span>
		</div>
	)
}

export default Timer