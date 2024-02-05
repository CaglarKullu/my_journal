'use client'
import React, { useState } from 'react';
import BulletJournal from '@components/bullet_journal/BulletJournal';
import { SideProps, Task, Category, Priority } from 'lib/types'; // Adjust import paths as needed

const HomePage: React.FC = () => {
  // Curried function to handle task changes, pre-specifying the side ('leftSide' or 'rightSide')
  const curriedHandleTaskChange = (side: 'leftSide' | 'rightSide') => 
    (id: number, isChecked: boolean) => {
      const setSide = side === 'leftSide' ? setLeftSide : setRightSide;
      setSide(prevSide => ({
        ...prevSide,
        bulletPoints: prevSide.bulletPoints.map(task =>
          task.id === id ? { ...task, checked: isChecked } : task
        ),
      }));
    };

  // State initialization for leftSide with curried handleTaskChange function
  const [leftSide, setLeftSide] = useState<SideProps>({
    title: 'Left Side',
    bulletPoints: [
      {
        id: 1,
        text: 'Complete project report',
        checked: false,
        category: Category.Task,
        priority: Priority.High,
        dueDate: new Date('2023-01-01')
      },
      {
        id: 2,
        text: 'Prepare presentation',
        checked: false,
        category: Category.Note,
        priority: Priority.Medium,
        dueDate: new Date('2023-01-05')
      }
    ],
    onTaskChange: curriedHandleTaskChange('leftSide'),
  });

  // State initialization for rightSide with curried handleTaskChange function
  const [rightSide, setRightSide] = useState<SideProps>({
    title: 'Right Side',
    bulletPoints: [
      {
        id: 3,
        text: 'Grocery shopping',
        checked: false,
        category: Category.Event,
        priority: Priority.Low,
        dueDate: new Date('2023-01-03')
      },
      {
        id: 4,
        text: 'Annual doctor appointment',
        checked: false,
        category: Category.Task,
        priority: Priority.High,
        dueDate: new Date('2023-01-10')
      }
    ],
    onTaskChange: curriedHandleTaskChange('rightSide'),
  });

  // Component render logic
  return (
    <div>
      <h1>My Bullet Journal</h1>
      <BulletJournal leftSide={leftSide} rightSide={rightSide} />
    </div>
  );
};

export default HomePage;
