import React from 'react';
import paintImg from '../../assets/paint.png';
import paintLid from '../../assets/paintlid.png';
import Typography from '@material-ui/core/Typography';

export function PaintPot({ name, color, setColor }) {
  return (
    <div
      style={{ position: 'relative', height: 70, width: 40, marginRight: -10 }}
    >
      <img
        src={paintImg}
        style={{
          filter: color,
          width: 40,
          zIndex: 0,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        onClick={() => setColor(color)}
      />
      <img
        src={paintLid}
        style={{ width: 40, zIndex: 0, position: 'absolute', left: 0, top: 0 }}
        onClick={() => setColor(color)}
      />
      {/*
      <Typography
        variant="body1"
        component="p"
        style={{
          marginTop: 10,
          fontSize: 6,
          width: 40,
          textAlign: 'center',
          height: 10,

          zIndex: 1,
          position: 'relative',
        }}
      >
        {name}
      </Typography>*/}
    </div>
  );
}
