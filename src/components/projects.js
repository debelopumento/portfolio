import React, { PureComponent } from 'react';
import reactCSS from 'reactcss';
import Thumbnail from './thumbnail';
import ProjectsInfo from './projectsInfo';

const styles = reactCSS({
    default: {
        projectDisplayContainer: {
            width: '90%',
        },
        sectionTitle: {
            color: '#ff77c6',
        },
        sectionTitle: {
            color: '#ff77c6',
        },
        projectContainer: {
            width: '100%',
            height: 150,
            display: 'block',
        },
        thumbContainer: {
            position: 'relative',
        },
        thumbnail: {
            width: 60,
            borderRadius: 30,
            opacity: 0.8,
            marginTop: 5,
        },
        infoContainer: {
            width: '80%',
            height: 150,
            marginLeft: 15,
            position: 'absolute',
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

class Projects extends PureComponent {
    state = {
        showThumbnail: false,
        displayedThumbIndex: 0,
    };

    showImg = event => {
        const displayedThumbIndex = event.target.id;
        this.setState({ showThumbnail: true });
        this.setState({ displayedThumbIndex: parseInt(displayedThumbIndex) });
    };

    hideImg = event => {
        this.setState({ showThumbnail: false });
    };

    render() {
        const projectDisplay = Object.keys(
            ProjectsInfo
        ).map((projectId, index) => {
            const project = ProjectsInfo[index];
            console.log(1, project);

            return (
                <div key={index} style={styles.projectContainer}>
                    <span style={styles.thumbContainer}>
                        <img
                            style={styles.thumbnail}
                            src={project.thumbnail}
                            id={index}
                            onMouseOver={this.showImg}
                            onMouseOut={this.hideImg}
                        />
                    </span>
                    <span style={styles.infoContainer}>
                        <p style={styles.projectInfoText}>{project.name}</p>
                        <p style={styles.projectInfoText}>
                            {project.description}
                        </p>
                        <a
                            style={styles.projectInfoLink}
                            href={project.demo}
                            target="blank"
                        >
                            Demo
                        </a>
                        <a
                            style={styles.projectInfoLink}
                            href={project.gitHub}
                            target="blank"
                        >
                            Git Hub
                        </a>
                        <p style={styles.projectInfoText}>{project.techUsed}</p>
                    </span>
                </div>
            );
        });
        return (
            <div style={styles.projectDisplayContainer}>
                <Thumbnail
                    imgUrl={ProjectsInfo[this.state.displayedThumbIndex].image}
                    display={this.state.showThumbnail}
                />
                <p style={styles.sectionTitle}>
                    Projects
                </p>
                {projectDisplay}

            </div>
        );
    }
}

export default Projects;
