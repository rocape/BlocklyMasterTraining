'use strict';

goog.provide('Blockly.Python.repeat_times');

goog.require('Blockly.Python');

Blockly.Python['print_me'] = function(block) {
  var value_print_test = Blockly.Python.valueToCode(block, 'print_test', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_print_test + ')\n';
  return code;
};
