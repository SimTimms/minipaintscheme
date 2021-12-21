import React from 'react';
import primarisFull from '../../assets/primaris-full.png';
import primarisTrim from '../../assets/primaris-trim.png';
import primarisKnee from '../../assets/primaris-knee.png';

export function Intercessor({ scheme, modelSize }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        src={primarisFull}
        style={{
          maxWidth: modelSize,
          filter: scheme.primary,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={primarisTrim}
        style={{
          maxWidth: modelSize,
          filter: scheme.trim,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={primarisKnee}
        style={{
          maxWidth: modelSize,
          filter: scheme.knee,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
    </div>
  );
}
