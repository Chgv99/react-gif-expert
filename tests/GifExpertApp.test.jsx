import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 

    test('debe mostrar el título de la aplicación', () => { 

        render( <GifExpertApp/> );
        expect( screen.getByText('GifExpertApp') ).toBeTruthy();
    });

    /*test('debe mostrar el cuadro de búsqueda', () => { 

        render( <GifExpertApp/> );
        expect( screen.getByRole(in) ).toBeTruthy();
    });*/

    test('no debe mostrar categorías al inicializarse', () => { 
        
        const inputValue = 'One Punch';
        render( <GifExpertApp/> );
        expect( screen.queryAllByRole('heading', { level: 3 }).length ).toBe(0);
        //expect( screen.queryByText(inputValue) ).toBeFalsy();
    });
    
    test('debe mostrar la categoría al realizar una búsqueda', () => { 
        
        const inputValue = 'One Punch';

        render( <GifExpertApp/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getByText(inputValue) ).toBeTruthy();
        

        screen.debug();
    });
})