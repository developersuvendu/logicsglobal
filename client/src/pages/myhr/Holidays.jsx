import { useState } from "react";
import { CalendarDays, MapPin, Filter, Download } from "lucide-react";
import { CustomButton } from "../../components/common/CustomButton.jsx";
import Dropdown from "../../components/common/Dropdown";
import "./styles/HolidayList.css";
const holidays = [
  { id: "H01", name: "New Year's Day", date: "01 Jan 2026", day: "Thursday", month: 1, type: "Public", location: "All Offices" },
  { id: "H02", name: "Republic Day", date: "26 Jan 2026", day: "Monday", month: 1, type: "Public", location: "India" },
  { id: "H03", name: "Holi", date: "04 Mar 2026", day: "Wednesday", month: 3, type: "Religious", location: "India" },
  { id: "H04", name: "Eid al-Fitr", date: "20 Mar 2026", day: "Friday", month: 3, type: "Public", location: "UAE" },
  { id: "H05", name: "Good Friday", date: "03 Apr 2026", day: "Friday", month: 4, type: "Optional", location: "All Offices" },
  { id: "H06", name: "Labour Day", date: "01 May 2026", day: "Friday", month: 5, type: "Public", location: "All Offices" },
  { id: "H07", name: "Eid al-Adha", date: "27 May 2026", day: "Wednesday", month: 5, type: "Public", location: "UAE" },
  { id: "H08", name: "Independence Day (India)", date: "15 Aug 2026", day: "Saturday", month: 8, type: "Public", location: "India" },
  { id: "H09", name: "Company Foundation Day", date: "12 Sep 2026", day: "Saturday", month: 9, type: "Company", location: "All Offices" },
  { id: "H10", name: "Gandhi Jayanti", date: "02 Oct 2026", day: "Friday", month: 10, type: "Public", location: "India" },
  { id: "H11", name: "Diwali", date: "08 Nov 2026", day: "Sunday", month: 11, type: "Religious", location: "India" },
  { id: "H12", name: "UAE National Day", date: "02 Dec 2026", day: "Wednesday", month: 12, type: "Public", location: "UAE" },
  { id: "H13", name: "Christmas Day", date: "25 Dec 2026", day: "Friday", month: 12, type: "Public", location: "All Offices" },
];

const typeStyle = {
  Public: "bg-success-soft",
  Optional: "bg-warning-soft",
  Religious: "bg-info-soft",
  Company: "bg-primary-soft",
};

const filters = ["All", "Public", "Optional", "Religious", "Company"];
const locations = ["All Locations", "All Offices", "India", "UAE"];

export default function Holidays() {
  const [type, setType] = useState("All");
  const [loc, setLoc] = useState("All Locations");
  const [location, setLocation] = useState("all");
  const filtered = holidays.filter(
    (h) =>
      (type === "All" || h.type === type) &&
      (loc === "All Locations" || h.location === loc),
  );

  const today = new Date();
  const upcoming = holidays.filter((h) => {
    const [d, mStr, y] = h.date.split(" ");
    const monthIdx = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(mStr);
    return new Date(Number(y), monthIdx, Number(d)) >= today;
  });
  const next = upcoming[0];

  const stats = [
    { label: "Total Holidays", value: String(holidays.length), sub: "FY 2026" },
    { label: "Upcoming", value: String(upcoming.length), sub: "Remaining this year" },
    { label: "Optional Leaves", value: String(holidays.filter((h) => h.type === "Optional").length), sub: "Choose any 2" },
    { label: "Next Holiday", value: next ? next.date.split(" ").slice(0, 2).join(" ") : "—", sub: next?.name ?? "—" },
  ];

  const locationHandler=(e)=>{
    console.log("Hello :",e);
    setLoc(e);
  }
  return (
    <div className="stack stack-6">
      <div className="holiday-card-grid">
        {stats.map((s) => (
          <div key={s.label} className="holiday-list-card">
            <div className="holiday-list-card-title">{s.label}</div>
            <div className="holiday-card-count" style={{ marginTop: 4 }}>{s.value}</div>
            <div className="holiday-card-desc-text" style={{ marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{"marginTop": "24px"}}>
        <div className="flex justify-between table-toolbar">
          <div className="card-title-block">
            <h2 className="text text-lg font-semibold table-title">Holiday Calendar 2026</h2>
            <p className="text text-sm text-muted" style={{"marginTop":"2px"}}>Official public, religious, optional and company holidays</p>
          </div>
          <div className="row row-gap-2 row-wrap align-center">
            {/* <select className="select-native" value={loc} onChange={(e) => setLoc(e.target.value)}>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select> */}

            <div className="leave-filter-dropdown">
              <Dropdown1899
                    value={loc}
                    onChange={(e)=>{setLoc(e)}}
                    placeholder="Filter Status"
                    options={[
                      { label: "All Locations", value: "All Locations" },
                      { label: "All Offices", value: "All Offices" },
                      { label: "India", value: "India" },
                      { label: "USA", value: "USA" },
                    ]}
                  />
          </div>
            <CustomButton>
                  <Download className="custom-button-icon" />
                  Download
                </CustomButton>
          </div>
        </div>

        <div className="row row-gap-2 row-wrap" style={{ padding: "0 16px 12px", alignItems: "center" }}>
          <Filter className="svg-sm muted filter-icon" />
          {filters.map((f) => (
            <button
              key={f}
              className={`btn btn-pill btn-sm ${type === f ? "btn-primary" : "btn-ghost"}`}
              onClick={() => setType(f)}
            >
              {f}
            </button>
          ))}
          <div style={{ marginLeft: "auto" }}>

          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Holiday</th>
                <th>Type</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((h) => (
                <tr key={h.id}>
                  <td>
                    <div className="row row-gap-2" style={{ alignItems: "center" }}>
                      <CalendarDays className="svg-sm muted" />
                      <span className="font-medium">{h.date}</span>
                    </div>
                  </td>
                  <td className="muted">{h.day}</td>
                  <td className="font-medium">{h.name}</td>
                  <td><span className={`badge ${typeStyle[h.type]}`}>{h.type}</span></td>
                  <td>
                    <div className="row row-gap-2" style={{ alignItems: "center" }}>
                      <MapPin className="svg-xs muted" />
                      <span>{h.location}</span>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="muted" style={{ textAlign: "center", padding: 24 }}>
                    No holidays match the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}