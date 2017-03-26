# Acesso estático

class Pessoa
    getNome: () ->
        return "nome";
    
    @getIdade: () ->
        return 36

a = new Pessoa()
a.getNome()

Pessoa.getIdade()