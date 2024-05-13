import React, { useState } from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export function getTodayString() {
	const [month, day, year] = new Date()
		.toLocaleDateString("en-US")
		.split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export function AppointmentForm({ contacts, onSubmit }) {
	const [nameInput, setNameInput] = useState("");
	const [dateInput, setDateInput] = useState("");
	const [timeInput, setTimeInput] = useState("");
	const [contactInput, setContactInput] = useState("");

	return (
		<form action="#" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					required
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
					required
					type="date"
					name="date"
					min={getTodayString()}
					value={dateInput}
					onChange={({ target }) => setDateInput(target.value)}
				/>
			</label>
			<br />
			<label>
				Time:
				<input
					required
					type="time"
					name="time"
					value={timeInput}
					onChange={({ target }) => setTimeInput(target.value)}
				/>
			</label>
			<br />
			<ContactPicker
				contacts={contacts}
				value={contactInput}
				onChange={({ target }) => setContactInput(target.value)}
			/>
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
			contactID: contactInput === "" ? -1 : parseInt(contactInput),
		});

		setNameInput("");
		setDateInput("");
		setTimeInput("");
	}
}
