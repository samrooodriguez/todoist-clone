import React from 'react';
import moment from "moment";
import { FaSpaceShuttle } from "react-icons/all";


export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
            <li
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().format('DD/MM/YYYY'));
                }}
                data-testid="task-date-overlay"
                >
                <span>
                    <FaSpaceShuttle />
                </span>
                <span>Today</span>
            </li>
        </ul>
    </div>
);
