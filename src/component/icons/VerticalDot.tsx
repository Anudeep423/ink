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

const VerticalDot: FC<Props> = ({
  fill = colorCodes.BLACK_2,
  style = {},
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
    onClick={() => !!onClick && onClick()}
  >
    <circle cx="12" cy="5" r="2" fill={fill} />
    <circle cx="12" cy="12" r="2" fill={fill} />
    <circle cx="12" cy="19" r="2" fill={fill} />
  </svg>
)

export default VerticalDot