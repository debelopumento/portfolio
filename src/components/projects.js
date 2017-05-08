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
        /*
        const styles = reactCSS({
            default: {
                projectDisplayContainer: {
                    width: "90%"
                },
                sectionTitle: {
                    color: "#ff77c6"
                },
                sectionTitle: {
                    color: "#ff77c6"
                },
                projectContainer: {
                    width: "100%",
                    height: 180,
                    display: "block",
                    marginBottom: 15
                },

                thumbnail: {
                    width: 60,
                    borderRadius: 30,
                    opacity: 0.8,
                    marginTop: 5
                },
                infoContainer: {
                    width: "80%",
                    height: 150,
                    marginLeft: 15,
                    position: "absolute"
                },
                projectInfoText: {
                    display: "block",
                    margin: 3,
                    fontSize: 13,
                    color: "#494949"
                },
                projectInfoLink: {
                    margin: 3,
                    fontSize: 13,
                    color: "#494949"
                },
                techUsed: {
                    display: "block",
                    margin: 3,
                    fontSize: 13,
                    color: "#bbb"
                }
            },
            mobile: {
                projectContainer: {
                    height: 150
                },
                thumbnail: {
                    width: 30
                }
            }
        });
        */
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
                                color: "#595959",
                                marginTop: 2,
                                marginBottom: 2
                            }}
                        >
                            {project.description}
                        </p>
                        <a
                            style={{ color: "#d4c5a8" }}
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
                            style={{ color: "#d4c5a8" }}
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
            <div>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 25,
                        color: "#ffd1ec",
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
