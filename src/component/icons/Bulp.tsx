import { FC } from 'react'
import colorCodes from '../../common/colors'

type Props = {
  style?: any,
  fill?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const Bulp: FC<Props> = ({
  style = {},
  fill = colorCodes.PINK_3,
  width = 24,
  height = 24,
  className = "",
  onClick,
  viewBox = "0 0 24 24"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    fill="transparent"
    onClick={() => !!onClick && onClick()}
  >
    <path d="M11.7998 4.23529V2" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.71777 5.89307L3.71013 4.23497" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.1104 5.89307L20.118 4.23497" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 10.9414H22" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 10.9414H1.5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.1104 15.4116L20.118 17.0697" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.71777 15.4116L3.71013 17.0697" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.87988 19.08C9.87988 20.1404 10.7395 21 11.7999 21V21C12.8603 21 13.7199 20.1404 13.7199 19.08V17.8706H9.87988V19.08Z" stroke={colorCodes.BLACK_2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.72 17.7307C13.72 16.1037 14.8681 14.7283 15.8088 13.401C16.3089 12.6954 16.6 11.85 16.6 10.9413C16.6 8.47225 14.451 6.4707 11.8 6.4707C9.14903 6.4707 7 8.47225 7 10.9413C7 11.85 7.29109 12.6954 7.79117 13.401C8.73193 14.7283 9.88 16.1037 9.88 17.7307V18.0942H13.72V17.7307Z" stroke={colorCodes.BLACK_2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Bulp