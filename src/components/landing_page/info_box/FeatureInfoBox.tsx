import React from 'react';
import styles from './FeatureInfoBox.module.css'; // Ensure you have this CSS module created for styling

interface FeatureInfoBoxProps {
  title: string;
  description: string;
  onClose: () => void; // Function to close the info box
}

const FeatureInfoBox: React.FC<FeatureInfoBoxProps> = ({ title, description, onClose }) => {
  return (
    <div className={styles.infoBoxOverlay} onClick={onClose}>
      <div className={styles.infoBox} onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FeatureInfoBox;
