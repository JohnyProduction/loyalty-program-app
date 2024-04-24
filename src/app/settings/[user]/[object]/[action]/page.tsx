interface SettingsPageProps {
    params: Record<string, any>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    console.log(user, object, action);

    return (
        <>Settings</>
    );
}