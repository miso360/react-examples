import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search,{
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열입니다.

    return (
        <div>
            <h1>소개</h1>
            <p>라우터 기초 예제</p>
            {showDetail && <p>detail value is true</p>}
        </div>
    );
}

export default About;