import { useState, useEffect } from 'react';

export default function usePromise(promiseCreate, deps) {
    // 대기 중/와료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

    });
}