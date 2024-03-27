import json

path = "pokedex.json"

with open(path, "r") as pokedex:
    data = json.load(pokedex)


def countPokemon():
    return len(data['pokemon'])

def givePokemonsByWeight(weight):
    rep = []
    for pokemon in data['pokemon']:
        if float(pokemon["weight"][0:-2]) >= weight :
            rep.append(pokemon)
    return rep

def classByWeight():
    return sorted(data['pokemon'], key=lambda pokemon: float(pokemon['weight'][0:-2]))
    
def getEvolutions(name):
    for pokemon in data['pokemon']:
        if pokemon['name'] == name :
            return pokemon['next_evolution']

