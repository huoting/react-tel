import { connect} from 'react-redux'
import { actionsFun } from '../store/actions'
import Connect from './connect'
import reducers from '../store/reducers'

const mapStateToProps = (state, action) => {
    return {
        filter: reducers({}, {type: 'store'}),
        value: state
    }
}
const mapDispatchToProps = (dispatch, action) => {
    return {
        onClick: () => {
            dispatch(actionsFun(action.filter))
        }
    }
}
const FilterConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Connect)
export default connect()(FilterConnect)