###
gustavosotnas\gustavosotnas.github.io

Licensed under the MIT license
For full copyright and license information, please see the LICENSE file

@author     Gustavo Moraes (https://gustavosotnas.github.io) <gustavosotnas1@gmail.com>
@copyright  2017 Gustavo Moraes (https://gustavosotnas.github.io)
@link       https://github.com/gustavosotnas/gustavosotnas.github.io
@license    http://choosealicense.com/licenses/MIT  MIT License
###

###
SimpleClass documentation

@since  0.1.0
###
class SimpleClass

  ###
  Do absolutely nothing and still return something

  @param    {string}    string      The string to be returned - untouched, of course
  @return   string
  @since    0.1.0
  ###
  doNothing: ( string ) ->

    # Really do nothing...
    return string


module.exports = SimpleClass
