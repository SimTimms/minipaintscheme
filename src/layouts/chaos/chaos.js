import React from 'react';
import chaos from '../../assets/chaos-primary.png';
import chaosSecondary from '../../assets/chaos-trim.png';
import ropeImg from '../../assets/agressor-rope.png';
import aquilaImg from '../../assets/agressor-aquila.png';
import penantImg from '../../assets/chaos-pendant.png';
import jewelImg from '../../assets/agressor-jewel.png';
import skullImg from '../../assets/agressor-skulls.png';
import leftImg from '../../assets/leftshoulder.png';
import gunbeltsImg from '../../assets/chaos-hair.png';
import helmetImg from '../../assets/agressor-helmet.png';
import quart2Img from '../../assets/chaos-quart2.png';
import quart3Img from '../../assets/chaos-quart3.png';
import eyesImg from '../../assets/agressor-eyes.png';
import missilesImg from '../../assets/chaos-tabard.png';
import grassImg from '../../assets/agressor-grass.png';
import baseImg from '../../assets/agressor-base.png';
import fistImg from '../../assets/fist.png';
import muzzleImg from '../../assets/muzzle.png';
import bronzeImg from '../../assets/chaos-bronze.png';
import kneeImg from '../../assets/chaos-knee.png';

export function ChaosMarine({ scheme, modelSize }) {
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
          top: 0,
          left: 0,
        }}
      />

      <img
        src={quart2Img}
        style={{
          maxWidth: modelSize,
          filter: scheme.quart2,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <img
        src={quart3Img}
        style={{
          maxWidth: modelSize,
          filter: scheme.quart3,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/*
      <img
        src={leftImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.left,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      */}
      <img
        src={chaosSecondary}
        style={{
          maxWidth: modelSize,
          filter: scheme.trim,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/*}
      <img
        src={aquilaImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.aquila,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      */}
      <img
        src={kneeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.knee,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/*}
      <img
        src={ropeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.rope,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      */}
      <img
        src={penantImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.penant,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/*
      <img
        src={jewelImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.jewel,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={helmetImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.helmet,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={eyesImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.eyes,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={skullImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.skull,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />*/}
      <img
        src={missilesImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.missiles,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={gunbeltsImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.gunbelts,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <img
        src={bronzeImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.bronze,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/*
      <img
        src={muzzleImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.muzzle,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={fistImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.fist,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={baseImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.base,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={grassImg}
        style={{
          maxWidth: modelSize,
          filter: scheme.grass,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />*/}
    </div>
  );
}
