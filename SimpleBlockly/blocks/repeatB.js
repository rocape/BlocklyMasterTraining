'use strict';

goog.provide('Blockly.Blocks.repeat_times');  // Deprecated
goog.provide('Blockly.Constants.repeat_times');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['repeat_times'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("重复");
    this.appendValueInput("times")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
        .appendField("次");
    this.appendStatementInput("dowhat")
        .setCheck(null)
        .appendField("执行");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};