import components from "./web-components";
import App from "./main";

let rendering = false;

// declare global {
//   interface Window {
//     readonly customElements: CustomElementRegistry;
//   }

//   interface CustomElementRegistry {
//     define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
//     get(name: string): any;
//     whenDefined(name: string): Promise<void>;
//   }

//   interface ElementDefinitionOptions {
//     extends: string;
//   }
// }

class GlimmerWebComponent extends HTMLElement {
  connectedCallback() {
    if (rendering) { return; }

    let app = new App({
      rootElement: this
    });

    rendering = true;
    app.boot();
    rendering = false;
    console.log("MOUNTED: " + this.tagName);
  }
}

components.forEach(component => {
  if (component.indexOf('-') > -1) {
    window.customElements.define(component, GlimmerWebComponent);
  }
});