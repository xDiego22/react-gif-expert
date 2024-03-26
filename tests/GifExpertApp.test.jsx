import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('prueba en componente <GifExpertApp/>', () => {

    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })
    
    test('debe mostra el titulo GifExpertApp', () => { 

        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();

     })
});