import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>RAMESH KUMAR P</h1>
        <p style={styles.contact}>
          📱 +91 9884532891 | 📧{' '}
          <a href="mailto:rameshkumarpoliah@gmail.com" style={styles.link}>
            rameshkumarpoliah@gmail.com
          </a>
        </p>
      </header>

      <Section title="Summary">
        <p>
          Results-driven Architect with 13 years of experience developing high-performance and
          cutting-edge web applications using ReactJS, NextJS, ExpressJS, NodeJS. Expertise in
          TypeScript, JavaScript, Redux, GraphQL, Jest, Java, Spring Boot, AWS and CI/CD pipelines.
          Proven leader in agile environments, delivering scalable, high-quality applications and
          driving team success. Recognized for technical excellence and problem-solving with
          multiple awards. Seeking to bring deep web expertise and innovative solutions to
          prospective tech company.
        </p>
      </Section>

      <Section title="Professional Experience">
        {experience.map((exp, i) => (
          <div key={i} style={styles.entry}>
            <h3>
              {exp.title} <span style={styles.company}>@ {exp.company}</span>
            </h3>
            <p style={styles.duration}>{exp.duration}</p>
            <ul>{exp.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
          </div>
        ))}
      </Section>

      <Section title="Other Roles">
        <ul>
          <li>Senior Software Engineer - III, Nous Infosystems (Aug 2017 – June 2018)</li>
          <li>Senior Consultant - IT, Sutherland Global Services (Mar 2016 – Aug 2017)</li>
          <li>Engineer, Aspire Systems (Feb 2013 – Mar 2016)</li>
          <li>Associate Technology L1, Publicis Sapient (Jan 2011 – Nov 2011)</li>
          <li>Graduate Trainee, Tata Consultancy Services (Jul 2007 – Feb 2008)</li>
        </ul>
      </Section>

      <Section title="Key Projects">
        {projects.map((proj, i) => (
          <div key={i} style={styles.entry}>
            <h3>{proj.name}</h3>
            <ul>{proj.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
          </div>
        ))}
      </Section>

      <Section title="Technical Skills">
        <ul>
          <li>
            <strong>Languages:</strong> HTML, CSS, TypeScript, JavaScript, Java, Python
          </li>
          <li>
            <strong>Web & Backend:</strong> React JS, Express JS, Next JS, MongoDB, PostgreSQL,
            DynamoDB, Aurora DB
          </li>
          <li>
            <strong>Frameworks:</strong> Material UI, GraphQL, Jest, Node JS, i18next
          </li>
          <li>
            <strong>Cloud:</strong> AWS Lambda, API Gateway, DynamoDB, EC2, S3, IAM, Lambda, RDS,
            CloudWatch
          </li>
          <li>
            <strong>Tools:</strong> Visual Studio Code, Postman, Figma, Flipper, ESLint, Prettier
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <ul>
          <li>MCA (Computer Applications) - NIT, Tiruchirappalli (2011)</li>
          <li>BSc (Mathematics) - The American College, Madurai (2007)</li>
        </ul>
      </Section>

      <Section title="Awards & Recognition">
        <ul>
          <li>IBM Manager Choice Award (2023-2024)</li>
          <li>Laerdal Pat on the Back (2020-2021), Team Excellence Award (2019-2020)</li>
          <li>IQVIA Belgium Achievement Award (2018-2019)</li>
          <li>Top-ranked trainee at TCS Ignite Training Program</li>
        </ul>
      </Section>

      <Section title="Core Competencies">
        <ul>
          <li>Web and Mobile Application Architecture and Development</li>
          <li>Agile Project Management</li>
          <li>Performance Optimization and Debugging</li>
          <li>Cloud Integration and CI/CD Pipelines</li>
          <li>Team Leadership and Mentorship</li>
        </ul>
      </Section>

      <footer style={styles.footer}>
        <p>
          © 2025 Ramesh Kumar P |{' '}
          <a href="https://ramesh.us" target="_blank" rel="noopener noreferrer" style={styles.link}>
            ramesh.us
          </a>
        </p>
      </footer>
    </div>
  );
}

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.title}>{title}</h2>
    <div>{children}</div>
  </section>
);

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    color: '#333',
    background: '#fdfdfd'
  },
  header: {
    textAlign: 'center',
    borderBottom: '2px solid #ccc',
    paddingBottom: '20px',
    marginBottom: '40px'
  },
  name: {
    fontSize: '36px',
    margin: '0'
  },
  contact: {
    fontSize: '16px',
    marginTop: '10px'
  },
  link: {
    color: '#007acc',
    textDecoration: 'none'
  },
  section: {
    marginBottom: '40px'
  },
  title: {
    fontSize: '24px',
    color: '#007acc',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginBottom: '15px'
  },
  entry: {
    marginBottom: '20px'
  },
  company: {
    color: '#007acc',
    fontWeight: 'normal'
  },
  duration: {
    fontStyle: 'italic',
    fontSize: '14px',
    color: '#555'
  },
  footer: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#999',
    marginTop: '60px',
    paddingTop: '20px',
    borderTop: '1px solid #ddd'
  }
};

const experience = [
  {
    title: 'Application Architect',
    company: 'IBM',
    duration: 'Sep 2022 - Present',
    details: [
      'Architect and develop scalable web applications using React JS, integrating features like notifications, GraphQL APIs and multilingual support.',
      'Lead and mentor a team of engineers in agile methodologies, ensuring high-quality code through rigorous peer reviews and code optimization.',
      'Implement CI/CD pipelines using Azure DevOps and AppCenter, optimizing deployment processes and reducing release times by 30%.',
      'Conduct in-depth performance profiling and debugging using DevTools, Sentry and Flipper to enhance app stability and user experience.'
    ]
  },
  {
    title: 'Technical Architect',
    company: 'Impelsys',
    duration: 'Jul 2019 - Sep 2022',
    details: [
      'Spearheaded the development of web applications focusing on seamless user experience and performance optimization.',
      'Integrated Redux for state management, designed reusable components and implemented GraphQL for efficient data handling, reducing API response time by 20%.',
      'Built unit and regression tests with Jest, achieving 95% code coverage and reducing bugs by 40% in production.'
    ]
  },
  {
    title: 'Technical Lead',
    company: 'Infomerica Inc',
    duration: 'Dec 2018 - Jun 2019',
    details: [
      'Led a cross-functional team to deliver React JS web applications with robust performance and responsive design, achieving a 4.8+ user rating across platforms.',
      'Conducted architecture design reviews, task monitoring and hands-on development to ensure project alignment with client requirements and industry standards.'
    ]
  },
  {
    title: 'Technical Lead',
    company: 'Nextbrain Technologies',
    duration: 'Jun 2018 - Nov 2018',
    details: [
      'Managed the end-to-end development of web applications using React JS, optimizing code for scalability and maintainability.',
      'Collaborated closely with stakeholders to gather requirements and deliver solutions that exceeded client expectations.'
    ]
  }
];

const projects = [
  {
    name: 'Toyota VCG (Vehicle Configuration Gateway) App',
    details: [
      'Designed and developed this application using React JS, Node JS, Material UI, GraphQL, Jest.',
      'Architected the app from scratch, implemented complex specifications handling and integrated nested UI components.',
      'Developed AppSync real-time data update application wide.'
    ]
  },
  {
    name: 'Ascension One App',
    details: [
      'Developed web application for patient care using React JS and NextJS, enhancing user experience with intuitive UI components and state management using Redux.',
      'Involved in API and database design using Node JS and Spring Boot using AWS Aurora and DynamoDB and also was part of elastic search implementation.'
    ]
  },
  {
    name: 'GLG Experts Network App',
    details: [
      'This web application was developed using React JS for the network members where they can create and maintain their profile, get assigned for a particular project through appointment booking etc.',
      'Developed entire appointment booking profile account, resume, help, FAQ, contact us etc.'
    ]
  },
  {
    name: 'Blackberry Product Catalog Admin App',
    details: [
      'This application is used to capture various product details and images in the back office for the products information to be displayed on the products website.',
      'Technology used are React JS, Material UI, GraphQL.',
      'Led development of various modules, agile ceremonies and code reviews, driving continuous improvement and team performance.'
    ]
  }
];

export default App;
