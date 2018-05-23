'use strict';

goog.provide('Blockly.Blocks.print_me');  // Deprecated
goog.provide('Blockly.Constants.print_me');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['print_me'] = {
  init: function() {
    this.appendValueInput("print_test")
        .setCheck(null)
        .appendField("打印");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};