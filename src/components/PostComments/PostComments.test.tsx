import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir adicionar dois comentários', () => {
    render(<PostComment />)

    const input = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-enviar')

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(botao)

    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(botao)

    const lista = screen.getByTestId('lista-comentarios')

    expect(lista).toHaveTextContent('Primeiro comentário')
    expect(lista).toHaveTextContent('Segundo comentário')
    });
});