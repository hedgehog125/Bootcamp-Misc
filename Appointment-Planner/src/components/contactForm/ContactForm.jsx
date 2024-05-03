import React, { useState } from "react";

export function ContactForm({ onSubmit }) {
	const [nameInput, setNameInput] = useState("");
	const [phoneNumInput, setPhoneNumInput] = useState("");
	const [emailInput, setEmailInput] = useState("");

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
				Phone Number:
				<input
					type="tel"
					name="phone-number"
					value={phoneNumInput}
					onChange={({ target }) => setPhoneNumInput(target.value)}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={emailInput}
					onChange={({ target }) => setEmailInput(target.value)}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);

	function handleSubmit(e) {
		e.preventDefault();
		const succeeded = onSubmit({
			name: nameInput,
			phoneNum: phoneNumInput,
			email: emailInput,
		});
		if (succeeded) {
			setNameInput("");
			setPhoneNumInput("");
			setEmailInput("");
		}
	}
}
