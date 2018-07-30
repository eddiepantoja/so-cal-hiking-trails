/* entry point for the application */

import "../style/style.scss";

import esriConfig = require("esri/config");
esriConfig.request.useIdentity = false;

import State from "./State";
import deviceUtils from "./ui/deviceUtils";
import SceneElement from "./scene/SceneElement";
import trailManager from "./data/trailManager";
import MenuPanel from "./ui/MenuPanel";

const state = new State();

// Init Trail and create menu
const sceneElement = new SceneElement(state);
trailManager.initTrails(state)
  .then(() => {
    const menuPanel = new MenuPanel(state);
  });
