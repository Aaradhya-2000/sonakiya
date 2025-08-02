import React from 'react';
import RAJAT from "../images/team/RAJAT.jpeg";
import RAMESHWAR from "../images/team/RAMESHWAR.jpeg";
import HARDIK from "../images/team/HARDIK.jpeg";
import ABHISHEK from "../images/team/ABHISHEK.jpeg";
import RITIK from "../images/team/RITIK.jpeg";
import TIKESHWAR from "../images/team/TIKESHWAR.jpeg";
// import './TeamSection.css'; // Optional, for custom styling

const teamData = [
  {
    name: "Rajat Sonakiya",
    role: "CEO & Founder",
    phone: "+91 8253078886",
    email: "sonakiya71@gmail.com",
    linkedin: "https://linkedin.com/in/rajat-sonakiya-655045282",
    image: RAJAT,
  },
  {
    name: "Rameshwar Patidar",
    role: "Sales & Marketing Manager",
    phone: "+91 8103953176",
    email: "sonakiya71@gmail.com",
    linkedin: "https://linkedin.com/in/rameshwar-patidar-87b04a256",
    image: RAMESHWAR,
  },
  {
    name: "Hardik Khare",
    role: "Chief Technology Officer",
    phone: "+91 8516974918",
    email: "sonakiya71@gmail.com",
    linkedin: "https://www.linkedin.com/in/Hardik-khare-b45178279",
    image: HARDIK,
  },
  {
    name: "Abhishek Mandloi",
    role: "Technical Advisory",
    phone: "+91 7002282756",
    email: "sonakiya71@gmail.com",
    linkedin: "https://linkedin.com/in/abhishek-mandloi-b45178279",
    image: ABHISHEK,
  },
  {
    name: "Ritik Dawar",
    role: "Back Office Executive",
    phone: "+91 8253078886",
    email: "sonakiya71@gmail.com",
    linkedin: "https://linkedin.com/in/ritik-dawar-007446282",
    image: RITIK,
  },
  {
    name: "Tikeshwar Sahu",
    role: "Back Office Executive",
    phone: "+91 8103953176",
    email: "sonakiya71@gmail.com",
    linkedin: "https://linkedin.com/in/tikeshwar-sahu-0515b282",
    image: TIKESHWAR,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p>📞 {member.phone}</p>
            <p>📧 {member.email}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
