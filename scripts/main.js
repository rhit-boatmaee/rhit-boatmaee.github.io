/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Emily Hart, 2021
 */

/** namespace. */
var rhit = rhit || {};


rhit.PageController = class {
	constructor() {

		

		const button = document.querySelector("#supriseButton");
		const img = document.querySelector("#suprise")
			button.onclick = (event) => {
                
                img.classList.toggle("hidden");

			};
		}
		
	}
	

rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();
