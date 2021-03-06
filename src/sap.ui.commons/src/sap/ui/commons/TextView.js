/*!
 * ${copyright}
 */

// Provides control sap.ui.commons.TextView.
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Control', 'sap/ui/core/Popup'],
	function(jQuery, library, Control, Popup) {
	"use strict";


	
	/**
	 * Constructor for a new TextView.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Is used to display some continous text. The control can inherit the text direction from its parent control.
	 * @extends sap.ui.core.Control
	 * @implements sap.ui.commons.ToolbarItem
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias sap.ui.commons.TextView
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var TextView = Control.extend("sap.ui.commons.TextView", /** @lends sap.ui.commons.TextView.prototype */ { metadata : {
	
		interfaces : [
			"sap.ui.commons.ToolbarItem"
		],
		library : "sap.ui.commons",
		properties : {
	
			/**
			 * Text to be displayed.
			 */
			text : {type : "string", defaultValue : '', bindable : "bindable"},
	
			/**
			 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
			 */
			textDirection : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
	
			/**
			 * When the control is disabled, it is greyed out and no longer focusable.
			 */
			enabled : {type : "boolean", group : "Behavior", defaultValue : true},
	
			/**
			 * Unique identifier used for help services.
			 */
			helpId : {type : "string", group : "Behavior", defaultValue : ''},
	
			/**
			 * The ARIA role for the control.
			 */
			accessibleRole : {type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Document},
	
			/**
			 * Defines the visual appearance of the control.
			 */
			design : {type : "sap.ui.commons.TextViewDesign", group : "Data", defaultValue : sap.ui.commons.TextViewDesign.Standard},
	
			/**
			 * Disabled automatic wrapping of the text.
			 */
			wrapping : {type : "boolean", group : "Appearance", defaultValue : true},
	
			/**
			 * Semantic color of the text View
			 */
			semanticColor : {type : "sap.ui.commons.TextViewColor", group : "Appearance", defaultValue : sap.ui.commons.TextViewColor.Default},
	
			/**
			 * Sets the horizontal alignment of the text.
			 */
			textAlign : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
	
			/**
			 * Width of the TextView
			 */
			width : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
		},
		associations : {
	
			/**
			 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
			 */
			ariaDescribedBy : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
	
			/**
			 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
			 */
			ariaLabelledBy : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
		}
	}});
	
	
	/*
	 * @see JSDoc generated by SAPUI5 Control API generator
	 */
	TextView.prototype.setText = function(sText) {
		this.setProperty("text", sText, true); // no re-rendering!
		var oDomRef = this.getDomRef();
		if (oDomRef) {
			// in case of 
			sText = this.getText(); // the default value '' ensures valid text string
			oDomRef.innerHTML = jQuery.sap.encodeHTML(sText).replace(/&#xa;/g, "<br>");
			// when no tooltip is applied use the text as tooltip
			if (!this.getTooltip_AsString()) {
				oDomRef.title = sText; // IE8 doesn't like HTML encoded attribute values
			}
		}
		if (this._oPopup) {
			this._oPopup.destroy();
			delete this._oPopup;
		}
		return this;
	};
	
	TextView.prototype.exit = function() {
		if (this._oPopup) {
			this._oPopup.destroy();
			delete this._oPopup;
		}
	};
	/*
	sap.ui.commons.TextView.prototype.onBeforeRendering = function() {
		if (this._oPopup) {
			this._oPopup.destroy();
			delete this._oPopup;
		}
	};
	
	sap.ui.commons.TextView.prototype.onmouseover = function(oEvent) {
		var oRef = this.getDomRef();
		if (Math.abs(oRef.clientWidth - oRef.scrollWidth) < 2){
			return;
		}
	
		if (!this._oPopup) {
			 this._oPopup = new sap.ui.core.Popup();
			 this._oPopup.setDurations(0, 0); // no animations
			 this._oPopup.setContent(this._createInfo());
			 this._oPopup.attachOpened(this._handleOpened, this);
		}
	
		var eDock = sap.ui.core.Popup.Dock;
		this._oPopup.open(0, eDock.BeginTop, eDock.BeginTop, this, "0 1", "fit", true);
	};
	
	sap.ui.commons.TextView.prototype._createInfo = function(){
		var $Me   = jQuery(this.getDomRef());
		var sText = $Me.html();
		var sHtml = "<span id='" + this.getId()+'-info' + "' class='sapUiTvInfo " + $Me.attr("class") + "'>" + sText + "</span>";
	
		var oDomRef = jQuery(sHtml).appendTo(sap.ui.getCore().getStaticAreaRef());
		var that = this;
		jQuery(oDomRef).mouseout([this.getId()], function(oEvent){
			that._oPopup.close();
		});
		return oDomRef;
	};
	
	sap.ui.commons.TextView.prototype._handleOpened = function(){
		var that = this;
		jQuery.sap.byId(this.getId()+'-info').mouseout([this.getId()], function(oEvent){
			that._oPopup.close();
		});
	};*/

	return TextView;

}, /* bExport= */ true);
