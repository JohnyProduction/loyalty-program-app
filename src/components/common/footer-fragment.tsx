export interface FooterFragmentProps {
    header: string;
    description: string | string[];
}

export function FooterFragment({ header, description }: FooterFragmentProps) {
    return (
        <div>
            <h3>{header}</h3>
            {
                Array.isArray(description) ?
                    <ul>{description.map(el => <li key={el}>{el}</li>)}</ul> :
                    <p>{description}</p>
            }
        </div>
    );
}