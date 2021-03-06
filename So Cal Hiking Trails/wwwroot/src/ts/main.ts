/* entry point for the application */
import "../style/style.scss";

import esriConfig = require("esri/config");
esriConfig.request.useIdentity = false;

import State from "./State";
import SceneElement from "./scene/SceneElement";
import trailManager from "./data/trailManager";
import MenuPanel from "./ui/MenuPanel";

// Init state
const state = new State();

// Create scene with state proprties
const sceneElement = new SceneElement(state);

// Init Trail and create menu
trailManager.initTrails(state)
  .then(() => {
    const menuPanel = new MenuPanel(state);
  });
