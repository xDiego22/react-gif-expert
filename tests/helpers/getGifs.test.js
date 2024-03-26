import { getGifs } from "../../src/helpers/getGifs"

describe('prueba de getGifs()', () => {
    
    test('debe de retornar un arreglo de gif', async () => {
        const gifs = await getGifs('one punch');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
          id: expect.any(String),
          title: expect.any(String),
          url: expect.any(String),
        });
    });


     
});