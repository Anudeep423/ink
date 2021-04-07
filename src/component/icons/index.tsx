import Quote from './Quote'
import Hash from './Hash'
import Nodes from './Nodes'
import ColumnView from './ColumnView'
import RowView from './RowView'
import Resizer from './Resizer'
import RandomElipse from './RandomElipse'
import CircleHash from './CircleHash'
import CircleCross from './CircleCross'
import CircleCheck from './CircleCheck'
import Circle from './Circle'
import Stack from './Stack'
import Calendar from './Calendar'
import Like from './Like'
import Share from './Share'
import Copy from './Copy'
import Stamp from './Stamp'
import CirclePlus from './CirclePlus'
import Bulp from './Bulp'
import VerticalDot from './VerticalDot'
import Setting from './Setting'

const Icon = (props: any) => {
    switch (props.name) {
        case 'quote':
            return <Quote {...props} />
        case 'hash':
            return <Hash {...props} />
        case 'circle-hash':
            return <CircleHash {...props} />
        case 'nodes':
            return <Nodes {...props} />
        case 'column-view':
            return <ColumnView {...props} />
        case 'row-view':
            return <RowView {...props} />
        case 'resizer':
            return <Resizer {...props} />
        case 'random-elipse':
            return <RandomElipse {...props} />
        case 'circle-cross':
            return <CircleCross {...props} />
        case 'circle-check':
            return <CircleCheck {...props} />
        case 'circle-plus':
            return <CirclePlus {...props} />
        case 'circle':
            return <Circle {...props} />
        case 'stack':
            return <Stack {...props} />
        case 'calendar':
            return <Calendar {...props} />
        case 'like':
            return <Like {...props} />
        case 'share':
            return <Share {...props} />
        case 'copy':
            return <Copy {...props} />
        case 'stamp':
            return <Stamp {...props} />
        case 'bulp':
            return <Bulp {...props} />
        case 'vertical-dot':
            return <VerticalDot {...props} />
        case 'setting':
            return <Setting {...props} />
        default:
            return null
    }
}
export default Icon