import React from 'react';
import chaos from '../../assets/agressor.png';
import chaosSecondary from '../../assets/agressor-trim.png';
import ropeImg from '../../assets/agressor-rope.png';
import aquilaImg from '../../assets/agressor-aquila.png';
import penantImg from '../../assets/agressor-penant.png';
import jewelImg from '../../assets/agressor-jewel.png';
import skullImg from '../../assets/agressor-skulls.png';
import gunbeltsImg from '../../assets/agressor-gunbelts.png';
import helmetImg from '../../assets/agressor-helmet.png';
import quart2Img from '../../assets/quart2.png';
import quart3Img from '../../assets/quart3.png';
import eyesImg from '../../assets/agressor-eyes.png';
import missilesImg from '../../assets/agressor-missiles.png';
import grassImg from '../../assets/agressor-grass.png';
import baseImg from '../../assets/agressor-base.png';
import fistImg from '../../assets/fist.png';
import paintImg from '../../assets/paint.png';
import muzzleImg from '../../assets/muzzle.png';
import bronzeImg from '../../assets/bronze.png';
import kneeImg from '../../assets/knee.png';
import aquilaIcon from '../../assets/aquilaicon.jpg';
import ropeIcon from '../../assets/ropeicon.jpg';
import pendantIcon from '../../assets/pendanticon.jpg';
import skullsIcon from '../../assets/skullsicon.jpg';
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

export function Chaos() {
  const [primary, setPrimary] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [quart2, setQuart2] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [quart3, setQuart3] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [trim, setTrim] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [rope, setRope] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [aquila, setAquila] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [penant, setPenant] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [jewel, setJewel] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [skull, setSkull] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [gunbelts, setGunbelts] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [fist, setFist] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [knee, setKnee] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [helmet, setHelmet] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [eyes, setEyes] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [missiles, setMissiles] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [base, setBase] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [bronze, setBronze] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [grass, setGrass] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [muzzle, setMuzzle] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [part, setPart] = React.useState(0);

  function setColor(color) {
    switch (part) {
      case 1:
        setTrim(color);
        break;
      case 2:
        setAquila(color);
        break;
      case 3:
        setRope(color);
        break;
      case 4:
        setPenant(color);
        break;
      case 5:
        setJewel(color);
        break;
      case 6:
        setSkull(color);
        break;
      case 7:
        setGunbelts(color);
        break;
      case 8:
        setHelmet(color);
        break;
      case 9:
        setEyes(color);
        break;
      case 10:
        setMissiles(color);
        break;
      case 11:
        setBase(color);
        break;
      case 12:
        setGrass(color);
        break;
      case 13:
        setBronze(color);
        break;
      case 14:
        setMuzzle(color);
        break;
      case 15:
        setFist(color);
        break;
      case 16:
        setKnee(color);
        break;
      case 17:
        setQuart2(color);
        break;
      case 18:
        setQuart3(color);
        break;
      default:
        setPrimary(color);
        break;
    }
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
            onClick={() => setPart(0)}
          />
          <img
            src={quart2Icon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(17)}
          />
          <img
            src={quart3Icon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(18)}
          />
          <img
            src={trimIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(1)}
          />
          <img
            src={fistIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(15)}
          />
          <img
            src={kneeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(16)}
          />
          <img
            src={aquilaIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(2)}
          />
          <img
            src={ropeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(3)}
          />
          <img
            src={pendantIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(4)}
          />
          <img
            src={jewelIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(5)}
          />
          <img
            src={skullsIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(6)}
          />
          <img
            src={gunbeltIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(7)}
          />
          <img
            src={muzzleIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(14)}
          />
          <img
            src={bronzeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(13)}
          />
          <img
            src={helmetIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(8)}
          />
          <img
            src={eyesIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(9)}
          />
          <img
            src={missilesIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(10)}
          />
          <img
            src={baseIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(11)}
          />
          <img
            src={grassIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart(12)}
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

          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={chaos}
              style={{ maxWidth: 300, filter: primary, position: 'absolute' }}
            />

            <img
              src={quart2Img}
              style={{ maxWidth: 300, filter: quart2, position: 'absolute' }}
            />

            <img
              src={quart3Img}
              style={{ maxWidth: 300, filter: quart3, position: 'absolute' }}
            />
            <img
              src={chaosSecondary}
              style={{ maxWidth: 300, filter: trim, position: 'absolute' }}
            />
            <img
              src={aquilaImg}
              style={{ maxWidth: 300, filter: aquila, position: 'absolute' }}
            />
            <img
              src={kneeImg}
              style={{ maxWidth: 300, filter: knee, position: 'absolute' }}
            />
            <img
              src={ropeImg}
              style={{ maxWidth: 300, filter: rope, position: 'absolute' }}
            />
            <img
              src={penantImg}
              style={{ maxWidth: 300, filter: penant, position: 'absolute' }}
            />
            <img
              src={jewelImg}
              style={{ maxWidth: 300, filter: jewel, position: 'absolute' }}
            />
            <img
              src={helmetImg}
              style={{ maxWidth: 300, filter: helmet, position: 'absolute' }}
            />
            <img
              src={eyesImg}
              style={{ maxWidth: 300, filter: eyes, position: 'absolute' }}
            />
            <img
              src={skullImg}
              style={{ maxWidth: 300, filter: skull, position: 'absolute' }}
            />
            <img
              src={missilesImg}
              style={{ maxWidth: 300, filter: missiles, position: 'absolute' }}
            />
            <img
              src={gunbeltsImg}
              style={{ maxWidth: 300, filter: gunbelts, position: 'absolute' }}
            />
            <img
              src={bronzeImg}
              style={{ maxWidth: 300, filter: bronze, position: 'absolute' }}
            />
            <img
              src={muzzleImg}
              style={{ maxWidth: 300, filter: muzzle, position: 'absolute' }}
            />
            <img
              src={fistImg}
              style={{ maxWidth: 300, filter: fist, position: 'absolute' }}
            />
            <img
              src={baseImg}
              style={{ maxWidth: 300, filter: base, position: 'absolute' }}
            />
            <img
              src={grassImg}
              style={{ maxWidth: 300, filter: grass, position: 'absolute' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
