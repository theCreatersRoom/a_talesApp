import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckCircleSvg(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M30 0C13.44 0 0 13.44 0 30c0 16.56 13.44 30 30 30 16.56 0 30-13.44 30-30C60 13.44 46.56 0 30 0zm-6 45L9 30l4.23-4.23L24 36.51l22.77-22.77L51 18 24 45z"
        fill="#43C658"
      />
    </Svg>
  );
}

export default CheckCircleSvg;
