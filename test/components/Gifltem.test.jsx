import { render, screen } from "@testing-library/react"
import { Gifltem } from "../../src/components/Gifltem"

describe('probando <Gifltem/>', () => {

    const title = 'Saitama';
    const url = 'htpps://one-punch.com//Saitama.jpg';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<Gifltem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });


    test('Debe de mostrar la imagen con el url y el alt indicado', () => {

        render(<Gifltem title={title} url={url} />)
        // screen.debug();
        // expect ( screen.getByRole('img').src).toBe(url);
        // expect ( screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('Debe de mostart el titulo en el componente', () => {

        render(<Gifltem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })



});