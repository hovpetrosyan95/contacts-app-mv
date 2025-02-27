import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import Form from "../../components/Form";
import { API_URL } from '../../constants';
import { ContactProps } from '../../constants';

interface EditContactProps {
    contactData: ContactProps;
}

export const EditContact: React.FC<EditContactProps> = ({ contactData }) => {
    // Access the client
    const queryClient = useQueryClient();

    // Mutations
    const { mutateAsync: updateContactMutation } = useMutation({
        mutationFn: (data) => fetch(`${API_URL}/contacts/${contactData.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['contact'] });
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });

    return <Form onSubmitRequest={updateContactMutation} initialData={contactData} isUpdate />
}
