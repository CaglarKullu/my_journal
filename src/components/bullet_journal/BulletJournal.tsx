'use client'
import React from 'react';
import { BulletJournalProps, SideProps } from 'lib/types'; 
import styles from './BulletJournal.module.css'; 
import Task from '@components/bullet_journal/task/Task';

const BulletJournal: React.FC<BulletJournalProps> = ({ leftSide, rightSide }) => {
  const renderTasks = (side: SideProps) => (
    <div>
      <h2>{side.title}</h2>
      <ul>
        {side.bulletPoints.map((task) => (
          <li key={task.id}>
            <Task
              id={task.id}
              text={task.text}
            onTaskChange={(id, isChecked) => side.onTaskChange(id, isChecked)}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        {renderTasks(leftSide)}
      </div>
      <div className={styles.side}>
        {renderTasks(rightSide)}
      </div>
    </div>
  );
};

export default BulletJournal;