import { describe, it, expect, vi } from 'vitest';

// Mock `mirador` so importing the plugin doesn't load the full Mirador bundle
// (which triggers a jsdom canvas error during the test run).
vi.mock('mirador', () => ({
  getManifestoInstance: vi.fn(),
}));

import plugins, { miradorTemplatePlugin } from '../src/index.js';

describe('mirador-template-plugin smoke test', () => {
  it('exports the template plugin', () => {
    expect(miradorTemplatePlugin).toBeDefined();
  });

  it('exports an array of plugins as the default export', () => {
    expect(Array.isArray(plugins)).toBe(true);
    expect(plugins).toHaveLength(1);
    expect(plugins).toContain(miradorTemplatePlugin);
  });

  it('configures each plugin with a target and component', () => {
    plugins.forEach((plugin) => {
      expect(typeof plugin.target).toBe('string');
      expect(plugin.target.length).toBeGreaterThan(0);
      expect(plugin.component).toBeDefined();
    });
  });

  it('registers the template plugin against the window', () => {
    expect(miradorTemplatePlugin.target).toBe('Window');
    expect(miradorTemplatePlugin.mode).toBe('add');
    expect(typeof miradorTemplatePlugin.mapStateToProps).toBe('function');
  });
});
