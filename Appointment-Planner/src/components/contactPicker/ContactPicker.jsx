import React from "react";

export function ContactPicker({ contacts, value, onChange }) {
	return (
		<label>
			Booking Appointment With:
			<select name="contact" value={value} onChange={onChange}>
				<option value="">No Contact Selected</option>
				{contacts.map((contact, index) => (
					<option value={index} key={index}>
						{contact.name}
					</option>
				))}
			</select>
		</label>
	);
}
