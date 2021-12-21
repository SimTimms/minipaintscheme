import React from 'react';
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
import scionPrimaryIcon from '../../assets/scion/scion-primary-icon.png';
import scionClothIcon from '../../assets/scion/scion-cloth-icon.png';
import scionEyesIcon from '../../assets/scion/scion-eyes-icon.png';
import scionHelmetIcon from '../../assets/scion/scion-helmet-icon.png';
import scionStrapIcon from '../../assets/scion/scion-strap-icon.png';
import scionTrimIcon from '../../assets/scion/scion-trim-icon.png';
import scionBootsIcon from '../../assets/scion/scion-boots-icon.png';
import scionWeaponIcon from '../../assets/scion/scion-weapon-icon.png';
import scionBronzeIcon from '../../assets/scion/scion-bronze-icon.png';
import scionRollIcon from '../../assets/scion/scion-roll-icon.png';
import scionKneeIcon from '../../assets/scion/scion-knee-icon.png';
import { MenuPart } from './menuPart';

export function Menu({ setPart, model, scheme, part, setModel }) {
  return (
    <div
      style={{
        height: '100%',
        background: '#222',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      {model === 'marine' ? (
        <div
          style={{
            height: '100%',
            background: '#222',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('primary')}
          >
            <img
              src={primayIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.primary}
              paint={scheme.primaryName}
              part={part}
              partName="primary"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('quart2')}
          >
            <img src={quart2Icon} style={{ width: 80, margin: 2 }} />
            <MenuPart
              scheme={scheme.quart2}
              paint={scheme.quart2Name}
              part={part}
              partName="quart2"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('quart3')}
          >
            <img
              src={quart3Icon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.quart3}
              paint={scheme.quart3Name}
              part={part}
              partName="quart3"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('left')}
          >
            <img
              src={leftIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.left}
              paint={scheme.leftName}
              part={part}
              partName="left"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('trim')}
          >
            <img
              src={trimIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.trim}
              paint={scheme.trimName}
              part={part}
              partName="trim"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('fist')}
          >
            <img
              src={fistIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.fist}
              paint={scheme.fistName}
              part={part}
              partName="fist"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('knee')}
          >
            <img
              src={kneeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.knee}
              paint={scheme.kneeName}
              part={part}
              partName="knee"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('aquila')}
          >
            <img
              src={aquilaIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.aquila}
              paint={scheme.aquilaName}
              part={part}
              partName="aquila"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('rope')}
          >
            <img
              src={ropeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.rope}
              paint={scheme.ropeName}
              part={part}
              partName="rope"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('penant')}
          >
            <img
              src={pendantIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.penant}
              paint={scheme.penantName}
              part={part}
              partName="penant"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('jewel')}
          >
            <img
              src={jewelIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.jewel}
              paint={scheme.jewelName}
              part={part}
              partName="jewel"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('skull')}
          >
            <img
              src={skullsIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.skull}
              paint={scheme.skullName}
              part={part}
              partName="skull"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('gunbelts')}
          >
            <img
              src={gunbeltIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.gunbelts}
              paint={scheme.gunbeltsName}
              part={part}
              partName="gunbelts"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('muzzle')}
          >
            <img
              src={muzzleIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.muzzle}
              paint={scheme.muzzleName}
              part={part}
              partName="muzzle"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('bronze')}
          >
            <img
              src={bronzeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.bronze}
              paint={scheme.bronzeName}
              part={part}
              partName="bronze"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('helmet')}
          >
            <img
              src={helmetIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.helmet}
              paint={scheme.helmetName}
              part={part}
              partName="helmet"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('eyes')}
          >
            <img
              src={eyesIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.eyes}
              paint={scheme.eyesName}
              part={part}
              partName="eyes"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('missiles')}
          >
            <img
              src={missilesIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.missiles}
              paint={scheme.missilesName}
              part={part}
              partName="missiles"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('base')}
          >
            <img
              src={baseIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.base}
              paint={scheme.baseName}
              part={part}
              partName="base"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('grass')}
          >
            <img
              src={grassIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
            />
            <MenuPart
              scheme={scheme.grass}
              paint={scheme.grassName}
              part={part}
              partName="grass"
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            height: '100%',
            background: '#222',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('primary')}
          >
            <img
              src={scionPrimaryIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('primary')}
            />
            <MenuPart
              scheme={scheme.primary}
              paint={scheme.primaryName}
              part={part}
              partName="primary"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('quart2')}
          >
            <img
              src={scionClothIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('quart2')}
            />
            <MenuPart
              scheme={scheme.quart2}
              paint={scheme.quart2Name}
              part={part}
              partName="quart2"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('trim')}
          >
            <img
              src={scionTrimIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('trim')}
            />
            <MenuPart
              scheme={scheme.trim}
              paint={scheme.trimName}
              part={part}
              partName="trim"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('fist')}
          >
            <img
              src={scionBootsIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('fist')}
            />
            <MenuPart
              scheme={scheme.fist}
              paint={scheme.fistName}
              part={part}
              partName="fist"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('rope')}
          >
            <img
              src={scionStrapIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('rope')}
            />
            <MenuPart
              scheme={scheme.rope}
              paint={scheme.ropeName}
              part={part}
              partName="rope"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('helmet')}
          >
            <img
              src={scionHelmetIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('helmet')}
            />
            <MenuPart
              scheme={scheme.helmet}
              paint={scheme.helmetName}
              part={part}
              partName="helmet"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('eyes')}
          >
            <img
              src={scionEyesIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('eyes')}
            />
            <MenuPart
              scheme={scheme.eyes}
              paint={scheme.eyesName}
              part={part}
              partName="eyes"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('muzzle')}
          >
            <img
              src={scionWeaponIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('muzzle')}
            />
            <MenuPart
              scheme={scheme.muzzle}
              paint={scheme.muzzleName}
              part={part}
              partName="muzzle"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('bronze')}
          >
            <img
              src={scionBronzeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('bronze')}
            />
            <MenuPart
              scheme={scheme.bronze}
              paint={scheme.bronzeName}
              part={part}
              partName="bronze"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('jewel')}
          >
            <img
              src={scionRollIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('jewel')}
            />
            <MenuPart
              scheme={scheme.jewel}
              paint={scheme.jewelName}
              part={part}
              partName="jewel"
            />
          </div>
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => setPart('knee')}
          >
            <img
              src={scionKneeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('knee')}
            />
            <MenuPart
              scheme={scheme.knee}
              paint={scheme.kneeName}
              part={part}
              partName="knee"
            />
          </div>
        </div>
      )}
    </div>
  );
}
