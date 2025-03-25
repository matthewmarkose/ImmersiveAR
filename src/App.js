import React from "react";
import '@google/model-viewer';

const App = ()=> {



  const file = "/ammu.glb";
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <model-viewer
            ar
            camera-controls
            poster="/poster.jpg"
            ar-modes="scene-viewer quick-look webxr"
            src={file}
            ios-src={"/ammu.usdz"}
            style={{height: '90vh', width: '100%'}} //added width and max-width.
        >
        </model-viewer>
      </div>
  );

  /*
    let file =
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf';
    const browser_fallback_url = 'https://developers.google.com/ar';
    const packageApp = 'com.google.android.googlequicksearchbox';

    const intentUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${file}#Intent;scheme=https;package=${packageApp};action=android.intent.action.VIEW;S.browser_fallback_url=${browser_fallback_url};end;`;

    return <div>
      <a href={intentUrl}>View in AR</a>
    </div>;

  */
}

export default App;
