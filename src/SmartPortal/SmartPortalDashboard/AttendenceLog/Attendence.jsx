import React, { useState , useEffect} from "react";
import "./Attendance.css";

// ✅ Import Icons
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaRedo,
  FaCheckCircle
} from "react-icons/fa";

const Attendence = () => {
  // const [currentTime, setCurrentTime] = useState("10:45 AM");
  const [todayLabel] = useState("May 5, 2026");

  const [isClockedIn, setIsClockedIn] = useState(false);
  const [shiftComplete, setShiftComplete] = useState(false);
  const [note, setNote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("office");

  const [inTime, setInTime] = useState("--");
  const [outTime, setOutTime] = useState("--");
  const [totalHours, setTotalHours] = useState("--");

  const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const time = new Date().toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
    setCurrentTime(time);
  };

  updateTime(); // initial call
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);

  const locations = [
    { value: "office", label: "Office" },
    { value: "home", label: "Work From Home" },
    { value: "client", label: "Client Site" }
  ];

  const recentAttendance = [
    {
      id: 1,
      date: "May 5",
      inTime: "9:00 AM",
      outTime: "6:00 PM",
      hours: "9h",
      location: "Office",
      status: "Present",
      statusClass: "status-badge status-present"
    }
  ];

  const handleClockIn = () => {
    setIsClockedIn(true);
    setInTime(currentTime);
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    setShiftComplete(true);
    setOutTime(currentTime);
    setTotalHours("8h 30m");
  };

  return (
    <div className="attendance-wrapper">
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <FaClock className="icon" />
          <h1>Attendance Log</h1>
        </div>
        <p className="header-subtitle">
          {todayLabel} — Log your daily in & out times
        </p>
      </div>

      {/* Clock Card */}
      <div className="clock-card">
        <div className="clock-left">
          <div className="clock-icon-wrap">
            <FaClock className="clock-icon" />
          </div>
          <div>
            <div className="clock-time">{currentTime}</div>
            <div className="clock-date">
              <FaCalendarAlt /> {todayLabel}
            </div>
          </div>
        </div>

        {shiftComplete && (
          <div className="shift-status">
            <span className="shift-badge">Shift Complete</span>
            <span className="shift-range">
              {inTime} — {outTime}
            </span>
          </div>
        )}
      </div>

      {/* Two Column */}
      <div className="two-col">
        {/* Clock In */}
        <div className="panel">
          <div className="panel-title">
            <FaArrowRight className="icon" /> Clock In
          </div>

          <label className="field-label">
            <FaMapMarkerAlt /> Location
          </label>
          <select
            className="location-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option>Noida</option>
            {/* {locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))} */}
          </select>

          {/* <label className="field-label">
            <FaClock /> Note
          </label>
          <textarea
            className="note-area"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          /> */}

          {shiftComplete && (
            <div className="shift-done-msg">
              <FaCheckCircle /> You've completed your shift
            </div>
          )}

          {errorMessage && (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}

          {!shiftComplete && (
            <>
              {!isClockedIn ? (
                <button className="action-btn" onClick={handleClockIn}>
                  Clock In
                </button>
              ) : (
                <button className="action-btn" onClick={handleClockOut}>
                  Clock Out
                </button>
              )}
            </>
          )}
        </div>

        {/* Summary */}
        <div className="panel">
          <div className="panel-title">
            <FaCalendarAlt className="icon" /> Today's Summary
          </div>

          <div className="time-boxes">
            <div className="time-box">
              <div>In Time</div>
              <div>{inTime}</div>
            </div>
            <div className="time-box">
              <div>Out Time</div>
              <div>{outTime}</div>
            </div>
          </div>

          <div className="total-hours-box">
            <div>Total Hours</div>
            <div>{totalHours}</div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="recent-section">
        <div className="section-title">
          <FaRedo className="icon" /> Recent Attendance
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>In</th>
              <th>Out</th>
              <th>Hours</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAttendance.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.date}</td>
                <td>{rec.inTime}</td>
                <td>{rec.outTime}</td>
                <td>{rec.hours}</td>
                <td>{rec.location}</td>
                <td>
                  <span className={rec.statusClass}>
                    {rec.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendence;