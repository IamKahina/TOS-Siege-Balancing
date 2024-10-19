import React from 'react';

interface ImageBarProps {
  height: number;
}

const TosTopBar: React.FC<ImageBarProps> = ({ height }) => {
  return (
    <div className="image-bar-container" style={{ height: `${height}px` }}>
      <img src="https://i.imgur.com/GSApxt0.png" alt="Logo" className="logo-image" />
      
      <div className="repeating-bar"></div>
    </div>
  );
};

export default TosTopBar;
