import React from 'react';
import paintImg from '../../assets/paint.png';
import Typography from '@material-ui/core/Typography';

export function PaintPot({ name, color, setColor }) {
  return (
    <div>
      <img
        src={paintImg}
        style={{ filter: color, width: 40 }}
        onClick={() => setColor(color)}
      />
      <Typography
        variant="body1"
        component="p"
        style={{
          marginTop: -5,
          fontSize: 8,
          width: 40,
          textAlign: 'center',
          height: 50,
        }}
      >
        {name}
      </Typography>
    </div>
  );
}
