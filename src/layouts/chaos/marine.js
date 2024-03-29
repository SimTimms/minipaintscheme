import React from 'react';
import chaos from '../../assets/agressor.png';
import chaosSecondary from '../../assets/agressor-trim.png';
import ropeImg from '../../assets/agressor-rope.png';
import aquilaImg from '../../assets/agressor-aquila.png';
import penantImg from '../../assets/agressor-penant.png';
import jewelImg from '../../assets/agressor-jewel.png';
import skullImg from '../../assets/agressor-skulls.png';
import leftImg from '../../assets/leftshoulder.png';
import gunbeltsImg from '../../assets/agressor-gunbelts.png';
import helmetImg from '../../assets/agressor-helmet.png';
import helmetXmasImg from '../../assets/agressor-xmas.png';
import quart2Img from '../../assets/quart2.png';
import quart3Img from '../../assets/quart3.png';
import eyesImg from '../../assets/agressor-eyes.png';
import missilesImg from '../../assets/agressor-missiles.png';
import grassImg from '../../assets/agressor-grass.png';
import baseImg from '../../assets/agressor-base.png';
import fistImg from '../../assets/fist.png';
import muzzleImg from '../../assets/muzzle.png';
import bronzeImg from '../../assets/bronze.png';
import kneeImg from '../../assets/knee.png';

export function Marine({ scheme, modelSize, xmas }) {
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
        src={chaos}
        style={{
          maxWidth: modelSize,
          filter: scheme.primary,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={quart2Img}
        style={{
          maxWidth: modelSize,
          filter: scheme.quart2,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={quart3Img}
        style={{
          maxWidth: modelSize,
          filter: scheme.quart3,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={leftImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.left,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={chaosSecondary}
        style={{
          maxWidth: modelSize,
          filter: scheme.trim,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={aquilaImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.aquila,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={kneeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.knee,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={ropeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.rope,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={penantImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.penant,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={jewelImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.jewel,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={helmetImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.helmet,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      {xmas && (
        <img
          src={helmetXmasImg}
          style={{
            maxWidth: modelSize,
            filter: scheme.helmetXmas,
            position: 'absolute',
            top: 'auto',
            left: 'auto',
          }}
        />
      )}
      <img
        src={eyesImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.eyes,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={skullImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.skull,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={missilesImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.missiles,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={gunbeltsImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.gunbelts,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={bronzeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.bronze,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={muzzleImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.muzzle,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={fistImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.fist,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={baseImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.base,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
      <img
        src={grassImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.grass,
          position: 'absolute',
          top: 'auto',
          left: 'auto',
        }}
      />
    </div>
  );
}
