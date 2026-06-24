import { useState } from "react";
import Icon from "./Icon";

export default function Modal({ type, onClose, onSave }) {
  const [name, setName] = useState("");
  const labels = {
    user: ["Add new user", "Create an account and assign access permissions.", "Full name", "e.g. Lerato Khumalo"],
    role: ["Create new role", "Define a reusable permission group.", "Role name", "e.g. Regional Administrator"],
    department: ["Add department", "Create a new organizational department.", "Department name", "e.g. Human Resources"],
  };
  const [title, description, field, placeholder] = labels[type] || labels.user;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <div className="modal-head">
          <div className={`modal-icon ${type}`}><Icon name={type === "role" ? "shieldPlus" : type === "department" ? "building" : "userPlus"} /></div>
          <button onClick={onClose}><Icon name="close" /></button>
        </div>
        <h2>{title}</h2><p>{description}</p>
        <label className="field-label">{field}</label>
        <input className="form-input" autoFocus value={name} onChange={e => setName(e.target.value)} placeholder={placeholder} />
        {type === "user" && <>
          <label className="field-label">Email address</label>
          <input className="form-input" placeholder="name@wcms.gov" type="email" />
          <div className="form-grid"><div><label className="field-label">Role</label><select className="form-input"><option>Content Manager</option><option>Department Admin</option><option>Auditor</option></select></div><div><label className="field-label">Department</label><select className="form-input"><option>Communications</option><option>Public Works</option><option>IT</option></select></div></div>
        </>}
        <div className="modal-actions"><button className="secondary-btn" onClick={onClose}>Cancel</button><button className="primary-btn" onClick={() => onSave(name)}><Icon name="plus" size={17} /> Create {type}</button></div>
      </div>
    </div>
  );
}
