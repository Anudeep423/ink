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

const Resizer: FC<Props> = ({
  style = {},
  fill = colorCodes.GREY_6,
  width = 14,
  height = 14,
  className = "",
  onClick,
  viewBox = "0 0 14 14"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M8.99927 1H12.9994V4.99973" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.00015 13.0005H1V9.00073" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.9996 1L8.33276 5.66635" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 13.0006L5.66684 8.33423" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Resizer
