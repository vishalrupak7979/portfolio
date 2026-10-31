import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const jobs = [
  {
    role: "Senior Frontend Developer",
    company: "Transound Systems Pvt Ltd",
    period: "Apr 2025 – Present",
    points: [
      "Leading the frontend team building Taqadom, an enterprise Human Resource Management System (HRMS), using React.js.",
      "Implemented Role-Based Access Control (RBAC) across the application for role-specific access to modules, features, and user actions.",
      "Built a centralized Currency Management module that reflects the base currency across Payroll, Reports, and Payslips.",
      "Developed a customizable drag-and-drop dashboard, along with filtering, group-by, and reporting features.",
      "Built a custom contract creation module with configurable field order and labels.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Sense7AI",
    period: "Apr 2023 – Mar 2025",
    points: [
      "Developed the Weightage Matching and Job Description Template modules for Zita, an AI-powered Applicant Tracking System.",
      "Migrated the Zita website from Wix to React.js within two months, improving performance and scalability.",
      "Built a standalone React.js dashboard to visualize API usage and analytics.",
      "Migrated the InnovSpace website to Next.js with server-side rendering and a Node.js backend for mailing services.",
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
