import React, { useEffect } from 'react';

import { PaintPot } from './Paint';
import { Marine } from './marine';
import { Scion } from './scion';
import { ChaosMarine } from './chaos';
import { Intercessor } from './intercessor';
import chaosmarine from '../../assets/chaosmarine.png';
import marine from '../../assets/marine.png';
import scion from '../../assets/scion/scionicon.png';
import { Menu } from './menu';

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
  abaddon: 'hue-rotate(300deg) saturate(0%) brightness(20%) contrast(100%)',
  xv88: 'hue-rotate(226.8deg) saturate(100%) brightness(70.7%)',
  caliban: 'hue-rotate(316.8deg) saturate(100%) brightness(30.7%)',
  jokaero: 'hue-rotate(190deg) saturate(200%) brightness(100%)',
  wraithbone: 'hue-rotate(230deg) saturate(30%) brightness(160%)',
  morghast: 'hue-rotate(230deg) saturate(60%) brightness(120%)',
  fang: 'hue-rotate(35deg) saturate(60%) brightness(70%)',
  retributor:
    'hue-rotate(225deg) saturate(120%) brightness(120%) contrast(120%)',
  averland: 'hue-rotate(220deg) saturate(120%) brightness(150%)',
  leadbelcher: 'hue-rotate(0deg) saturate(0%) brightness(90%) contrast(180%)',
  greyknights: 'hue-rotate(40deg) saturate(10%) brightness(90%) contrast(200%)',
  deathguard: 'hue-rotate(290deg) saturate(30%) brightness(90%) ',
  deathworld: 'hue-rotate(280deg) saturate(50%) brightness(70%) ',
  castellan: 'hue-rotate(300deg) saturate(50%) brightness(50%) ',
  deathkorp: 'hue-rotate(300deg) saturate(10%) brightness(50%) ',
  warplock: 'hue-rotate(200deg) saturate(30%) brightness(90%) contrast(200%)',
  aethermatic:
    'hue-rotate(10deg) saturate(100%) brightness(90%) contrast(100%)',
  corax: 'hue-rotate(10deg) saturate(0%) brightness(190%) contrast(100%)',
  greyseer: 'hue-rotate(10deg) saturate(0%) brightness(100%) contrast(100%)',
  celestra: 'hue-rotate(10deg) saturate(30%) brightness(100%) contrast(100%)',
  bloodangels:
    'hue-rotate(180deg) saturate(200%) brightness(70%) contrast(140%)',
  khorne: 'hue-rotate(180deg) saturate(200%) brightness(44%) contrast(100%)',
  galvorbak: 'hue-rotate(160deg) saturate(200%) brightness(44%) contrast(100%)',
  baraknar: 'hue-rotate(160deg) saturate(200%) brightness(34%) contrast(100%)',
  screamer: 'hue-rotate(160deg) saturate(200%) brightness(54%) contrast(100%)',
  deamonette: 'hue-rotate(80deg) saturate(60%) brightness(64%) contrast(100%)',
  phoenician:
    'hue-rotate(110deg) saturate(100%) brightness(44%) contrast(100%)',
  naggaroth: 'hue-rotate(110deg) saturate(50%) brightness(44%) contrast(100%)',
  caledor: 'hue-rotate(44deg) saturate(80%) brightness(80%) contrast(100%)',
  macragge: 'hue-rotate(50deg) saturate(120%) brightness(50%) contrast(100%)',
  kantor: 'hue-rotate(55deg) saturate(130%) brightness(30%) ',
  nightlords: 'hue-rotate(50deg) saturate(120%) brightness(44%) ',
  thousandsons: 'hue-rotate(30deg) saturate(120%) brightness(50%) ',
  stegadon: 'hue-rotate(30deg) saturate(120%) brightness(36%) ',
  lupercal: 'hue-rotate(10deg) saturate(100%) brightness(36%) ',
  incubi: 'hue-rotate(0deg) saturate(100%) brightness(36%) ',
  mephiston: 'hue-rotate(180deg) saturate(200%) brightness(64%) contrast(100%)',
};

const initialColour =
  'hue-rotate(40deg) brightness(50%) saturate(0%) contrast(50%)';
export function Chaos() {
  const [model, setModel] = React.useState('marine');
  const [xmas, setXmas] = React.useState(false);
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
    }
  );

  const [part, setPart] = React.useState('primary');
  const modelSize = 300;
  const bgModelSize = 280;
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(scheme));
  }, [scheme]);

  function setColor(color, name) {
    const schemeCopy = { ...scheme };
    schemeCopy[`${part}`] = color;
    schemeCopy[`${part}Name`] = name;
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
        <Menu
          setPart={setPart}
          model={model}
          scheme={scheme}
          part={part}
          setModel={setModel}
        />
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
              background: '#222',
              paddingRight: 10,
              boxSizing: 'border-box',
            }}
          >
            <PaintPot name="XV88" color={colors.xv88} setColor={setColor} />
            <PaintPot
              name="Corax White"
              color={colors.corax}
              setColor={setColor}
            />
            <PaintPot
              name="Grey Seer"
              color={colors.greyseer}
              setColor={setColor}
            />
            <PaintPot
              name="Celestra Grey"
              color={colors.celestra}
              setColor={setColor}
            />
            <PaintPot
              name="Averland Sunset"
              color={colors.averland}
              setColor={setColor}
            />
            <PaintPot
              name="Jokaero Orange"
              color={colors.jokaero}
              setColor={setColor}
            />
            <PaintPot
              name="Khorne Red"
              color={colors.khorne}
              setColor={setColor}
            />
            <PaintPot
              name="Mephiston Red"
              color={colors.mephiston}
              setColor={setColor}
            />
            <PaintPot
              name="Gal Vorbak Red"
              color={colors.galvorbak}
              setColor={setColor}
            />
            <PaintPot
              name="Barak Nar Burgundy"
              color={colors.baraknar}
              setColor={setColor}
            />
            <PaintPot
              name="Screamer Pink"
              color={colors.screamer}
              setColor={setColor}
            />
            <PaintPot
              name="Daemonette Hide"
              color={colors.deamonette}
              setColor={setColor}
            />
            <PaintPot
              name="Phoenician Purple"
              color={colors.phoenician}
              setColor={setColor}
            />
            <PaintPot
              name="Naggaroth Night"
              color={colors.naggaroth}
              setColor={setColor}
            />
            <PaintPot
              name="Caledor Sky"
              color={colors.caledor}
              setColor={setColor}
            />
            <PaintPot
              name="Macragge Blue"
              color={colors.macragge}
              setColor={setColor}
            />
            <PaintPot
              name="Kantor Blue"
              color={colors.kantor}
              setColor={setColor}
            />
            <PaintPot
              name="Night Lords Blue"
              color={colors.nightlords}
              setColor={setColor}
            />
            <PaintPot
              name="Thousand Sons Blue"
              color={colors.thousandsons}
              setColor={setColor}
            />
            <PaintPot
              name="Stegadon Scale Green"
              color={colors.stegadon}
              setColor={setColor}
            />
            <PaintPot
              name="Lupercal Green"
              color={colors.lupercal}
              setColor={setColor}
            />
            <PaintPot
              name="Incubi Darkness"
              color={colors.incubi}
              setColor={setColor}
            />
            <PaintPot
              name="Deathguard"
              color={colors.deathguard}
              setColor={setColor}
            />
            <PaintPot
              name="Deathworld Forest"
              color={colors.deathworld}
              setColor={setColor}
            />
            <PaintPot
              name="Castellan Green"
              color={colors.castellan}
              setColor={setColor}
            />
            <PaintPot
              name="Death Korps Drab"
              color={colors.deathkorp}
              setColor={setColor}
            />
            <PaintPot
              name="Corvus Black"
              color={colors.corvus}
              setColor={setColor}
            />
            <PaintPot
              name="Abaddon Black"
              color={colors.abaddon}
              setColor={setColor}
            />
            <PaintPot
              name="Aethermatic Blue"
              color={colors.aethermatic}
              setColor={setColor}
            />
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
              name="Wraithbone"
              color={colors.wraithbone}
              setColor={setColor}
            />{' '}
            <PaintPot
              name="Morghast"
              color={colors.morghast}
              setColor={setColor}
            />
            <PaintPot name="The Fang" color={colors.fang} setColor={setColor} />
            <PaintPot
              name="Retributor Armour"
              color={colors.retributor}
              setColor={setColor}
            />
            <PaintPot
              name="Leadbelcher"
              color={colors.leadbelcher}
              setColor={setColor}
            />
            <PaintPot
              name="Grey Knights Steel"
              color={colors.greyknights}
              setColor={setColor}
            />
            <PaintPot
              name="Warplock"
              color={colors.warplock}
              setColor={setColor}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {' '}
            <button
              style={{
                background: '#222',
                border: 'none',
                color: '#ddd',
                padding: 3,
                margin: 3,
                cursor: 'pointer',
                width: 80,
                borderRadius: 4,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
              }}
              onClick={() => setModel('chaos')}
            >
              Chaos
            </button>
            <button
              style={{
                background: '#222',
                border: 'none',
                color: '#ddd',
                padding: 3,
                margin: 3,
                cursor: 'pointer',
                width: 80,
                borderRadius: 4,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
              }}
              onClick={() => setModel('marine')}
            >
              Aggressor
            </button>
            <button
              style={{
                background: '#222',
                border: 'none',
                color: '#ddd',
                padding: 3,
                margin: 3,
                cursor: 'pointer',
                width: 80,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
                borderRadius: 4,
              }}
              onClick={() => setModel('scion')}
            >
              Scion
            </button>
            <button
              style={{
                background: '#222',
                border: 'none',
                color: '#ddd',
                padding: 3,
                margin: 3,
                cursor: 'pointer',
                width: 80,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
                borderRadius: 4,
              }}
              onClick={() => setXmas(xmas ? false : true)}
            >
              Xmas Hat
            </button>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              marginTop: 300,
            }}
          >
            {/*    <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Intercessor scheme={scheme} modelSize={bgModelSize} />
            </div>*/}
            <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {model === 'chaos' ? (
                <ChaosMarine scheme={scheme} modelSize={modelSize} />
              ) : model === 'scion' ? (
                <Scion scheme={scheme} modelSize={modelSize} />
              ) : (
                <Marine scheme={scheme} modelSize={modelSize} xmas={xmas} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
