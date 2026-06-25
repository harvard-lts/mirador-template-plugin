import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { render } from '@testing-library/react';

// Mock the `mirador` package so we can control the selector return value and
// avoid loading the full Mirador bundle (which triggers jsdom canvas errors).
const getManifestoInstance = vi.fn();
vi.mock('mirador', () => ({
  getManifestoInstance: (...args) => getManifestoInstance(...args),
}));

// Imported after vi.mock so the mocked `mirador` is used.
const { default: miradorTemplatePlugin } = await import('../src/plugins/MiradorTemplatePlugin.js');

const { component: MiradorTemplate, mapStateToProps } = miradorTemplatePlugin;

describe('MiradorTemplatePlugin descriptor', () => {
  it('exposes the Mirador plugin interface', () => {
    expect(miradorTemplatePlugin.name).toBe('MiradorTemplatePlugin');
    expect(miradorTemplatePlugin.target).toBe('Window');
    expect(miradorTemplatePlugin.mode).toBe('add');
    expect(typeof miradorTemplatePlugin.component).toBe('function');
    expect(typeof miradorTemplatePlugin.mapStateToProps).toBe('function');
  });
});

describe('mapStateToProps', () => {
  beforeEach(() => {
    getManifestoInstance.mockReset();
  });

  it('passes state and windowId through to getManifestoInstance', () => {
    getManifestoInstance.mockReturnValue({ id: 'manifest-1' });
    const state = { some: 'state' };

    mapStateToProps(state, { windowId: 'window-1' });

    expect(getManifestoInstance).toHaveBeenCalledWith(state, { windowId: 'window-1' });
  });

  it('maps the manifest id and instance when a manifest is present', () => {
    const instance = { id: 'manifest-1' };
    getManifestoInstance.mockReturnValue(instance);

    const props = mapStateToProps({}, { windowId: 'window-1' });

    expect(props.manifestId).toBe('manifest-1');
    expect(props.manifest).toBe(instance);
  });

  it('falls back to an undefined manifestId when no manifest is loaded', () => {
    getManifestoInstance.mockReturnValue(null);

    const props = mapStateToProps({}, { windowId: 'window-1' });

    expect(props.manifestId).toBeUndefined();
    expect(props.manifest).toBeNull();
  });
});

describe('MiradorTemplate component', () => {
  it('renders nothing into the DOM', () => {
    const { container } = render(<MiradorTemplate />);
    expect(container.firstChild).toBeNull();
  });

  it('mounts without throwing', () => {
    expect(() => render(<MiradorTemplate />)).not.toThrow();
  });
});
