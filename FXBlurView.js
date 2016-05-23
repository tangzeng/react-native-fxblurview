import { requireNativeComponent } from 'react-native';

'use strict'
import React, {
  Component,
} from 'react-native'

class FXBlurView extends Component {
  render() {
    return (
      <FXBlurViewNative
        {...this.props}
        style={[
          this.props.style,
          {
            flex: 1,
            backgroundColor: 'transparent',
          },
        ]} />
    );
  }
}

FXBlurView.propTypes = {
  blurRadius: React.PropTypes.number.isRequired,
  blurEnabled: React.PropTypes.bool.isRequired,
};

const FXBlurViewNative = requireNativeComponent('RCTFXBlurView', FXBlurView);

module.exports = FXBlurView;