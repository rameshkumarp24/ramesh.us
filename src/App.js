import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>RAMESH KUMAR P</h1>
        <p style={styles.contact}>
          📍 Bangalore, Karnataka, India | 📱 +91 9003547480 | 📧{" "}
          <a href="mailto:rkkv5892@gmail.com" style={styles.link}>
            rkkv5892@gmail.com
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://www.linkedin.com/in/rameshkumarp/"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          | 🌐{" "}
          <a
            href="https://rameshkumarp.online"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            rameshkumarp.online
          </a>
        </p>
      </header>

      <Section title="Professional Summary">
        <p>
          Result oriented Lead Architect with 15+ years of experience
          designing, developing, and deploying scalable, high-performance
          software solutions across diverse industries. Expert in system
          architecture, security architecture, cloud computing, microservices,
          microfrontend, and distributed systems. IBM trained Generative AI Architect and Data Scientist. Proven leadership in driving
          initiatives from concept to launch, optimizing system performance, and
          mentoring teams. Passionate about innovation, best practices, and
          delivering business-aligned solutions.
        </p>
      </Section>

      <Section title="Core Competencies">
        <ul>
          <li>Software Architecture & Design Patterns</li>
          <li>Cloud Platforms (AWS, Azure, GCP)</li>
          <li>Microservices & Distributed Systems</li>
          <li>RESTful APIs / GraphQL / gRPC</li>
          <li>CI/CD Automation & DevOps Practices</li>
          <li>Database Systems (SQL, NoSQL, NewSQL)</li>
          <li>System Scalability & Performance Optimization</li>
          <li>Event-Driven Architecture (Kafka, RabbitMQ)</li>
          <li>Containerization (Docker, Kubernetes)</li>
          <li>Domain-Driven Design (DDD)</li>
          <li>Agile / Scrum Methodologies</li>
          <li>Technical Mentorship & Team Leadership</li>
        </ul>
      </Section>

      <Section title="Technical Skills">
        <ul>
          <li>
            <strong>Languages:</strong> Java, C#, Python, JavaScript, TypeScript
          </li>
          <li>
            <strong>Frontend:</strong> React, Next.js, Angular, Vue.js, React
            Native, .NET MAUI
          </li>
          <li>
            <strong>Backend:</strong> Node.js, .NET Core, Spring Boot
          </li>
          <li>
            <strong>Cloud/Infrastructure:</strong> AWS, Azure, GCP
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL, MongoDB, Cassandra,
            DynamoDB, Redis
          </li>
          <li>
            <strong>DevOps Tools:</strong> Git, Jenkins, Docker, Kubernetes,
            Terraform, Ansible
          </li>
          <li>
            <strong>Architectures:</strong> Microservices, Microfrontend,
            Serverless, Monolith Refactoring
          </li>
        </ul>
      </Section>

      <Section title="Professional Experience">
        <Job
          title="Lead Software Architect"
          company="IBM"
          duration="2022 – Present"
          bullets={[
            "Led architecture design for a $150M cloud transformation project (client: Ascension One), reducing operational costs by 35% and improving system scalability by 50%.",
            "Designed and deployed microfrontend and microservices on AWS using Docker, ECS, and Lambda, with CI/CD pipelines via Jenkins.",
            "Handled mobile and web applications frontend using React JS and React Native.",
            "Introduced event-driven architecture using Kafka, improving data processing throughput by 4x.",
            "Mentored a team of 12 engineers, improving code quality and system reliability.",
            "Conducted architectural reviews, technical evaluations, and POCs for new technology adoption.",
            "Key Achievements: Architect of the Year award (2024); Achieved 99.99% uptime for mission-critical applications.",
            <>
              <strong>Project reference links:</strong> 🌐{" "}
              <a
                href="https://healthcare.ascension.org/ascension-one"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </a>{" "}
              | 📱{" "}
              <a
                href="https://play.google.com/store/apps/details?id=org.ascension.one.prod"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Android
              </a>{" "}
              | 🍎{" "}
              <a
                href="https://apps.apple.com/us/app/ascension-one/id6458346040"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                iOS
              </a>
            </>,
          ]}
        />
        <Job
          title="Software Architect"
          company="Impelsys"
          duration="2019 – 2022"
          bullets={[
            "Architected a SaaS-based multi-tenant platform on Kubernetes and AWS.",
            "Transitioned applications from monolithic to microservices, improving deployment velocity and system resilience.",
            "Implemented Redis caching, reducing average API response time by 30%.",
            "Collaborated with cross-functional teams to define technical strategies aligned with business goals.",
            "Key Achievements: Reduced time-to-market by 25%; Built API gateway handling 10,000+ concurrent requests.",
          ]}
        />
        <Job
          title="Software Architect"
          company="Infomerica"
          duration="2018 – 2019"
          bullets={[
            "Designed scalable backend systems with Java, Spring Boot, and MySQL.",
            "Led third-party system integrations (payment gateways, CRMs).",
            "Promoted automated testing and peer code review practices.",
            "Key Achievements: Reduced system incidents by 40%; Improved feature delivery speed by 20%.",
          ]}
        />
        <p style={styles.paragraph}>
          <strong>Other Roles</strong>
        </p>
        <ul>
          <li>
            <strong>Technical Lead</strong> – Nextbrain Technologies (June 2018
            – Nov 2018)
          </li>
          <li>
            <strong>Senior Software Engineer</strong> – Nous Infosystems (Aug
            2017 – June 2018)
          </li>
          <li>
            <strong>Senior Consultant - IT</strong> – Sutherland Global Services
            (Mar 2016 – Aug 2017)
          </li>
          <li>
            <strong>Engineer</strong> – Aspire Systems (Feb 2013 – Mar 2016)
          </li>
          <li>
            <strong>Freelancer</strong> – Freelancing (Nov 2011 – Feb 2013)
          </li>
          <li>
            <strong>Associate Technology L1</strong> – Publicis Sapient (Jan
            2011 – Nov 2011)
          </li>
          <li>
            <strong>Graduate Trainee</strong> – Tata Consultancy Services (Jul
            2007 – Feb 2008)
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <ul>
          <li>
            <strong>MCA (Computer Applications)</strong> – NIT, Tiruchirappalli
            (2008–2011)
          </li>
          <li>
            <strong>BSc (Mathematics)</strong> – The American College, Madurai
            (2004–2007)
          </li>
        </ul>
      </Section>

      <Section title="Certifications">
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>IBM Generative AI Architect</li>
          <li>IBM AI Data Scientist</li>
        </ul>
      </Section>

      <Section title="Awards & Honors">
        <ul>
          <li>
            My certifications, credentials and badges link{" "}
            <a
              href="https://www.credly.com/users/rameshkumarp"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.credly.com/users/rameshkumarp
            </a>
          </li>
          <li>Manager Choice Award – IBM (2024)</li>
          <li>Innovation Excellence Award – Impelsys (2020)</li>
          <li>IQVIA Belgium Achievement Award – Infomerica (2019)</li>
          <li>Prize winner in Search 3.0 event of Shaastra 2009, IIT Madras</li>
          <li>Top ranked trainee in TCS Ignite training (2007)</li>
          <li>School rank #1 in Grade X and Grade XII public exams</li>
          <li>Secured 100% in Mathematics and 100% in Science in Grade X</li>
        </ul>
      </Section>

      <footer style={styles.footer}>
        <p>
          © 2025 Ramesh Kumar P |{" "}
          <a href="https://rameshkumarp.online" style={styles.link}>
            rameshkumarp.online
          </a>
        </p>
      </footer>
    </div>
  );
}

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const Job = ({ title, company, duration, bullets }) => (
  <div style={styles.job}>
    <h3>
      {title}, <span style={styles.company}>{company}</span>
    </h3>
    <p style={styles.duration}>{duration}</p>
    <ul>
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 24px",
    background: "#fdfdfd",
    color: "#1a202c",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  name: {
    fontSize: "36px",
    marginBottom: "8px",
  },
  contact: {
    fontSize: "16px",
  },
  link: {
    color: "#2b6cb0",
    textDecoration: "none",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    color: "#2d3748",
    marginBottom: "16px",
    borderBottom: "2px solid #cbd5e0",
    paddingBottom: "4px",
  },
  job: {
    marginBottom: "20px",
  },
  company: {
    color: "#4a5568",
  },
  duration: {
    fontStyle: "italic",
    fontSize: "14px",
    color: "#718096",
    marginBottom: "8px",
  },
  paragraph: {
    marginTop: "24px",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    paddingTop: "40px",
    fontSize: "14px",
    color: "#4a5568",
  },
};

export default App;
