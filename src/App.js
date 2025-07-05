import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>RAMESH KUMAR P</h1>
        <p style={styles.contact}>
          📱 +91 9884532891 | 📧 <a href="mailto:rameshkumarpoliah@gmail.com" style={styles.link}>rameshkumarpoliah@gmail.com</a> | 🔗 <a href="https://www.linkedin.com/in/rameshkumarp/" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>

      <Section title="Summary">
        <p>Results-driven Architect with 14 years of experience developing high-performance and cutting-edge web applications using ReactJS, Next JS, Express JS, Node JS. Expertise in TypeScript, JavaScript, Redux, GraphQL, Jest, Java, Spring Boot, AWS and CI/CD pipelines. Proven leader in agile environments, delivering scalable, high-quality applications and driving team success. Recognized for technical excellence and problem-solving with multiple awards. Seeking to bring deep web expertise and innovative solutions to prospective tech company.</p>
      </Section>

      <Section title="Professional Experience">
        <Job
          title="Application Architect"
          company="IBM"
          duration="Sep 2022 - Present"
          bullets={[
            'Architect and develop scalable web applications using React JS, integrating features like notifications, GraphQL APIs and multilingual support.',
            'Lead and mentor a team of engineers in agile methodologies, ensuring high-quality code through rigorous peer reviews and code optimization.',
            'Implement CI/CD pipelines using Azure DevOps and AppCenter, optimizing deployment processes and reducing release times by 30%.',
            'Conduct in-depth performance profiling and debugging using DevTools, Sentry and Flipper to enhance app stability and user experience.'
          ]}
        />
        <Job
          title="Technical Architect"
          company="Impelsys"
          duration="Jul 2019 - Sep 2022"
          bullets={[
            'Spearheaded the development of web applications focusing on seamless user experience and performance optimization.',
            'Integrated Redux for state management, designed reusable components and implemented GraphQL for efficient data handling, reducing API response time by 20%.',
            'Built unit and regression tests with Jest, achieving 95% code coverage and reducing bugs by 40% in production.'
          ]}
        />
        <Job
          title="Technical Lead"
          company="Infomerica Inc"
          duration="Dec 2018 - Jun 2019"
          bullets={[
            'Led a cross-functional team to deliver React JS web applications with robust performance and responsive design, achieving a 4.8+ user rating across platforms.',
            'Conducted architecture design reviews, task monitoring and hands-on development to ensure project alignment with client requirements and industry standards.'
          ]}
        />
        <Job
          title="Technical Lead"
          company="Nextbrain Technologies"
          duration="Jun 2018 - Nov 2018"
          bullets={[
            'Managed the end-to-end development of web applications using React JS, optimizing code for scalability and maintainability.',
            'Collaborated closely with stakeholders to gather requirements and deliver solutions that exceeded client expectations.'
          ]}
        />
        <p style={styles.paragraph}><strong>Other Roles</strong></p>
        <ul>
          <li>Senior Software Engineer - III, Nous Infosystems (Aug 2017 – June 2018)</li>
          <li>Senior Consultant - IT, Sutherland Global Services (Mar 2016 – Aug 2017)</li>
          <li>Engineer, Aspire Systems (Feb 2013 – Mar 2016)</li>
          <li>Associate Technology L1, Publicis Sapient (Jan 2011 – Nov 2011)</li>
          <li>Graduate Trainee, Tata Consultancy Services (Jul 2007 – Feb 2008)</li>
        </ul>
      </Section>

      <Section title="Key Projects">
        <Project
          name="Toyota VCG (Vehicle Configuration Gateway) App"
          bullets={[
            'Designed and developed this application using React JS, Node JS, Material UI, GraphQL, Jest.',
            'Architected the app from scratch, implemented complex specifications handling and integrated nested UI components.',
            'developed AppSync real time data update application wide.'
          ]}
        />
        <Project
          name="Ascension One App"
          bullets={[
            'Developed web application for patient care using React JS and NextJS, enhancing user experience with intuitive UI components and state management using Redux.',
            'Involved in API and database design using Node JS and Spring Boot using AWS Aurora and DynamoDB and also was part of elastic search implementation.'
          ]}
        />
        <Project
          name="GLG Experts Network App"
          bullets={[
            'This web application was developed using React JS for for the network members where they can create and maintain their profile, get assigned for a particular project through appointment booking etc.',
            'Developed entire appointment booking profile account, resume, help, FAQ, contact us etc'
          ]}
        />
        <Project
          name="Blackberry Product Catalog Admin App"
          bullets={[
            'This application is used to capture various product details and images in the back office for the products information to be displayed on the products website. Technology used are React JS, Material UI, GraphQL.',
            'Led development of various modules, agile ceremonies and code reviews, driving continuous improvement and team performance.'
          ]}
        />
      </Section>

      <Section title="Technical Skills">
        <ul>
          <li>Languages: HTML, CSS, TypeScript, JavaScript, Java, Python</li>
          <li>Web & Backend: React JS, Express JS, Next JS, MongoDB, PostgreSQL, DynamoDB, Aurora DB</li>
          <li>Frameworks: Material UI, GraphQL, Jest, Node JS, i18next</li>
          <li>Cloud: AWS Lambda, API Gateway, DynamoDB, EC2, S3, IAM, Lambda, RDS, CloudWatch</li>
          <li>Tools: Visual Studio Code, Postman, Figma, Flipper, ESLint, Prettier</li>
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
        <p>© 2025 Ramesh Kumar P | <a href="https://ramesh.us" style={styles.link}>ramesh.us</a></p>
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
    <h3>{title}, <span style={styles.company}>{company}</span></h3>
    <p style={styles.duration}>{duration}</p>
    <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
  </div>
);

const Project = ({ name, bullets }) => (
  <div style={styles.job}>
    <h3>{name}</h3>
    <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
  </div>
);

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 24px',
    background: '#fdfdfd',
    color: '#1a202c',
    lineHeight: 1.6
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  name: {
    fontSize: '36px',
    marginBottom: '8px'
  },
  contact: {
    fontSize: '16px'
  },
  link: {
    color: '#2b6cb0',
    textDecoration: 'none'
  },
  section: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#2d3748',
    marginBottom: '16px',
    borderBottom: '2px solid #cbd5e0',
    paddingBottom: '4px'
  },
  job: {
    marginBottom: '20px'
  },
  company: {
    color: '#4a5568'
  },
  duration: {
    fontStyle: 'italic',
    fontSize: '14px',
    color: '#718096',
    marginBottom: '8px'
  },
  paragraph: {
    marginTop: '24px',
    marginBottom: '8px',
    fontWeight: 'bold'
  },
  footer: {
    textAlign: 'center',
    paddingTop: '40px',
    fontSize: '14px',
    color: '#4a5568'
  }
};

export default App;
