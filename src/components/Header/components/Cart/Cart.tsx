import React from 'react';
import type { SVGProps } from 'react';

const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30" {...props}>
    <path
      stroke="#151411"
      d="M9.375 9.588V8.375c0-2.812 2.262-5.575 5.075-5.837 3.35-.325 6.175 2.312 6.175 5.6v1.725M11.25 27.5h7.5c5.025 0 5.925-2.012 6.188-4.462l.937-7.5C26.212 12.488 25.337 10 20 10H10c-5.337 0-6.212 2.488-5.875 5.538l.938 7.5c.262 2.45 1.162 4.462 6.187 4.462ZM19.37 15h.01M10.618 15h.011"
    />
  </svg>
);
export default SvgCart;
