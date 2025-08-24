import RequestForm from "@/components/Request";


const ApprovalRequest = async () => {
    const requestTypes = await fetchRequestTypes();

    return (
        <RequestForm types={requestTypes} />
    )
}
async function fetchRequestTypes() {
    return new Promise<{ id: number; name: string }[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Compra de insumos" },
                { id: 2, name: "Vacaciones" },
                { id: 3, name: "Reembolso de gastos" },
                { id: 4, name: "Contratación de personal" },
                { id: 5, name: "Capacitación" },
            ]);
        }, 500);
    });
}
export default ApprovalRequest;