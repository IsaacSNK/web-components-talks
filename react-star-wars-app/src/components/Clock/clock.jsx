import { useEffect, useState } from "react";

export function Clock(props) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);
    return (<div>{time.toLocaleString()}</div>);
}