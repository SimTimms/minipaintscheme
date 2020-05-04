import React from 'react';
import Typography from '@material-ui/core/Typography';

export function MenuPart({ scheme, name }) {
  return (
    <div
      style={{
        background: '#222',
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
      }}
    >
      <div
        style={{
          background: '#309090',
          filter: scheme,
          width: 20,
          height: 20,
        }}
      ></div>
      <Typography
        variant="body1"
        style={{ color: '#fff', fontSize: 10, marginLeft: 10 }}
      >
        {name}
      </Typography>
    </div>
  );
}
