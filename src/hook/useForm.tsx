import { addRequest, selectedRequest } from "@/features/Form";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useForm = () => {
    const dispatch = useAppDispatch();
    const { requests } = useAppSelector(selectedRequest);
    const [loading, setLoading] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [formData, setFormData] = useState({
        requester: "",
        title: "",
        description: "",
        type: "",
    });

    const [errors, setErrors] = useState({
        requester: false,
        title: false,
        description: false,
        type: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: false,
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            requester: formData.requester === "",
            title: formData.title === "",
            description: formData.description === "",
            type: formData.type === "",
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some((err) => err)) return;

        setLoading(true);

        dispatch(addRequest({ ...formData, id: requests.length + 1, status: '1' }));

        setFormData({ requester: "", title: "", description: "", type: "" });
        setTimeout(() => {
            setLoading(false);
            setToastOpen(true);
        }, 1500);
    };

    return {
        handleChange,
        handleSubmit,
        setToastOpen,
        formData,
        errors,
        toastOpen,
        loading,
    }
}