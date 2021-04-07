import { FC } from 'react'
import colorCodes from '../../common/colors'

type Props = {
  style?: any,
  fill?: any,
  innerFill?: any,
  outerFill?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const CircleCross: FC<Props> = ({
  style = {},
  fill = "transparent",
  innerFill = colorCodes.PINK_3,
  outerFill = colorCodes.BLACK_2,
  width = 24,
  height = 24,
  className = "",
  onClick,
  viewBox = "0 0 24 24"
}) => (
  <svg
    fill={fill}
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M19.1144 15.6587C18.6339 16.5929 17.9741 17.4234 17.1727 18.1027C16.3713 18.782 15.4439 19.2968 14.4435 19.6177C13.4432 19.9386 12.3894 20.0593 11.3424 19.9729C10.2954 19.8866 9.2756 19.5948 8.34133 19.1144C7.40706 18.6339 6.57657 17.9741 5.89728 17.1727C5.21799 16.3713 4.70321 15.4439 4.38232 14.4435C4.06143 13.4432 3.94071 12.3894 4.02708 11.3424C4.11344 10.2954 4.40518 9.2756 4.88564 8.34133C5.3661 7.40706 6.02588 6.57657 6.8273 5.89728C7.62872 5.21799 8.55609 4.70321 9.55646 4.38232C10.5568 4.06143 11.6106 3.94071 12.6576 4.02708C13.7046 4.11344 14.7244 4.40518 15.6587 4.88564C16.5929 5.3661 17.4234 6.02588 18.1027 6.8273C18.782 7.62872 19.2968 8.55609 19.6177 9.55646C19.9386 10.5568 20.0593 11.6106 19.9729 12.6576C19.8866 13.7046 19.5948 14.7244 19.1144 15.6587L19.1144 15.6587Z" stroke={innerFill} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.1214 9.87877L9.8788 14.1214" stroke={outerFill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.1214 14.1212L9.8788 9.87852" stroke={outerFill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default CircleCross