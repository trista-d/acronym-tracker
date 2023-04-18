import Typography from 'typography';
import '@bcgov/bc-sans/css/BCSans.css';

const BCTypography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  headerFontFamily: ['BCSans', 'Noto Sans', 'Verdana', 'Arial', 'sans-serif'],
  bodyFontFamily: ['BCSans', 'Noto Sans', 'Verdana', 'Arial', 'sans-serif'],
  scaleRatio: 2.074,
});

export default BCTypography;