/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:41:26 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2018-08-26 22:41:26 
 */
class Header extends Component {
    static contextTypes = {
      themeColor: PropTypes.string
    }
  
    render () {
      return (
        <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
      )
    }
  }