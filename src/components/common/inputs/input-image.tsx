'use client';

interface InputImageProps {
    label: string;
    name: string;
    width?: string;
    image: File | null;
    onChange: (event: any) => void;
}

export function InputImage({ label, name, width = '100%', image, onChange }: InputImageProps) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label><br />
            <input type="file" accept="image/*" onChange={onChange} />
            {image && (
                <div>
                    <img src={URL.createObjectURL(image)} alt="Wybrany obraz"
                        style={{ width }} />
                </div>
            )}
        </div>
    );
}