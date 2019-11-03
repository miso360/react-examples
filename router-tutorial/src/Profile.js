import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    ironman: {
        name: '토니 스타크',
        description: "아이언맨"
    },
    captainamerica:{
        name: '크리스 에반스',
        description: "캡틴 아메리카"
    }
};

const Profile = ( { match } ) => {
    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>        
    );
};

export default Profile;