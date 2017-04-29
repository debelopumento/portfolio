import reactCSS from 'reactcss';
import React, { PureComponent } from 'react';
import ProjectsInfo from './projectsInfo';

const styles = reactCSS({
  default: {
    sectionTitle: {
      color: '#ff77c6',
    },
    projectContainer: {
      width: '100%',
      height: 150,
      backgroundColor: 'blue',
      display: 'block',
    },
    thumbContainer: {
      backgroundColor: 'red',
      width: 60,
    },
    infoContainer: {
      width: '80%',
      height: 150,
      float: 'right',
    },
    projectInfoText: {
      display: 'block',
      margin: 3,
      fontSize: 13,
      color: '#494949',
    },
    projectInfoLink: {
      margin: 3,
      fontSize: 13,
      color: '#494949',
    },
  },
});

const projectDisplay = Object.keys(ProjectsInfo).map((projectId, index) => {
  const project = ProjectsInfo[index];
  console.log(1, project);
  return (
    <div key={index} style={styles.projectContainer}>
      <span style={styles.thumbContainer}>
        thumb
      </span>
      <span style={styles.infoContainer}>
        <p style={styles.projectInfoText}>{project.name}</p>
        <p style={styles.projectInfoText}>{project.description}</p>
        <a style={styles.projectInfoLink} href={project.demo} target="blank">
          Demo
        </a>
        <a style={styles.projectInfoLink} href={project.gitHub} target="blank">
          Git Hub
        </a>
        <p style={styles.projectInfoText}>{project.techUsed}</p>
      </span>
    </div>
  );
});

export default projectDisplay;
