import type { SVGProps } from 'react';

const SvgLogoImg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 42 42" {...props}>
    <path fill="#fff" d="M42 0H0v42h42z" />
    <path fill="#AD7E5C" d="m32.904 20.601-.939 3.5H13.654L8.669 5.505h3.627l4.042 15.096z" />
    <path fill="#518581" d="m31.402 26.201-.938 3.5H9.607l-.938-3.5z" />
    <path fill="#A6D8D1" d="m29.9 31.801-.937 3.5H14.59l-.937-3.5z" />
  </svg>
);

export default SvgLogoImg;
