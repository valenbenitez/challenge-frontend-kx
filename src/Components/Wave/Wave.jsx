import * as React from "react"
import './wave.css'

const SvgComponent = (props) => (
  <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#f50"
      d="m0 160 48 5.3c48 5.7 144 15.7 240 37.4 96 21.3 192 53.3 288 26.6C672 203 768 117 864 90.7c96-26.7 192 5.3 288 16 96 10.3 192 .3 240-5.4l48-5.3v224H0Z"
    />
  </svg>
)

export default SvgComponent
