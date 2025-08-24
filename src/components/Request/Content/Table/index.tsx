import { ColumnsTableHome } from "@/constants/columnsTable";
import { STATUS_LIST } from "@/constants/status";
import { selectedRequest } from "@/features/Form"
import { selectedRequestTypes } from "@/features/RequestType";
import { useAppSelector } from "@/store/hook"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid";

const TableRequest = () => {
    const { requests } = useAppSelector(selectedRequest);
    const { data } = useAppSelector(selectedRequestTypes);
    const requestExpanded = requests.map((r) => {
        const searchType = data.find((e) => e.id === Number(r.type));
        const statusType = STATUS_LIST.find((s) => s.id === r.status);

        return {
            ...r,
            type: searchType?.name,
            status: statusType?.name
        }
    })
    return (
        <Box sx={{ height: 400, width: "100%", mt: 2 }}>
            <DataGrid
                rows={requestExpanded}
                columns={ColumnsTableHome}
                pageSizeOptions={[5]}
                initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
                localeText={{
                    noRowsLabel: "No hay solicitudes disponibles",
                }}
            />
        </Box>
    )
}
export default TableRequest;