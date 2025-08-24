// src/__tests__/RequestForm.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import RequestForm from "@/components/Request/Form";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useRouter } from "next/navigation";
import { useForm } from "@/hook/useForm";


jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));


jest.mock("@/hook/useForm");

describe("<RequestForm />", () => {
    const mockPush = jest.fn();
    const mockSetToastOpen = jest.fn();
    const mockUseForm = {
        handleSubmit: jest.fn(),
        handleChange: jest.fn(),
        formData: { requester: '', title: '', description: '', type: '' },
        errors: {},
        loading: false,
        toastOpen: false,
        setToastOpen: jest.fn(),
    };
    beforeEach(() => {
        (useForm as jest.Mock).mockReturnValue(mockUseForm);
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    });



    const typesMock = [
        { id: 1, name: "Tipo A" },
        { id: 2, name: "Tipo B" },
    ];

    const renderComponent = () =>
        render(
            <Provider store={store}>
                <RequestForm types={typesMock} />
            </Provider>
        );

    it("Should be able to renders all form fields correctly", () => {
        renderComponent();
        expect(screen.getByText(/Solicitante/i)).toBeInTheDocument();
        expect(screen.getByText(/Título de la solicitud/i)).toBeInTheDocument();
        expect(screen.getByText(/Descripción/i)).toBeInTheDocument();
        expect(screen.getByText(/Tipo de solicitud/i)).toBeInTheDocument();
        expect(screen.getByText(/Volver a la Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Enviar solicitud/i)).toBeInTheDocument();
    });

    it("Should be able to renders skeleton when loading is true", () => {
        (useForm as jest.Mock).mockReturnValueOnce({
            handleSubmit: jest.fn(),
            handleChange: jest.fn(),
            formData: {},
            errors: {},
            loading: true,
            toastOpen: false,
            setToastOpen: mockSetToastOpen,
        });

        const { container } = renderComponent();
        expect(container.querySelector('.MuiSkeleton-root')).toBeInTheDocument();
    });

    it("Should be able to navigates to home when 'Volver a la Home' button clicked", () => {
        renderComponent();
        const button = screen.getByText(/Volver a la Home/i);
        fireEvent.click(button);
        expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("Should be able to shows toast when toastOpen is true", () => {
        (useForm as jest.Mock).mockReturnValueOnce({
            handleSubmit: jest.fn(),
            handleChange: jest.fn(),
            formData: {},
            errors: {},
            loading: false,
            toastOpen: true,
            setToastOpen: mockSetToastOpen,
        });

        renderComponent();
        expect(screen.getByText(/Su solicitud ha sido enviada para aprobación/i)).toBeInTheDocument();
    });

    it("Should be able to calls handleSubmit when 'Enviar solicitud' is clicked", () => {
        const handleSubmitMock = jest.fn((e) => e.preventDefault());
        (useForm as jest.Mock).mockReturnValueOnce({
            ...mockSetToastOpen,
            handleSubmit: handleSubmitMock,
            handleChange: jest.fn(),
            formData: { requester: "", title: "", description: "", type: "" },
            errors: {},
            loading: false,
            toastOpen: false,
            setToastOpen: mockSetToastOpen,
        });

        renderComponent();
        fireEvent.submit(screen.getByRole("button", { name: /Enviar solicitud/i }));
        expect(handleSubmitMock).toHaveBeenCalled();
    });
});