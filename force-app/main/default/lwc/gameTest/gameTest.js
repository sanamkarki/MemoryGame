import { LightningElement, track } from "lwc";
import FONTS from "@salesforce/resourceUrl/fonts";
import { loadStyle } from "lightning/platformResourceLoader";
export default class GameTest extends LightningElement {
  disabledclick = false;
  libLoaded = false;
  clickCount = 0;
  remainingClicks = 3;
  clickValue1;
  clickValue2;
  iconCollection = [
    { id: 1, iconClass: "styleClass", type: "pencil", icon: "fa fa-pencil" },
    {
      id: 2,
      iconClass: "styleClass",
      type: "image",
      icon: "fa fa-image"
    },
    { id: 3, iconClass: "styleClass", type: "check", icon: "fa fa-check" },
    { id: 4, iconClass: "styleClass", type: "clone", icon: "fa fa-clone" },
    { id: 5, iconClass: "styleClass", type: "cube", icon: "fa fa-cube" },
    {
      id: 6,
      iconClass: "styleClass",
      type: "envelope",
      icon: "fa fa-envelope"
    },
    {
      id: 7,
      iconClass: "styleClass",
      type: "music",
      icon: "fa fa-music"
    },
    {
      id: 8,
      iconClass: "styleClass",
      type: "cloud",
      icon: "fa fa-cloud"
    },
    { id: 9, iconClass: "styleClass", type: "pencil", icon: "fa fa-pencil" },
    {
      id: 10,
      iconClass: "styleClass",
      type: "image",
      icon: "fa fa-image"
    },
    { id: 11, iconClass: "styleClass", type: "check", icon: "fa fa-check" },
    { id: 12, iconClass: "styleClass", type: "clone", icon: "fa fa-clone" },
    { id: 13, iconClass: "styleClass", type: "cube", icon: "fa fa-cube" },
    {
      id: 14,
      iconClass: "styleClass",
      type: "envelope",
      icon: "fa fa-envelope"
    },
    {
      id: 15,
      iconClass: "styleClass",
      type: "music",
      icon: "fa fa-music"
    },
    {
      id: 16,
      iconClass: "styleClass",
      type: "cloud",
      icon: "fa fa-cloud"
    }
  ];

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
  // start of click event on icons
  iconClick(event) {
    let iconElem = event.target;
    iconElem.classList.add("open", "show", "disabled");
    console.log("All class List", iconElem.classList);

    //   this.clickCount = this.clickCount + 1;
    //   console.log("Click Count", this.clickCount);
    //   if (this.clickCount % 2 == 0 && this.clickCount <= 6) {
    //     this.remainingClicks = this.remainingClicks - 1;
    //   }

    //   console.log("remaining clicks:", this.remainingClicks);
    //   console.log("clicked Event", event.target.id.split("-")[0]);
    //   if (this.disabledclick) {
    //     return;
    //   } else {
    //     if (this.clickValue1) {
    //       this.clickValue2 = event.target.id.split("-")[0];
    //     } else {
    //       this.clickValue1 = event.target.id.split("-")[0];
    //     }
    //     console.log("click1", this.clickValue1);
    //     console.log("click2", this.clickValue2);

    //     // working with the two click values now

    //     if (
    //       (this.clickValue1 == 1 && this.clickValue2 == 9) ||
    //       (this.clickValue1 == 9 && this.clickValue2 == 1)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 2 && this.clickValue2 == 10) ||
    //       (this.clickValue1 == 10 && this.clickValue2 == 2)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 3 && this.clickValue2 == 11) ||
    //       (this.clickValue1 == 11 && this.clickValue2 == 3)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 4 && this.clickValue2 == 12) ||
    //       (this.clickValue1 == 12 && this.clickValue2 == 4)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 5 && this.clickValue2 == 13) ||
    //       (this.clickValue1 == 13 && this.clickValue2 == 5)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 6 && this.clickValue2 == 14) ||
    //       (this.clickValue1 == 14 && this.clickValue2 == 6)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 7 && this.clickValue2 == 15) ||
    //       (this.clickValue1 == 15 && this.clickValue2 == 7)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     } else if (
    //       (this.clickValue1 == 8 && this.clickValue2 == 16) ||
    //       (this.clickValue1 == 16 && this.clickValue2 == 8)
    //     ) {
    //       console.log("Winner");
    //       this.disabledclick = true;
    //     }
    //   }
    // }
    // // working with referesh click button
    // refreshClick() {
    //   this.clickValue1 = null;
    //   this.clickValue2 = null;
    //   console.log(this.clickValue1, this.clickValue2);
    //   this.disabledclick = false;
    //   this.remainingClicks = 3;
    //   this.clickCount = 0;
    // }
  }
}
