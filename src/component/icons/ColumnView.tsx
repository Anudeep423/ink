import { FC } from 'react'
import colorCodes from '../../common/colors'

const { WHITE_1, GREY_4, PINK_3, BLACK } = colorCodes

type Props = {
  style?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string,
}

const Columns: FC<Props> = ({
  style = {},
  width = 32,
  height = 32,
  className = "",
  onClick,
  viewBox = "0 0 32 32"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill={WHITE_1} stroke={GREY_4} />
    <rect x="9" y="8" width="14" height="6" rx="2" stroke={BLACK} strokeWidth="2" />
    <rect x="9" y="18" width="14" height="6" rx="2" stroke={PINK_3} strokeWidth="2" />


  </svg>
)

export default Columns
