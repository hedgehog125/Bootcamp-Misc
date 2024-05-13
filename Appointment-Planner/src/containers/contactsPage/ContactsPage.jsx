import React from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export function ContactsPage({ contacts, onSubmit }) {
	const tileItems = contacts.map((contact) => ({
		name: contact.name,
		description: Object.fromEntries(
			Object.entries(contact).filter(([key]) => key !== "name"),
		),
	}));

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm onSubmit={onSubmit} />
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList items={tileItems} />
			</section>
		</div>
	);
}
