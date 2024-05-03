import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export function AppointmentsPage({ onSubmit }) {
	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm onSubmit={onSubmit} />
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
			</section>
		</div>
	);
}
