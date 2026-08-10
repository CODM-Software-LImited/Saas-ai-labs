import React from "react";
import { useEffect, useState } from "react";
import "./DashboardInfo.css";
import { FaUser, FaCalendarAlt, FaMoneyBillWave, FaUserTie, FaBuilding, FaClipboardList } from "react-icons/fa";
import {
  PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";

const data = [
  {
    icon: <FaUser />,
    label: "Employee ID",
    value: "001",
    color: "#7c3aed"
  },
  {
    icon: <FaCalendarAlt />,
    label: "Date of Joining",
    value: "15 Sep 2023",
    color: "#16a34a"
  },
  {
    icon: <FaMoneyBillWave />,
    label: "CTC",
    value: "5 LPA",
    color: "#0891b2"
  },
  {
    icon: <FaUserTie />,
    label: "Manager",
    value: "Vinod Kumar",
    color: "#2563eb"
  },
  {
    icon: <FaBuilding />,
    label: "Department",
    value: "Development",
    color: "#ea580c"
  },
  {
    icon: <FaClipboardList />,
    label: "Leave Balance",
    value: "16",
    color: "#dc2626"
  }
];

const leaveData = [
  { name: "Casual", value: 20 },
  { name: "Medical", value: 15 },
  { name: "Other", value: 11 }
];

const COLORS = ["#7c3aed", "#f97316", "#10b981"];

const attendanceData = [
  { day: "Mon", office: 8, shift: 1, extra: 3 },
  { day: "Tue", office: 6, shift: 0.5, extra: 0 },
  { day: "Wed", office: 7, shift: 2, extra: 1 },
  { day: "Thu", office: 5, shift: 1.5, extra: 0 },
  { day: "Fri", office: 8, shift: 2, extra: 4 }
];


export default function DashboardInfo() {

  const [time, setTime] = useState(new Date());
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let timer;

    if (isCheckedIn && checkInTime) {
      timer = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - checkInTime) / 1000); // seconds
        setDuration(diff);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isCheckedIn, checkInTime]);

  const handleToggle = () => {
    const now = new Date();

    if (!isCheckedIn) {
      // IN
      setCheckInTime(now);
      setCheckOutTime(null);
      setDuration(0);
      setIsCheckedIn(true);
    } else {
      // OUT
      setCheckOutTime(now);
      setIsCheckedIn(false);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };



  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    setCheckInTime(new Date());
    setCheckOutTime(null);
  };

  const handleCheckOut = () => {
    setCheckOutTime(new Date());
  };
  return (
    <div className="smartPortal-home">
      <div>

        {/* Top Banner */}
        <div className="smartPortal-banner">
          <div>
            <h2>Welcome back, Ravi</h2>
            <p>Here's what's happening in your organization today</p>
          </div>

          <div className="smartPortal-status">
            {/* <span>Today's Status</span> */}


            {/* <div className="clock">
        {time.toLocaleTimeString()}
      </div> */}

            <div className="times">
              <div className="actions">
                <button onClick={handleToggle}>
                  {isCheckedIn ? "Out" : "In"}
                </button>
              </div>
              {/* <p>
                    Check-In: {checkInTime ? checkInTime.toLocaleTimeString() : "--:--"}
                    {"   "}
                    Check-Out: {checkOutTime ? checkOutTime.toLocaleTimeString() : "--:--"}
                  </p> */}

              <p>
                Working Time: {formatTime(duration)}
              </p>
            </div>

          </div>
        </div>

        {/* Info Cards */}
        <div className="smartPortal-cards">
          {data.map((item, index) => (
            <div key={index} className="smartPortal-card">
              <div
                className="smartPortal-icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>
              <p className="smartPortal-label">{item.label}</p>
              <h4 className="smartPortal-value">{item.value}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* // */}

      <div className="smartPortal-analytics">

        {/* Leave Section */}
        <div className="smartPortal-card">
          <div className="smartPortal-card-header">
            <h4>Leave Details</h4>
            <span>March, 2025</span>
          </div>

          <div className="smartPortal-chart">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={leaveData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {leaveData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="smartPortal-leave-footer">
            <h3>46</h3>
            <p>Total Leave Taken</p>

            <div className="smartPortal-actions">
              <button className="smartPortal-btn">Add Leave</button>
              <span className="smartPortal-link px-3">View All</span>
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="smartPortal-card">
          <div className="smartPortal-card-header">
            <h4>Attendance Details</h4>
            <span>March, 2025</span>
          </div>

          <div className="smartPortal-chart">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={attendanceData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="office" fill="#7c3aed" />
                <Bar dataKey="shift" fill="#f97316" />
                <Bar dataKey="extra" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/*  */}


      </div>

      {/* Timesheet Status */}
      <div className="smartPortal-summary-card">
        <h4>Timesheet Status</h4>

        <div className="timesheet-item">
          <div>
            <p>Mar 3 - Mar 7</p>
            <span>40.00 hrs logged</span>
          </div>
          <button className="status approved">Approved</button>
        </div>

        <div className="timesheet-item">
          <div>
            <p>Mar 10 - Mar 14</p>
            <span>38.50 hrs logged</span>
          </div>
          <button className="status pending">Pending</button>
        </div>

        <div className="timesheet-item">
          <div>
            <p>Mar 17 - Mar 21</p>
            <span>-- hrs logged</span>
          </div>
          <button className="status notsubmitted">Not Submitted</button>
        </div>

        <button className="submit-btn">Submit Timesheet</button>
      </div>

    </div>
    // </div>
  );
}