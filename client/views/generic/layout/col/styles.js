export default {
  Col: size => ({
    background: '#4DD',
    flexBasis: `${( size / 12 ) * 100}%`,
    maxWidth: `${( size / 12 ) * 100}%`,
    display: 'flex',
    flexDirection: 'column',
  }),
  padding: '0 12.5px 25px',
};
