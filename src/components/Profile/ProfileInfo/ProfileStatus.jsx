import React, { useEffect, useState } from "react"
import s from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {

	const [editMode, setEditMode] = useState();
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true)
	};

	const	deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	};

	return (
		<div className={s.profile__description}>
			{ !editMode &&
				<div>
						<span onDoubleClick={activateEditMode}>{props.status || "without status"}</span>
				</div>
			}
			{ editMode &&
				<div>
						<input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} type="text" value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus
