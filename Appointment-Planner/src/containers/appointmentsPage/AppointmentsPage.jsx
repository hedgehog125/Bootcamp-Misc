import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export function AppointmentsPage({ appointments, contacts, onSubmit }) {
	const tileItems = appointments.map((appointment) => ({
		name: appointment.name,
		description: {
			date: new Date(appointment.date).toLocaleDateString(),
			time: appointment.time,
			contact:
				appointment.contactID === -1
					? ""
					: `With ${contacts[appointment.contactID].name}`,
		},
	}));

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm onSubmit={onSubmit} contacts={contacts} />
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
				<TileList items={tileItems} />
			</section>
		</div>
	);
}
