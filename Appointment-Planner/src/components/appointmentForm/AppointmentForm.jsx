import React, { useState } from "react";

export function getTodayString() {
	const [month, day, year] = new Date()
		.toLocaleDateString("en-US")
		.split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export function AppointmentForm({ onSubmit }) {
	const [nameInput, setNameInput] = useState("");
	const [dateInput, setDateInput] = useState(getTodayString());
	const [timeInput, setTimeInput] = useState("");

	return (
		<form action="#" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={nameInput}
					onChange={({ target }) => setNameInput(target.value)}
				/>
			</label>
			<br />
			<label>
				Date:
				<input
					type="date"
					name="date"
					value={dateInput}
					onChange={({ target }) => setDateInput(target.value)}
				/>
			</label>
			<br />
			<label>
				Time:
				<input
					type="time"
					name="time"
					value={timeInput}
					onChange={({ target }) => setTimeInput(target.value)}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);

	function handleSubmit(e) {
		e.preventDefault();

		onSubmit({
			name: nameInput,
			date: dateInput,
			time: timeInput,
		});

		setNameInput("");
		setDateInput("");
		setTimeInput("");
	}
}
