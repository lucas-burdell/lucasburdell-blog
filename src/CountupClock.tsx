import React, { FunctionComponent, useState } from "react";
import { useInterval } from "./useInterval";
import moment from "moment";
interface ITimePassed {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
function getTimeSince(startStamp: string): ITimePassed {
    const now = moment();
    const then = moment(startStamp);
    let calculate = moment();
    const yearsSince = now.diff(then, "years");
    calculate = calculate.subtract(yearsSince, "years");
    const monthsSince = calculate.diff(then, "months");
    calculate = calculate.subtract(monthsSince, "months");
    const daysSince = calculate.diff(then, "days");
    calculate = calculate.subtract(daysSince, "days");
    const hoursSince = calculate.diff(then, "hours");
    calculate = calculate.subtract(hoursSince, "hours");
    const minutesSince = calculate.diff(then, "minutes");
    calculate = calculate.subtract(minutesSince, "minutes");
    const secondsSince = calculate.diff(then, "seconds");
    calculate = calculate.subtract(secondsSince, "seconds");
    return {
        years: yearsSince,
        months: monthsSince,
        days: daysSince,
        hours: hoursSince,
        minutes: minutesSince,
        seconds: secondsSince
    };
}
function formatTimeSince(timePassed: ITimePassed) {
    const times = [
        { type: "year", value: timePassed.years },
        { type: "month", value: timePassed.months },
        { type: "day", value: timePassed.days },
        { type: "hour", value: timePassed.hours },
        { type: "minute", value: timePassed.minutes },
        { type: "second", value: timePassed.seconds }
    ];
    const prunedTimes = [];
    for (const timeSlice of times) {
        if (timeSlice.value > 0) {
            prunedTimes.push(timeSlice);
        }
    }
    let output = "";
    for (let i = 0; i < prunedTimes.length - 1; i++) {
        const slice = prunedTimes[i];
        output = `${output} ${slice.value} ${slice.type}${slice.value > 1 ? "s" : ""}, `;
    }
    const last = prunedTimes[prunedTimes.length - 1];
    output = `${output} and ${last.value} ${last.type}${last.value > 1 ? "s" : ""}`;
    return output;
}

interface IProps {
    readonly date: string;
}

export const CountupClock: FunctionComponent<IProps> = (props) => {
    const [renderEdge, setRenderEdge] = useState(false);
    useInterval(() => setRenderEdge(!renderEdge), 1000);
    const timeSince = getTimeSince(props.date);
    const timeSinceFormatted = formatTimeSince(timeSince);
    return (<span>
        {timeSinceFormatted}
    </span>);
};
