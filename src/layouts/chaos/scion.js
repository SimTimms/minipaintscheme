import React from 'react';
import primary from '../../assets/scion/primary.png';
import trim from '../../assets/scion/scion-trim.png';
import cloth from '../../assets/scion/scion-cloth.png';
import eyes from '../../assets/scion/scion-eyes.png';
import boots from '../../assets/scion/scion-boots.png';
import helmet from '../../assets/scion/scion-helmet.png';
import straps from '../../assets/scion/scion-straps.png';
import muzzle from '../../assets/scion/scion-weapons.png';
import bronze from '../../assets/scion/scion-bronze.png';
import roll from '../../assets/scion/scion-roll.png';
import knee from '../../assets/scion/scion-knee.png';

export function Scion({ scheme, modelSize }) {
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
        src={primary}
        style={{
          maxWidth: modelSize,
          filter: scheme.primary,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={straps}
        style={{
          maxWidth: modelSize,
          filter: scheme.rope,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={muzzle}
        style={{
          maxWidth: modelSize,
          filter: scheme.muzzle,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={helmet}
        style={{
          maxWidth: modelSize,
          filter: scheme.helmet,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={boots}
        style={{
          maxWidth: modelSize,
          filter: scheme.fist,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={trim}
        style={{
          maxWidth: modelSize,
          filter: scheme.trim,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={cloth}
        style={{
          maxWidth: modelSize,
          filter: scheme.quart2,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={eyes}
        style={{
          maxWidth: modelSize,
          filter: scheme.eyes,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={bronze}
        style={{
          maxWidth: modelSize,
          filter: scheme.bronze,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={roll}
        style={{
          maxWidth: modelSize,
          filter: scheme.jewel,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={knee}
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
