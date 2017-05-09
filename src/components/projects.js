import React, { PureComponent } from "react";
import reactCSS from "reactcss";
import ProjectsInfo from "./projectsInfo";

class Projects extends PureComponent {
    static bounds() {
        return {
            mobile: {
                minWidth: 0,
                maxWidth: 500
            }
        };
    }

    render() {
        const projectDisplay = Object.keys(
            ProjectsInfo
        ).map((projectId, index) => {
            const project = ProjectsInfo[index];
            return (
                <div key={index} className="projectContainer">
                    <span>
                        <a href={project.demo} target="blank">
                            <img
                                className="thumbnail"
                                src={project.thumbnail}
                                id={index}
                            />
                        </a>
                    </span>
                    <span className="projectInfoContainer">
                        <p className="projectTitle">{project.name}</p>
                        <p
                            style={{
                                color: "#865c74",
                                marginTop: 2,
                                marginBottom: 2
                            }}
                        >
                            {project.description}
                        </p>
                        <a
                            style={{ color: "#5fb4a2" }}
                            href={project.demo}
                            target="blank"
                        >
                            Demo
                        </a>
                        <p
                            style={{
                                display: "inline",
                                marginLeft: 5,
                                color: "#494949"
                            }}
                        >
                            |{" "}
                        </p>
                        <a
                            style={{ color: "#5fb4a2" }}
                            href={project.gitHub}
                            target="blank"
                        >
                            Git Hub
                        </a>
                        <p style={{ color: "#aaa", fontSize: 14 }}>
                            {project.techUsed}
                        </p>
                    </span>
                </div>
            );
        });
        return (
            <div style={{ margin: 15 }}>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 25,
                        color: "#e85568",
                        marginTop: 55
                    }}
                >
                    Projects
                </p>
                {projectDisplay}

            </div>
        );
    }
}

export default Projects;
