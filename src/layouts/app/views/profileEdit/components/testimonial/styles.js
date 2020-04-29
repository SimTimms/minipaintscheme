import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    background: '#fff',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
    padding: 10,
    boxSizing: 'border-box',
  },
  inputWrapperMobile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  actionInputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
  },
  avatarWrapper: {
    background: '#ddd',
    position: 'relative',
    width: 100,
    minWidth: 100,
    maxWidth: 100,
    minHeight: 100,
    maxHeight: 100,
    height: 100,
    borderRadius: '50%',
    padding: 0,
    border: '5px solid #bbb',
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center center',
    backgroundSize: '100%',
  },
  avatarWrapperMobile: {
    marginRight: 0,
  },
});
