import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import Form from "../../components/Form";

export function AddContact() {
    // Access the client
    const queryClient = useQueryClient();

    // Mutations
    const { mutateAsync: createContactMutation } = useMutation({
        mutationFn: (data) => fetch('http://localhost:3000/contacts', {
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