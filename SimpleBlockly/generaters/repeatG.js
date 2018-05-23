'use strict';

goog.provide('Blockly.JavaScript.repeat_times');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['repeat_times'] = function(block) {
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_dowhat = Blockly.JavaScript.statementToCode(block, 'dowhat');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code+= 'for(var loopvar = 0; loopvar <' + value_times + ';loopvar++){\n' + statements_dowhat + '}\n'  
  return code;
};