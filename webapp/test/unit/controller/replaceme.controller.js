/*global QUnit*/

sap.ui.define([
	"replaceme/controller/replaceme.controller"
], function (Controller) {
	"use strict";

	QUnit.module("replaceme Controller");

	QUnit.test("I should test the replaceme controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
