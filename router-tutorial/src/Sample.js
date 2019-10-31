import React, { Component } from 'react';

class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };
}

export default HistorySample;