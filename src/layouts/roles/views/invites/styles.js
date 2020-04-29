import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: { margin: 10, maxWidth: 712 },
  profileBG: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    padding: '10px !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: '50%',
    border: '10px solid #fff',
    width: 140,
    height: 140,
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    marginRight: 20,
  },
  summaryWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconWrapper: {
    marginTop: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
    background: 'rgba(255,255,255,0.8)',
  },
}));
