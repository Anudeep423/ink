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

const Share: FC<Props> = ({
  fill = colorCodes.BLACK,
  style = {},
  width = 16,
  height = 18,
  className = "",
  onClick,
  viewBox = "0 0 16 18"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M12.8644 5.57648C14.1746 5.57648 15.2366 4.5144 15.2366 3.20425C15.2366 1.89411 14.1746 0.832031 12.8644 0.832031C11.5543 0.832031 10.4922 1.89411 10.4922 3.20425C10.4922 4.5144 11.5543 5.57648 12.8644 5.57648Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.37613 11.1123C4.68627 11.1123 5.74835 10.0502 5.74835 8.7401C5.74835 7.42995 4.68627 6.36787 3.37613 6.36787C2.06599 6.36787 1.00391 7.42995 1.00391 8.7401C1.00391 10.0502 2.06599 11.1123 3.37613 11.1123Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.8644 16.6468C14.1746 16.6468 15.2366 15.5847 15.2366 14.2746C15.2366 12.9644 14.1746 11.9023 12.8644 11.9023C11.5543 11.9023 10.4922 12.9644 10.4922 14.2746C10.4922 15.5847 11.5543 16.6468 12.8644 16.6468Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.42188 9.93359L10.8226 13.0807" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.8147 4.39844L5.42188 7.54559" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Share