import React, { useState } from 'react'
import Timer from './Timer'
import Controllers from './Controllers';

const Stopwatch = () => {
	const [isActive, setIsActive] = useState(false)
	let [timer, setTimer] = useState()
	let [time, setTime] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	})
	let updatedHr = time.hours;
	let updatedMin = time.minutes;
	let updatedSec = time.seconds;
	let updatedMs = time.milliseconds;

	const start = () => {
		if (updatedMin === 60) {
			updatedHr++;
			updatedMin = 0;
		}
		if (updatedSec === 60) {
			updatedMin++;
			updatedSec = 0;
		}
		if (updatedMs === 100) {
			updatedSec++;
			updatedMs = 0;
		}
		updatedMs++;
		return setTime(prevState => ({ ...prevState, hours: updatedHr, minutes: updatedMin, seconds: updatedSec, milliseconds: updatedMs }))
	}
	const handleStart = () => {
		setIsActive(!isActive)
		console.log(time)
		start()
		setTimer(setInterval(start, 10))
	}

	const handlePause = () => {
		setIsActive(!isActive)
		clearInterval(timer)
	}

	const handleResume = () => {
		setIsActive(!isActive)
		start()
		setTimer(setInterval(start, 10))
	}

	const handleReset = () => {
		clearInterval(timer)
		setIsActive(!isActive)
		setTime(prevState => ({ ...prevState, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }))
	}
	return (
		<div className='container py-3' style={{ background: 'black', color: 'white' }}>
			<div>
				<h3>React Stopwatch</h3>
				<Timer time={time} />
			</div>
			<Controllers handleStart={handleStart} handlePause={handlePause} handleReset={handleReset} handleResume={handleResume} isActive={isActive} />
		</div>
	)
}

export default Stopwatch