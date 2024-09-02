import React, { useState, useEffect } from 'react'; // Added useEffect
import { Section } from '../Styles';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/th (3).jpg';
import { db } from '../firebase'; // Import the Firebase Firestore instance
import { collection, getDocs } from 'firebase/firestore'; // Added correct imports from Firebase

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);

  const categories = ['All', 'Web Development', 'Full Stack Projects'];

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'project'));
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  const filteredProjects = selectedCategory === 'All'
  ? projects
  : projects.filter(project => project.category === selectedCategory);

console.log('Filtered Projects:', filteredProjects); // Add this line to debug

  return (
    <Section style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>

      {/* Category Filter */}
      <div style={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.filterButton,
              backgroundColor: selectedCategory === category ? '#007BFF' : '#F8F9FA',
              color: selectedCategory === category ? '#FFF' : '#000',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Gallery */}
      <div style={styles.projectContainer}>
        <div style={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <p style={styles.projectTechnologies}>
                <strong>Technologies:</strong> {project.technologies ? project.technologies.split(',').map(item => item.trim()).join(', ') : 'N/A'}
              </p>
              <Link to={`/projects/${project.id}`} style={styles.detailsLink}>View Details</Link>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const styles = {
  section: {
    position: 'relative',
    padding: '2rem',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    maxWidth: '1800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
  },
  categoryFilter: {
    textAlign: 'center',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allows wrapping of buttons on smaller screens
    gap: '10px', // Space between buttons
  },
  filterButton: {
    padding: '10px 20px',
    borderRadius: '50px',
    border: '1px solid #007BFF',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  projectContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '200px',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For Internet Explorer and Edge
  },
  projectGrid: {
    display: 'flex',
    gap: '20px',
    padding: '0 2rem',
    flexWrap: 'wrap', // Allows wrapping for smaller screens
    justifyContent: 'center', // Center the items
  },
  projectCard: {
    flex: '1 1 calc(100% - 40px)', // Allows wrapping, reduces width to fit in a single column on small screens
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  projectTitle: {
    fontSize: '1.75rem',
    color: '#007BFF',
    marginBottom: '1rem',
  },
  projectDescription: {
    color: '#555',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  projectTechnologies: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem',
  },
  detailsLink: {
    display: 'inline-block',
    color: '#007BFF',
    textDecoration: 'none',
    marginTop: '1rem',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  githubLink: {
    display: 'inline-block',
    marginTop: '10px',
    fontSize: '1rem',
    color: '#6c757d',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

// Hide scrollbar for WebKit-based browsers (Chrome, Safari, etc.)
styles.projectContainer['::-webkit-scrollbar'] = {
  display: 'none',
};

export default Portfolio;
