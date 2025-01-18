import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import Form from "../../components/Form";
import { API_URL } from '../../constants';

export function AddContact() {
    // Access the client
    const queryClient = useQueryClient();

    // Mutations
    const { mutateAsync: createContactMutation } = useMutation({
        mutationFn: (data) => fetch(`${API_URL}/contacts`, {
            method: 'POST',
            body: JSON.stringify(data)
        }),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['contacts'] })
        },
    })

    return <Form onSubmitRequest={createContactMutation} />
}