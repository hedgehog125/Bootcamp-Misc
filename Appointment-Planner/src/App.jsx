import React, { useState } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	const basename =
		document.querySelector("base")?.getAttribute("href") ?? "/";

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route
					index
					element={<Navigate to={ROUTES.CONTACTS} replace />}
				/>
				<Route
					path={ROUTES.CONTACTS}
					element={
						<ContactsPage
							contacts={contacts}
							onSubmit={addContact}
						/>
					}
				/>
				<Route
					path={ROUTES.APPOINTMENTS}
					element={
						<AppointmentsPage
							appointments={appointments}
							contacts={contacts}
							onSubmit={addAppointment}
						/>
					}
				/>
			</Route>
		),
		{ basename }
	);

	return <RouterProvider router={router} />;

	function addContact(contact) {
		const isUnique = contacts.every(
			({ name, phoneNum, email }) =>
				!(
					contact.name === name ||
					contact.phoneNum === phoneNum ||
					contact.email === email
				)
		);
		if (!isUnique) return false;

		setContacts([...contacts, contact]);

		return true;
	}
	function addAppointment(appointment) {
		setAppointments([...appointments, appointment]);
	}
}

export default App;
