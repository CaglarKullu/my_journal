'use client'
import React, { useState } from 'react';
import Feature from '../feature_card/FeatureCard'; 
import FeatureInfoBox from '../info_box/FeatureInfoBox';
import styles from './Features.module.css'; 

const Features: React.FC = () => {
  const [featureInfo, setFeatureInfo] = useState<{ title: string; description: string } | null>(null);

  const features = [
    {
      title: "Daily Logs",
      description: "Track your daily activities with ease."
    },
    {
      title: "Monthly Overview",
      description: "Get a bird's-eye view of your month."
    },
    {
      title: "Customization",
      description: "Make it truly yours with customizable themes."
    }
    // Add more features as needed
  ];

  const handleFeatureClick = (title: string, description: string) => {
    setFeatureInfo({ title, description });
  };

  const closeFeatureInfo = () => setFeatureInfo(null);

  return (
    <div className={styles.container}>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            onClick={() => handleFeatureClick(feature.title, feature.description)}
          />
        ))}
      </div>
      {featureInfo && (
        <FeatureInfoBox
          title={featureInfo.title}
          description={featureInfo.description}
          onClose={closeFeatureInfo}
        />
      )}
    </div>
  );
};

export default Features;
