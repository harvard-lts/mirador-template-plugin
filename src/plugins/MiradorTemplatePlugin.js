import { useEffect } from 'react';
import { getManifestoInstance } from 'mirador';

const mapStateToProps = (state, { windowId }) => ({
  manifestId: (getManifestoInstance(state, { windowId }) || {}).id,
  manifest: getManifestoInstance(state, { windowId }),
});

function MiradorTemplate() {
  useEffect(() => {
    // Add custom stuff here
  }, []);

  return null;
}

export default {
  name: 'MiradorTemplatePlugin',
  target: 'Window',
  mode: 'add',
  component: MiradorTemplate,
  mapStateToProps,
};
