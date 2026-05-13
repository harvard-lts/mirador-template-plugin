import React, { Component } from 'react';
import { getManifestoInstance } from 'mirador';

const mapStateToProps = (state, { windowId }) => ({
  manifestId: (getManifestoInstance(state, { windowId }) || {}).id,
  manifest: getManifestoInstance(state, { windowId }),
});

// v4 plugin shape: { target, mode, component, mapStateToProps?, mapDispatchToProps? }
// Below is the class-component style. For a functional + hooks variant, see the
// commented example at the bottom of this file.
class miradorTemplate extends Component {
  render() {
    return (
      <></>
    );
  }

  componentDidMount() {
    // Add custom stuff here
  }
}

export default {
  target: 'Window',
  mode: 'add',
  component: miradorTemplate,
  mapStateToProps,
};

/*
// Functional + hooks variant — equivalent v4 plugin export.
//
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { getManifestoInstance } from 'mirador';
//
// function MiradorTemplate({ windowId }) {
//   const manifest = useSelector((state) => getManifestoInstance(state, { windowId }));
//   const manifestId = manifest?.id;
//
//   useEffect(() => {
//     // Add custom stuff here
//   }, [manifestId]);
//
//   return <></>;
// }
//
// export default {
//   target: 'Window',
//   mode: 'add',
//   component: MiradorTemplate,
// };
*/
