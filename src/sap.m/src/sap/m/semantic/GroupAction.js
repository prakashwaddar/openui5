/*!
 * ${copyright}
 */

sap.ui.define(['sap/m/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	 * Constructor for a new GroupAction.
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] custom initial settings for the new control
	 *
	 * @class
	 * A multiSelect button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * @extends sap.m.semantic.SemanticButton
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.GroupAction
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */

	var GroupAction = SemanticButton.extend("sap.m.semantic.GroupAction", /** @lends sap.m.semantic.GroupAction.prototype */ {
		metadata: {
			library : "sap.m",
			interfaces : [
				"sap.m.semantic.IGroup"
			]
		}
	});

	return GroupAction;

}, /* bExport= */ true);