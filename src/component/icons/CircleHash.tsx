import { FC } from 'react'
import colorCodes from '../../common/colors'

const { WHITE_1, YELLOW_1 } = colorCodes

type Props = {
  style?: any,
  fill?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string,
}

const CircleHash: FC<Props> = ({
  style = {},
  fill = YELLOW_1,
  width = 40,
  height = 40,
  className = "",
  onClick,
  viewBox = "0 0 40 40"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <g filter="url(#filter0_d)">
      <circle cx="20" cy="18" r="10" fill={fill} />
    </g>
    <path d="M16.334 16.3572H24" stroke={WHITE_1} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.334 19.6426H24" stroke={WHITE_1} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.6195 13.6194L17.4292 22.3805" stroke={WHITE_1} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.9049 13.6194L20.7146 22.3805" stroke={WHITE_1} strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <filter id="filter0_d" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

export default CircleHash
