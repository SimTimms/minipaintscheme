import React, { useEffect } from 'react';

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

export function Menu({ setPart, model }) {
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
