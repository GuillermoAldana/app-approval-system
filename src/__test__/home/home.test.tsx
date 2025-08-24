import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '@/app/home';

// Mock del router
const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({ push: pushMock })),
}));

jest.mock('@/components/Request/Content/Status', () =>
    () => React.createElement('div', null, 'StatusCard')
);
jest.mock('@/components/Request/Content/Table', () =>
    () => React.createElement('div', null, 'TableRequest')
);

describe('<HomePage />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('Should be able to render correctly', () => {
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('Should be able to renders heading and description', () => {
        render(<HomePage />);
        expect(screen.getByText(/Sistema de Aprobación/i)).toBeInTheDocument();
        expect(
            screen.getByText(
                /Gestiona y supervisa todas las solicitudes de aprobación/i
            )
        ).toBeInTheDocument();
    });

    it('Should be able to renders StatusCard and TableRequest', () => {
        render(<HomePage />);
        expect(screen.getByText(/StatusCard/i)).toBeInTheDocument();
        expect(screen.getByText(/TableRequest/i)).toBeInTheDocument();
    });

    it('Should be able to navigates to /approvals when clicking the create button', () => {
        render(<HomePage />);
        const button = screen.getByText(/\+ Crear una nueva solicitud/i);
        fireEvent.click(button);
        expect(pushMock).toHaveBeenCalledWith('/approvals');
    });
});
