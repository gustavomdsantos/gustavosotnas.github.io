(function() {
  var Pessoa, a;

  Pessoa = (function() {
    function Pessoa() {}

    Pessoa.prototype.getNome = function() {
      return "nome";
    };

    Pessoa.getIdade = function() {
      return 36;
    };

    return Pessoa;

  })();

  a = new Pessoa();

  a.getNome();

  Pessoa.getIdade();

}).call(this);
