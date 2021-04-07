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

const Stamp: FC<Props> = ({
  fill = colorCodes.WHITE_1,
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
    <path d="M7.06538 3.17194L6.92348 3.32161L6.92836 3.5278L6.92857 3.54543V6.40753C6.92857 6.43827 6.92672 6.46066 6.92456 6.47629C6.88546 6.48604 6.82067 6.49473 6.71446 6.49815C6.63198 6.50081 6.54999 6.50012 6.45404 6.49932C6.40267 6.4989 6.3473 6.49843 6.28571 6.49843H5.71429C5.6527 6.49843 5.59733 6.4989 5.54596 6.49932C5.45001 6.50012 5.36802 6.50081 5.28554 6.49815C5.17933 6.49473 5.11454 6.48604 5.07544 6.47629C5.07328 6.46066 5.07143 6.43827 5.07143 6.40753V3.54543L5.07164 3.5278L5.07652 3.32161L4.93462 3.17194C4.66706 2.88973 4.5 2.50108 4.5 2.06817C4.5 1.18616 5.18724 0.5 6 0.5C6.81276 0.5 7.5 1.18616 7.5 2.06817C7.5 2.50108 7.33294 2.88973 7.06538 3.17194Z" stroke={fill} />
    <rect x="3.5" y="6.5" width="5" height="2" rx="0.5" stroke={fill} />
    <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H11C11.2761 8.5 11.5 8.72386 11.5 9V11.5H0.5V9Z" stroke={fill} />
  </svg>
)

export default Stamp