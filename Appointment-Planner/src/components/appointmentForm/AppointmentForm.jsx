import React from "react";

export function getTodayString() {
	const [month, day, year] = new Date()
		.toLocaleDateString("en-US")
		.split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export function AppointmentForm({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) {
	return <></>;
}
