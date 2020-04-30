import React, { useEffect } from 'react';

import orcImg from '../../assets/orc-primary.png';
import orcPenant from '../../assets/orc-penant.png';
import orcTrim from '../../assets/orc-trim.png';
import paintImg from '../../assets/paint.png';
import aquilaIcon from '../../assets/aquilaicon.jpg';
import ropeIcon from '../../assets/ropeicon.jpg';
import pendantIcon from '../../assets/pendanticon.jpg';
import skullsIcon from '../../assets/skullsicon.jpg';
import leftIcon from '../../assets/leftshouldericon.jpg';
import primayIcon from '../../assets/primaryicon.jpg';
import helmetIcon from '../../assets/helmeticon.jpg';
import kneeIcon from '../../assets/kneeicon.jpg';
import muzzleIcon from '../../assets/muzzleicon.jpg';
import fistIcon from '../../assets/fisticon.jpg';
import trimIcon from '../../assets/trimicon.jpg';
import quart2Icon from '../../assets/quart2icon.jpg';
import quart3Icon from '../../assets/quart3icon.jpg';
import missilesIcon from '../../assets/missilesicon.jpg';
import jewelIcon from '../../assets/jewelicon.jpg';
import eyesIcon from '../../assets/eyesicon.jpg';
import gunbeltIcon from '../../assets/gunbelticon.jpg';
import bronzeIcon from '../../assets/bronzeicon.jpg';
import grassIcon from '../../assets/grassicon.jpg';
import baseIcon from '../../assets/baseicon.jpg';
import { PaintPot } from './Paint';
import { Marine } from './marine';

const colors = {
  blue: 'hue-rotate(40deg) brightness(50%) saturate(200%)',
  ultramarine: 'hue-rotate(45deg) saturate(150%) brightness(70%)',
  teal: 'hue-rotate(0deg) saturate(100%) brightness(100%)',
  purple: 'hue-rotate(80deg)',
  pink: 'hue-rotate(120deg)',
  red: 'hue-rotate(160deg)',
  darkRed: 'hue-rotate(180deg) saturate(200%) brightness(70%)',
  orange: 'hue-rotate(200deg)',
  yellow: 'hue-rotate(240deg)',
  scorpion: 'hue-rotate(280deg)',
  green: 'hue-rotate(320deg)',
  silver: 'hue-rotate(0deg) saturate(0%) brightness(120%)',
  white: 'hue-rotate(0deg) saturate(0%) brightness(200%)',
  corvus: 'hue-rotate(300deg) saturate(0%) brightness(30%)',
  black: 'hue-rotate(300deg) saturate(0%) brightness(20%)',
  xv88: 'hue-rotate(226.8deg) saturate(100%) brightness(70.7%)',
  caliban: 'hue-rotate(316.8deg) saturate(100%) brightness(30.7%)',
  jokaero: 'hue-rotate(190deg) saturate(200%) brightness(100%)',
  wraithbone: 'hue-rotate(230deg) saturate(50%) brightness(200%)',
  fang: 'hue-rotate(45deg) saturate(70%) brightness(70%)',
  retributor: 'hue-rotate(230deg) saturate(120%) brightness(150%)',
  averland: 'hue-rotate(220deg) saturate(120%) brightness(150%)',
  leadbelcher: 'hue-rotate(0deg) saturate(0%) brightness(90%) contrast(180%)',
  deathguard: 'hue-rotate(290deg) saturate(30%) brightness(90%) ',
  warplock: 'hue-rotate(200deg) saturate(30%) brightness(90%) contrast(200%)',
  bloodangels:
    'hue-rotate(180deg) saturate(200%) brightness(70%) contrast(140%)',
};

const initialColour =
  'hue-rotate(40deg) brightness(50%) saturate(0%) contrast(50%)';
export function Chaos() {
  const [scheme, setScheme] = React.useState(
    JSON.parse(localStorage.getItem('theme')) || {
      primary: initialColour,
      quart2: initialColour,
      quart3: initialColour,
      left: initialColour,
      trim: initialColour,
      rope: initialColour,
      aquila: initialColour,
      penant: initialColour,
      jewel: initialColour,
      skull: initialColour,
      gunbelts: initialColour,
      fist: initialColour,
      knee: initialColour,
      helmet: initialColour,
      eyes: initialColour,
      missiles: initialColour,
      base: initialColour,
      bronze: initialColour,
      grass: initialColour,
      muzzle: initialColour,
    },
  );

  const [part, setPart] = React.useState('primary');
  const modelSize = 300;
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(scheme));
  }, [scheme]);

  function setColor(color) {
    const schemeCopy = { ...scheme };
    schemeCopy[`${part}`] = color;
    setScheme({ ...schemeCopy });
    const stringObj = JSON.stringify(schemeCopy);
    localStorage.setItem('theme', JSON.stringify(stringObj));
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        position: 'fixed',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fff',
          display: 'flex',
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#222',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <img
            src={primayIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('primary')}
          />
          <img
            src={quart2Icon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('quart2')}
          />
          <img
            src={quart3Icon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('quart3')}
          />

          <img
            src={leftIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('left')}
          />

          <img
            src={trimIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('trim')}
          />
          <img
            src={fistIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('fist')}
          />
          <img
            src={kneeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('knee')}
          />
          <img
            src={aquilaIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('aquila')}
          />
          <img
            src={ropeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('rope')}
          />
          <img
            src={pendantIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('penant')}
          />
          <img
            src={jewelIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('jewel')}
          />
          <img
            src={skullsIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('skull')}
          />
          <img
            src={gunbeltIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('gunbelts')}
          />
          <img
            src={muzzleIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('muzzle')}
          />
          <img
            src={bronzeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('bronze')}
          />
          <img
            src={helmetIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('helmet')}
          />
          <img
            src={eyesIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('eyes')}
          />
          <img
            src={missilesIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('missiles')}
          />
          <img
            src={baseIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('base')}
          />
          <img
            src={grassIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('grass')}
          />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <PaintPot name="XV88" color={colors.xv88} setColor={setColor} />
            <PaintPot
              name="Blood Angels Red"
              color={colors.bloodangels}
              setColor={setColor}
            />
            <PaintPot
              name="Caliban Green"
              color={colors.caliban}
              setColor={setColor}
            />
            <PaintPot
              name="Jokaero Orange"
              color={colors.jokaero}
              setColor={setColor}
            />
            <PaintPot
              name="Wraithbone"
              color={colors.wraithbone}
              setColor={setColor}
            />
            <PaintPot name="The Fang" color={colors.fang} setColor={setColor} />
            <PaintPot
              name="Retributor Armour"
              color={colors.retributor}
              setColor={setColor}
            />
            <PaintPot
              name="Averland Sunset"
              color={colors.averland}
              setColor={setColor}
            />
            <PaintPot
              name="Leadbelcher"
              color={colors.leadbelcher}
              setColor={setColor}
            />
            <PaintPot
              name="Deathguard"
              color={colors.deathguard}
              setColor={setColor}
            />
            <PaintPot
              name="Warplock"
              color={colors.warplock}
              setColor={setColor}
            />
            <img
              src={paintImg}
              style={{ filter: colors.teal, width: 40 }}
              onClick={() => setColor(colors.teal)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.blue, width: 40 }}
              onClick={() => setColor(colors.blue)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.ultramarine, width: 40 }}
              onClick={() => setColor(colors.ultramarine)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.purple, width: 40 }}
              onClick={() => setColor(colors.purple)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.pink, width: 40 }}
              onClick={() => setColor(colors.pink)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.red, width: 40 }}
              onClick={() => setColor(colors.red)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.darkRed, width: 40 }}
              onClick={() => setColor(colors.darkRed)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.orange, width: 40 }}
              onClick={() => setColor(colors.orange)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.yellow, width: 40 }}
              onClick={() => setColor(colors.yellow)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.scorpion, width: 40 }}
              onClick={() => setColor(colors.scorpion)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.green, width: 40 }}
              onClick={() => setColor(colors.green)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.silver, width: 40 }}
              onClick={() => setColor(colors.silver)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.white, width: 40 }}
              onClick={() => setColor(colors.white)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.corvus, width: 40 }}
              onClick={() => setColor(colors.corvus)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.black, width: 40 }}
              onClick={() => setColor(colors.black)}
            />
          </div>
          <Marine scheme={scheme} modelSize={modelSize} />

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
              src={orcImg}
              style={{
                maxWidth: modelSize,
                filter: scheme.primary,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />{' '}
            <img
              src={orcTrim}
              style={{
                maxWidth: modelSize,
                filter: scheme.trim,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
            <img
              src={orcPenant}
              style={{
                maxWidth: modelSize,
                filter: scheme.penant,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
