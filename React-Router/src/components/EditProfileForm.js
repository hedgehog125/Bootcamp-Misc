import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editUser } from "../features/session/sessionSlice.js";

export default function EditProfileForm() {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editUser({ username: username }));
	};

	return (
		<section>
			<h2>Edit Username</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<div>
						<input
							id="username"
							value={username}
							onChange={(e) => setUsername(e.currentTarget.value)}
						/>
						<button className="primary">Edit</button>
					</div>
				</label>
			</form>
		</section>
	);
}
