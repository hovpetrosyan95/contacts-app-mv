import { useEffect, useState } from 'react';
import { getRouteApi } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import {
    useQuery,
    useQueryClient,
    useMutation
} from '@tanstack/react-query';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { EditContact } from '../../components/EditContact';
import { API_URL } from '../../constants';

const route = getRouteApi('/contacts/$contactId');

export function ContactPage() {
    const { contactId } = route.useParams();
    const [isEdit, setIsEdit] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate({
        from: '/contacts/$contactId'
    });
    const queryClient = useQueryClient();
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const deleteContact = () => {
        deleteContactMutation();
    }

    const editContact = () => {
        setIsEdit(true);
    }

    useEffect(() => {
        // It's when contact is changed, form goes into edit/delete mode
        setIsEdit(false);
    }, [contactId]);

    const { data: contactData, isLoading } = useQuery({
        queryKey: ['contact', contactId],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/contacts/${contactId}`);
            return response.json();
        },
    });

    const { mutateAsync: deleteContactMutation } = useMutation({
        mutationFn: async () => fetch(`${API_URL}/contacts/${contactId}`, {
            method: 'DELETE'
        }),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
            navigate({
                to: '/contacts'
            });
        }
    });

    return <div>
        {!isEdit ? isLoading ? <div>Loading</div> : <div>
            <div className="flex w-1/2">
                <div className="w-2/6 bg-gray-200 p-4">Left Part</div>
                <div className="w-4/6  p-4">
                    <h2 className='text-3xl font-bold pb-4'> {contactData.name}</h2>
                    <div className='text-blue-500 pb-2'> {contactData.username}</div>
                    <div> {contactData.description}</div>
                    <div className='pt-8'>
                        <Button onClick={editContact} text='Edit' />
                        <Button onClick={openModal} text='Delete' type='reset' />
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <div className='text-center'>
                                <h2 className="text-xl font-semibold">Do you really want to delete <span className='text-red-500'>{contactData.name}</span> contact!</h2>
                                <Button text='Yes' type='reset' onClick={deleteContact} />
                                <Button text='No' onClick={closeModal} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div> : <EditContact contactData={contactData} />}
    </div >
}