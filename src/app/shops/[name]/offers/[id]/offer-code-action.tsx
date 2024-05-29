import styles from '@/styles/app/shops/[name]/offers/offer-code-table.module.scss';
import { Icon } from '@/components/common/icon';
import { Offers } from '@/api/api';
import { useContext, useState } from 'react';
import { Loader } from '@/components/common/loader';
import { CodeModel } from '@/types/offer-types';
import { useParams } from 'next/navigation';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { FormRefetchContext } from '@/contexts/form-refetch-context';

interface OfferCodeActionProps {
    code: CodeModel;
}

export function OfferCodeAction({ code }: OfferCodeActionProps) {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const { refetch } = useContext(FormRefetchContext);
    const { id } = useParams();

    const onEditCode = async () => {
        const isConfirmed = confirm('Would you like to change using state of this code?');

        if (isConfirmed) {
            const { changeCodeStateEnd } = Offers;

            setIsProceeding(true);

            try {
                const res = await changeCodeStateEnd(Number(id), code.code);

                toastSuccess(res);
                refetch();
            } catch (err: any) {
                toastError(err.message);
            } finally {
                setIsProceeding(false);
            }
        }
    };

    const onDeleteCode = async () => {
        const isConfirmed = confirm('Are you sure to delete this code?');

        if (isConfirmed) {
            const { deleteCodeEnd } = Offers;

            setIsProceeding(true);

            try {
                const res = await deleteCodeEnd(Number(id), code.code);

                toastSuccess(res);
                refetch();
            } catch (err: any) {
                toastError(err.message);
            } finally {
                setIsProceeding(false);
            }
        }
    };

    return (
        <td className={styles['actions']}>
            {isProceeding && <Loader isAbsolute={true} />}
            <Icon src={'/pages/edit.png'} size={32} onClick={onEditCode} />
            <Icon src={'/pages/delete.png'} size={32} onClick={onDeleteCode} />
        </td>
    );
}