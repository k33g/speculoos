### this is coffeescript ###
class SuperHero extends Human
  constructor:(name)->
    super name

  sayHello:->
    super
    console.log "And i'm a superhero : #{@getNickName()}"

superMan = new SuperHero 'Clark Kent'

superMan.setNickName "Super Man"

console.log superMan, superMan.toString()
superMan.sayHello()