import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Transond Systems Pvt Ltd – Taqadom HRMS",
    period: "Apr 2025 – Present",
    points: [
      "Lead a team of 4 frontend developers: own UI architecture, review code, and mentor on reusable-component practices.",
      "Developed enterprise HRMS modules in React.js using a reusable, scalable component architecture.",
      "Implemented Role-Based Access Control (RBAC) across the HRMS for module, feature, and user-action permissions.",
      "Built a centralized Currency Management module syncing currency values across Payroll, Reports, and Payslips.",
      "Developed customizable dashboards with drag-and-drop widgets and dynamic, personalized layouts.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Sense7AI",
    period: "Apr 2023 – Mar 2025",
    points: [
      "Developed React.js frontend modules for Zita, an AI-powered Applicant Tracking System (ATS), focusing on reusable components and scalable UI development.",
      "Built Job Description Template and Candidate Weightage Matching modules, and a React.js dashboard for API usage analytics.",
      "Migrated the Zita website from Wix to React.js in two months, improving performance and maintainability.",
      "Migrated the InnovSpace website to Next.js with SSR and integrated Node.js mailing services.",
    ],
  },
];

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {jobs.map((job) => (
          <ScrollAnimation animateIn="fadeInUp" key={job.period}>
            <div className="job">
              <header>
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="period">{job.period}</span>
              </header>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <h2 className="education-title">Education</h2>
      <div className="timeline">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="job">
            <header>
              <div>
                <h3>B.E. Computer Science and Engineering</h3>
                <p className="company">Kongu Engineering College</p>
              </div>
              <span className="period">2019 – 2023</span>
            </header>
            <p>CGPA: 8.75/10</p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
