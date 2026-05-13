import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import miradorTemplatePlugin from '../../src/plugins/MiradorTemplatePlugin';

describe('miradorTemplatePlugin', () => {
  it('exports a v4-shaped plugin object', () => {
    expect(miradorTemplatePlugin).toMatchObject({
      target: 'Window',
      mode: 'add',
    });
    expect(miradorTemplatePlugin.component).toBeTypeOf('function');
    expect(miradorTemplatePlugin.mapStateToProps).toBeTypeOf('function');
  });

  it('mounts the component inside a minimal Provider', () => {
    const store = createStore(() => ({ windows: {}, manifests: {} }));
    const Component = miradorTemplatePlugin.component;
    const { container } = render(
      <Provider store={store}>
        <Component windowId="w1" />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });
});
