import { toast } from 'react-toastify';

export function toastSuccess(text: string): void {
    toast.success(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light'
    });
}

export function toastError(text: string): void {
    toast.error(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light'
    });
}

export function toastInfo(text: string): void {
    toast.info(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light'
    });
}

// https://fkhadra.github.io/react-toastify/introduction/