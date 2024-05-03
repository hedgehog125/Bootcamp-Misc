import React from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export function ContactsPage({ contacts, onSubmit }) {
	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm onSubmit={onSubmit} />
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
			</section>
		</div>
	);
}
