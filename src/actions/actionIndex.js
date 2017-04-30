import axios from 'axios';
import store from '../store';

export const loadActivities = () =>
    dispatch => {
        const url = 'https://api.github.com/users/debelopumento/events';
        return axios
            .get(url)
            .then(data => {
                const activities = data.data;
                let index = 0;
                let parsedActivities = [];
                const parseActivity = index => {
                    const activity = activities[index];
                    const type = activity.type;
                    const date = activity.created_at.slice(0, 10);
                    const repoName = activity.repo.name;
                    const repoHandle = activity.repo.url.slice(
                        29,
                        activity.repo.url.length
                    );
                    const repoUrl = `https://github.com/${repoHandle}`;
                    if (type === 'PushEvent') {
                        const event = {
                            date,
                            type: 'push',
                            commits: activity.payload.commits.length,
                            repoName,
                            repoUrl,
                        };
                        parsedActivities.push(event);
                        if (parsedActivities.length < 10) {
                            index++;
                            parseActivity(index);
                        }
                    } else if (type === 'WatchEvent') {
                        const event = {
                            date,
                            type: 'watch',
                            repoName,
                            repoUrl,
                        };
                        parsedActivities.push(event);
                        if (parsedActivities.length < 10) {
                            index++;
                            parseActivity(index);
                        }
                    } else {
                        index++;
                        parseActivity(index);
                    }
                };
                parseActivity(0);
                dispatch({
                    type: 'LOAD_ACTIVITIES',
                    payload: parsedActivities,
                });
            })
            .catch(e => {
                console.log(e);
            });
    };
