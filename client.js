import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  introPanel = new Surface(
    500,
    400,
    Surface.SurfaceShape.Cylinder
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('TourismAppVR', {}),
    introPanel
  );

  marketPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  marketPanel.setAngle(
    0.2,
    0
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  museumPanel.setAngle(
    Math.PI / 2,
    0
  );

  restaurantPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  restaurantPanel.setAngle(
    -Math.PI / 2,
    0
  );

  shoppingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  shoppingPanel.setAngle(
    3.6,
    0
  );

  r360.renderToSurface(
    r360.createRoot('InfoPanel', {}),
    marketPanel
  )

  r360.renderToSurface(
    r360.createRoot('InfoPanel', {}),
    shoppingPanel
  )

  r360.renderToSurface(
    r360.createRoot('InfoPanel', {}),
    restaurantPanel
  )

  r360.compositor.setBackground(r360.getAssetURL('gdansk.jpg'));
}

window.React360 = {init};
