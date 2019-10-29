import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/ironman">ironman</Link>
                    <Link to="/profiles/captainamerica">captainamerica</Link>
                </li>
            </ul>            
        </div>
    );
};