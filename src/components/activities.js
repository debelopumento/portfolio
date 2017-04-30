import React, { PureComponent } from 'react';
import reactCSS from 'reactcss';
import { connect } from 'react-redux';
import * as actions from '../actions/actionIndex';

const styles = reactCSS({
    default: {
        sectionTitle: {
            color: '#ff77c6',
        },
    },
});

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
                if (activity.type === 'push') {
                    return (
                        <div key={index}>
                            <p>{activity.date}</p>
                            <p>
                                Pushed
                                {' '}
                                {activity.commits}
                                {' '}
                                commit(s) to
                                {' '}
                                <a href={activity.repoUrl} target="blank">
                                    {activity.repoName}
                                </a>
                            </p>
                        </div>
                    );
                } else if (activity.type === 'watch') {
                    return (
                        <div key={index}>
                            <p>
                                {activity.date}
                            </p>
                            <p>
                                Began watching
                                <a href={activity.repoUrl} target="blank">
                                    {' '}{activity.repoName}
                                </a>
                            </p>
                        </div>
                    );
                }
            });
            return (
                <div style={styles.activitiesContainer}>
                    <p style={styles.sectionTitle}>
                        Activities
                    </p>
                    {activitiesDisplay}
                </div>
            );
        } else
            return <div />;
    }
}

export default connect(
    storeState => ({
        activities: storeState.activities,
    }),
    {
        loadActivities: actions.loadActivities,
    }
)(Activities);
