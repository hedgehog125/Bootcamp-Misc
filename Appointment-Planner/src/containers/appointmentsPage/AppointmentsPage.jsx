import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export function AppointmentsPage() {
	/*
	Define state variables for 
	appointment info
	*/

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
			</section>
		</div>
	);

	function handleSubmit(e) {
		e.preventDefault();
		/*
		Add contact info and clear data  
		*/
	}
}
