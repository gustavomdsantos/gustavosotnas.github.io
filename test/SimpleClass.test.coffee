###
gustavosotnas\gustavosotnas.github.io

Licensed under the MIT license
For full copyright and license information, please see the LICENSE file

@author     Gustavo Moraes (https://gustavosotnas.github.io) <gustavosotnas1@gmail.com>
@copyright  2017 Gustavo Moraes (https://gustavosotnas.github.io)
@link       https://github.com/gustavosotnas/gustavosotnas.github.io
@license    http://choosealicense.com/licenses/MIT  MIT License
###

should = require 'should'
SimpleClass = require '../src/SimpleClass'

describe 'A SimpleClass suite', () ->

  # Pre-define some variables to be available within the whole suite
  simpleClass = undefined

  describe '#doNothing() method', () ->

    # Execute this before each test case
    beforeEach () ->
      simpleClass = new SimpleClass

    # A test case
    it 'should do nothing special', () ->
      returnValue = simpleClass.doNothing( 'a string' )

      returnValue.should.equal 'a string'
