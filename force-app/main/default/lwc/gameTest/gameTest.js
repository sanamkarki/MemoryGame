import { LightningElement } from "lwc";
import FONTS from "@salesforce/resourceUrl/fonts";
import { loadStyle } from "lightning/platformResourceLoader";
export default class GameTest extends LightningElement {
  libLoaded = false;

  renderedCallback() {
    if (this.libLoaded) {
      return;
    } else {
      //loadstyle is a promise so use then
      loadStyle(this, FONTS + "/fontawesome/css/font-awesome.min.css")
        .then(() => {
          console.log("components loaded");
        })
        .catch(error => {
          console.error(error);
        });
      this.libLoaded = true;
    }
  }
}
