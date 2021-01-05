import React, { PureComponent } from 'react';
import { StoreContext } from './context';
/**
 * 封装redux公共函数
 * @param {function} mapStateToProps 
 * @param {function} mapDispatchToProps 
 */
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
    return class extends PureComponent {
      static contextType = StoreContext;
      constructor(props, context) {
        super(props);
        this.state = {
          storeState: mapStateToProps(context.getState())
        };
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return <WrappedComponent {...this.props} 
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispatchToProps(this.context.dispatch)} />
      }
    }
  }
}
