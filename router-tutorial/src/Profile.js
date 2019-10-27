import React from 'react';

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
};