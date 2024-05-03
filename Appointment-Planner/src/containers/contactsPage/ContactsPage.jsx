import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export function ContactsPage({ contacts, onSubmit }) {
	const [nameInput, setNameInput] = useState("");
	const [phoneNumInput, setPhoneNumInput] = useState("");
	const [emailInput, setEmailInput] = useState("");

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<form action="#" onSubmit={handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={nameInput}
							onChange={({ target }) =>
								setNameInput(target.value)
							}
						/>
					</label>
					<br />
					<label>
						Phone Number:
						<input
							type="tel"
							name="phone-number"
							value={phoneNumInput}
							onChange={({ target }) =>
								setPhoneNumInput(target.value)
							}
						/>
					</label>
					<br />
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={emailInput}
							onChange={({ target }) =>
								setEmailInput(target.value)
							}
						/>
					</label>
					<br />
					<button type="submit">Submit</button>
				</form>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
			</section>
		</div>
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
