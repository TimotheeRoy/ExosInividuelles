const {tryWord} = require('./exo10')

test('', ()=>{
    const base = 'dictionnaire';

    // si le mot est le bon
    const result1 = tryWord(base , base)
    expect(result1.wellPlaced.length).toBe(base.length)
    expect(result1.missplaced.length).toBe(0)
    expect(result1.notInWord.length).toBe(0)

    // si le mot n'est pas le bon
    const result2 = tryWord('test', base)
    expect(result1.wellPlaced.length).toBe(1)
    expect(result1.missplaced.length).toBe(2)
    expect(result1.notInWord.length).toBe(1)
})

