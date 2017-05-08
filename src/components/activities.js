import React, { PureComponent } from "react";
//import reactCSS from "reactcss";
import { connect } from "react-redux";
import * as actions from "../actions/actionIndex";
import "../index.css";

class Activities extends PureComponent {
    componentWillMount() {
        this.props.loadActivities();
    }
    render() {
        if (this.props.activities !== null) {
            const activitiesDisplay = Object.keys(
                this.props.activities
            ).map(index => {
                const activity = this.props.activities[index];
                if (activity.type === "push") {
                    return (
                        <div key={index}>
                            <p style={{ color: "#aaa" }}>{activity.date}</p>
                            <p style={{ color: "#d4c5a8" }}>
                                Pushed
                                {" "}
                                {activity.commits}
                                {" "}
                                commit(s) to
                                {" "}
                                <a
                                    href={activity.repoUrl}
                                    target="blank"
                                    style={{ color: "#d4c5a8" }}
                                >
                                    {activity.repoName}
                                </a>
                            </p>
                        </div>
                    );
                } else if (activity.type === "watch") {
                    return (
                        <div key={index}>
                            <p style={{ color: "#aaa" }}>
                                {activity.date}
                            </p>
                            <p style={{ color: "#d4c5a8" }}>
                                Stared
                                <a
                                    href={activity.repoUrl}
                                    target="blank"
                                    style={{ color: "#d4c5a8" }}
                                >
                                    {" "}{activity.repoName}
                                </a>
                            </p>
                        </div>
                    );
                }
            });
            return (
                <div
                    style={{ margin: 5, marginBottom: 15, textAlign: "center" }}
                >
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: 25,
                            color: "#ffd1ec",
                            marginTop: 55
                        }}
                    >
                        GitHub Activities
                    </p>
                    {activitiesDisplay}
                </div>
            );
        } else return <div />;
    }
}

export default connect(
    storeState => ({
        activities: storeState.activities
    }),
    {
        loadActivities: actions.loadActivities
    }
)(Activities);
