import { useState } from "react";

export const useForm = () => {
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

        console.log("📩 Solicitud enviada:", formData);
        alert("Solicitud enviada correctamente 🚀");

        setFormData({ requester: "", title: "", description: "", type: "" });
    };

    return {
        handleChange,
        handleSubmit,
        formData,
        errors
    }
}