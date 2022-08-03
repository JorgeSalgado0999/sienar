import React, {useState} from "react";
import "./Admin.css";

export const Admin = () => {
	const [projects, setProjects] = useState("");
	const [phone, setPhone] = useState("");

	function uploadProject(e: any) {
		e.preventDefault();
		return 1;
	}

	return (
		<div className="admin-container">
			<form onSubmit={(e) => uploadProject(e)}>
				<label>
					Projects:
					<br />
					<input
						type="text"
						value={projects}
						onChange={(t) => setProjects(String(t.target.value))}
					/>
				</label>
				<input type="submit" value="Send" />
			</form>

			<form>
				<label>
					Phone:
					<br />
					<input
						type="text"
						value={phone}
						onChange={(t) => setPhone(t.target.value)}
					/>
				</label>
				<input type="submit" value="Send" />
			</form>
		</div>
	);
};
