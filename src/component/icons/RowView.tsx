import { FC } from 'react'
import colorCodes from '../../common/colors'

const { BLACK, WHITE_1, PURPLE_1 } = colorCodes

type Props = {
  style?: any,
  width?: number,
  height?: number,
  borderFill?: string,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const RowView: FC<Props> = ({
  style = {},
  width = 32,
  borderFill = PURPLE_1,
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
    <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill={WHITE_1} stroke={borderFill} />
    <path d="M8 8H14" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.0005 8H24.0005" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12H10C8.89543 12 8 12.8954 8 14V22C8 23.1046 8.89543 24 10 24H12C13.1046 24 14 23.1046 14 22V14C14 12.8954 13.1046 12 12 12Z" stroke={PURPLE_1} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.0005 12H20.0005C18.8959 12 18.0005 12.8954 18.0005 14V16C18.0005 17.1046 18.8959 18 20.0005 18H22.0005C23.1051 18 24.0005 17.1046 24.0005 16V14C24.0005 12.8954 23.1051 12 22.0005 12Z" stroke={PURPLE_1} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default RowView
