﻿import Accessor = require("esri/core/Accessor");
import SceneView = require("esri/views/SceneView");
import { Device, Trail } from "./types";
import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

@subclass()
export default class State extends declared(Accessor) {

  @property()
  selectedTrailId: number = null;
  setSelectedTrailId(id: number) {
    this.selectedTrailId = id;
  }

  @property()
  device: Device = null;

  @property()
  currentBasemapId: string = null;

  @property()
  view: SceneView = null;

  @property()
  trails: Array<Trail> = null

  @property()
  online: boolean = true;
}
