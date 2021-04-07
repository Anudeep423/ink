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

const Calendar: FC<Props> = ({
  style = {},
  fill = colorCodes.BLACK_2,
  width = 18,
  height = 19,
  className = "",
  onClick,
  viewBox = "0 0 18 19"
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
    <path d="M11.4998 6V17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.49976 6V17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.9998 9.5L1.99976 9.5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.9998 13.5L1.99976 13.5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.08252 5.5815H16.926" stroke="#9B44B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.7673 1.40375H5.24086C2.63046 1.40375 1 2.85791 1 5.53088V13.575C1 16.29 2.63046 17.7778 5.24086 17.7778H12.7591C15.3777 17.7778 17 16.3152 17 13.6423V5.53088C17.0082 2.85791 15.386 1.40375 12.7673 1.40375Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Calendar