'use client';
import { TaskProps } from "lib/types";
import { useState } from "react";
import styles from "./Task.module.css";


const Task: React.FC<TaskProps> = ({ id, text, onTaskChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onTaskChange(id, newCheckedState); // Assuming onTaskChange can accept the new checked state
  };

  return (
    <div className={`${styles.task} ${isChecked ? styles.checked : ''}`}>
      <span className={styles.taskText}>{text}</span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
      />
    </div>
  );
};

export default Task;
