(function () {
  const colors = {
    light: '#C1B496',
    audio: '#9885BF',
    knob: '#98AF6F',
    hub: '#989898',
    motion: '#7CA1BB',
    accent: '#0A8F7A',
    visual: '#C68E9E'
  };

  const ambientScene = {
    kind: 'ambient',
    caption: 'hub and stacked modules share one live topology',
    modules: [
      { id: 'light', label: 'Light', uid: 'LDR-41', color: colors.light, from: [-270, -145], to: [-100, -58], delay: 120 },
      { id: 'audio', label: 'Audio', uid: 'AUD-77', color: colors.audio, from: [270, -138], to: [100, -58], delay: 260 },
      { id: 'knob', label: 'Knob', uid: 'KNB-12', color: colors.knob, from: [240, 146], to: [0, 116], delay: 420 },
      { id: 'imu', label: 'IMU', uid: 'IMU-09', color: colors.motion, from: [-250, 152], to: [-100, 58], delay: 560 },
      { id: 'rgb', parent: 'imu', label: 'RGB', uid: 'LED-08', color: colors.visual, from: [-285, 190], to: [-100, 174], idleOrigin: [-100, 58], delay: 760, idleStep: 5 }
    ],
    edges: [
      { fromRef: 'hub', toRef: 'light', color: colors.light, delay: 760 },
      { fromRef: 'hub', toRef: 'audio', color: colors.audio, delay: 900 },
      { fromRef: 'hub', toRef: 'knob', color: colors.knob, delay: 1040 },
      { fromRef: 'hub', toRef: 'imu', color: colors.motion, delay: 1160 },
      { fromRef: 'imu', toRef: 'rgb', color: colors.visual, delay: 1360 }
    ],
    chips: [
      { label: 'live schema', sub: 'UID + channels', at: [-62, -156], delay: 980 },
      { label: 'stacked attach', sub: 'module-on-module', at: [80, 126], delay: 1460 }
    ]
  };

  function mountAmbientScenes() {
    if (!window.HexScene) return;
    document.querySelectorAll('[data-hexblocks-ambient]').forEach((target) => {
      if (target.dataset.hexblocksMounted === 'true') return;
      target.dataset.hexblocksMounted = 'true';
      fitAmbientStage(target);
      const scene = window.HexScene.mount(target, ambientScene);
      if (scene) window.requestAnimationFrame(() => scene.play());
      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(() => fitAmbientStage(target));
        resizeObserver.observe(target);
      } else {
        window.addEventListener('resize', () => fitAmbientStage(target));
      }
    });
  }

  function fitAmbientStage(target) {
    const scale = Math.min(1, target.clientWidth / 460);
    target.style.setProperty('--hexblocks-scale', String(scale));
    target.style.height = `${Math.round(490 * scale)}px`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAmbientScenes, { once: true });
  } else {
    mountAmbientScenes();
  }
})();
