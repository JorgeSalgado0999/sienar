import React, {useEffect, useState} from "react";
import {collection, onSnapshot, doc, updateDoc} from "firebase/firestore";
import db from "src/firebase";
import * as firebase from "firebase/app";

import "./Admin.css";

export const Admin = () => {
	const [projects, setProjects] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");

	async function uploadData(e: any) {
		e.preventDefault();
		console.log("cambiando: phone");

		const washingtonRef = doc(db, "sienar-data", "6s2aOivMXd315FFkG0pC");
		await updateDoc(washingtonRef, {
			phone: phone,
			projects: projects,
			date: date,
		});

		return 1;
	}

	useEffect(() => {
		onSnapshot(collection(db, "sienar-data"), (snapshot) => {
			snapshot.docs.map((doc) => {
				setDate(doc.data().date);
				setProjects(doc.data().projects);
				setPhone(doc.data().phone);
			});
		});
	}, []);

	return (
		<div className="admin-container">
			<form onSubmit={(e) => uploadData(e)}>
				<label>
					Projects:
					<br />
					<input
						type="text"
						value={projects}
						onChange={(t) => setProjects(String(t.target.value))}
					/>
				</label>

				<label>
					Phone:
					<br />
					<input
						type="text"
						value={phone}
						onChange={(t) => setPhone(t.target.value)}
					/>
				</label>

				<label>
					date:
					<br />
					<input
						type="text"
						value={date}
						onChange={(t) => setDate(t.target.value)}
					/>
				</label>
				<input type="submit" value="Send" />
			</form>
		</div>
	);
};
