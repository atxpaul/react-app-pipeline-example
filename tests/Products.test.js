import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Products from '../src/components/Products';

// Mock de fetch para simular una respuesta de API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: 1,
                    title: 'Test Product',
                    price: 19.99,
                    image: 'https://via.placeholder.com/150',
                },
            ]),
    })
);

test('renders input and buttons', () => {
    render(<Products />);

    const inputElement = screen.getByPlaceholderText(/enter product id/i);
    const fetchButton = screen.getByText(/fetch products/i);
    const clearButton = screen.getByText(/clear/i);

    // Verificar que los elementos se rendericen correctamente
    expect(inputElement).toBeInTheDocument();
    expect(fetchButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
});

test('fetches and displays products', async () => {
    render(<Products />);

    // Simular clic en el botón de fetch
    const fetchButton = screen.getByText(/fetch products/i);
    fireEvent.click(fetchButton);

    // Verificar que el producto se muestra después de hacer el fetch
    const productTitle = await screen.findByText('Test Product');
    expect(productTitle).toBeInTheDocument();

    const productPrice = screen.getByText('$19.99');
    expect(productPrice).toBeInTheDocument();
});

test('clears products when the clear button is clicked', async () => {
    render(<Products />);

    // Simular clic en el botón de fetch para llenar productos
    const fetchButton = screen.getByText(/fetch products/i);
    fireEvent.click(fetchButton);

    // Esperar a que el producto se muestre
    const productTitle = await screen.findByText('Test Product');
    expect(productTitle).toBeInTheDocument();

    // Simular clic en el botón de clear
    const clearButton = screen.getByText(/clear/i);
    fireEvent.click(clearButton);

    // Verificar que los productos han sido limpiados
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument();
});
