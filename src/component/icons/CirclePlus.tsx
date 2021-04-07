import { FC } from 'react'
import colorCodes from '../../common/colors'

type Props = {
  fill?: string,
  style?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const CirclePlus: FC<Props> = ({
  fill = colorCodes.BLACK_2,
  style = {},
  width = 12,
  height = 12,
  className = "",
  onClick,
  viewBox = "0 0 12 12"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" fill={"transparent"} />
    <path d="M6 3.99966V7.99966" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 6H8" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default CirclePlus