import React from 'react';
import styles from './FeatureCard.module.css'; // Ensure you have this CSS module created for styling

interface FeatureProps {
  title: string;
  description: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, onClick }) => {
  return (
    <div className={styles.featureCard} onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
