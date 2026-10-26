import { useState } from "react";
import "./styles.css";

function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [diet, setDiet] = useState("");
  const [attendees, setAttendees] = useState("");
  const [guest, setGuest] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="dietary_preferences">
          Dietary Preferences
          <input
            id="dietary_preferences"
            type="text"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          />
        </label>
        <label htmlFor="attendees">
          Attendees
          <input
            id="attendees"
            type="number"
            min="1"
            required
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
          />
        </label>
        <label htmlFor="adtl_guest" className="checkbox-label">
          <input
            id="adtl_guest"
            type="checkbox"
            checked={guest}
            onChange={(e) => setGuest(e.target.checked)}
          />
          Bringing additional guests?
        </label>
        <button type="submit">Submit</button>
      </form>

      {showForm && (
        <div className="confirmation">
          <h3>RSVP Submitted!</h3>
          <p>Name: <span>{name}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Attendees: <span>{attendees}</span></p>
          <p>Dietary Preferences: <span>{diet}</span></p>
          <p>Guest: <span>{guest ? "Yes" : "No"}</span></p>
        </div>
      )}
    </div>
  );
}

export default EventRSVPForm;