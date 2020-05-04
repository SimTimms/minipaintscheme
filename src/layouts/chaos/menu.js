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

export function Menu({ setPart, model, scheme }) {
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
          <div style={{ display: 'flex' }}>
            <img
              src={primayIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('primary')}
            />
            <MenuPart scheme={scheme.primary} name={scheme.primaryName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={quart2Icon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('quart2')}
            />
            <MenuPart scheme={scheme.quart2} name={scheme.quart2Name} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={quart3Icon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('quart3')}
            />
            <MenuPart scheme={scheme.quart3} name={scheme.quart3Name} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={leftIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('left')}
            />
            <MenuPart scheme={scheme.left} name={scheme.leftName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={trimIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('trim')}
            />
            <MenuPart scheme={scheme.trim} name={scheme.trimName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={fistIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('fist')}
            />
            <MenuPart scheme={scheme.fist} name={scheme.fistName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={kneeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('knee')}
            />
            <MenuPart scheme={scheme.knee} name={scheme.kneeName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={aquilaIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('aquila')}
            />
            <MenuPart scheme={scheme.aquila} name={scheme.aquilaName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={ropeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('rope')}
            />
            <MenuPart scheme={scheme.rope} name={scheme.ropeName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={pendantIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('penant')}
            />
            <MenuPart scheme={scheme.penant} name={scheme.penantName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={jewelIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('jewel')}
            />
            <MenuPart scheme={scheme.jewel} name={scheme.jewelName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={skullsIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('skull')}
            />
            <MenuPart scheme={scheme.skull} name={scheme.skullName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={gunbeltIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('gunbelts')}
            />
            <MenuPart scheme={scheme.gunbelts} name={scheme.gunbeltsName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={muzzleIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('muzzle')}
            />
            <MenuPart scheme={scheme.muzzle} name={scheme.muzzleName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={bronzeIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('bronze')}
            />
            <MenuPart scheme={scheme.bronze} name={scheme.bronzeName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={helmetIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('helmet')}
            />
            <MenuPart scheme={scheme.helmet} name={scheme.helmetName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={eyesIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('eyes')}
            />
            <MenuPart scheme={scheme.eyes} name={scheme.eyesName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={missilesIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('missiles')}
            />
            <MenuPart scheme={scheme.missiles} name={scheme.missilesName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={baseIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('base')}
            />
            <MenuPart scheme={scheme.base} name={scheme.baseName} />
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={grassIcon}
              style={{ width: 80, margin: 2, cursor: 'pointer' }}
              onClick={() => setPart('grass')}
            />
            <MenuPart scheme={scheme.grass} name={scheme.grassName} />
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
          <img
            src={scionPrimaryIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('primary')}
          />
          <img
            src={scionClothIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('quart2')}
          />
          <img
            src={scionTrimIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('trim')}
          />
          <img
            src={scionBootsIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('fist')}
          />
          <img
            src={scionStrapIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('rope')}
          />
          <img
            src={scionHelmetIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('helmet')}
          />
          <img
            src={scionEyesIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('eyes')}
          />
          <img
            src={scionWeaponIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('muzzle')}
          />
          <img
            src={scionBronzeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('bronze')}
          />
          <img
            src={scionRollIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('jewel')}
          />
          <img
            src={scionKneeIcon}
            style={{ width: 80, margin: 2, cursor: 'pointer' }}
            onClick={() => setPart('knee')}
          />
        </div>
      )}
    </div>
  );
}
