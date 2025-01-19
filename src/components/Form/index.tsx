import { useForm } from '@tanstack/react-form';
import FormInput from '../FormInput';
import FileUpload from '../FormInput/FileUpload';

import Button from '../Button';
import { contactSchema } from '../../utils/validation';

export default function Form({ initialData, onSubmitRequest, isUpdate = false }) {

    const form = useForm({
        defaultValues: initialData || {
            name: '',
            username: '',
            description: '',
            profilePicture: '',
        },
        validators: {
            onSubmit: contactSchema
        },
        onSubmit: async ({ value }) => {
            await onSubmitRequest(value);
            !isUpdate && form.reset();
        },
    });

    return (
        <form
            className="flex w-1/2 space-y-6"
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <div className="w-2/6 bg-gray-200 p-4">
                <form.Field
                    name='profilePicture' children={(field) => <FileUpload
                        field={field}
                        labelName="Profile Picture"
                        form={form}
                        isUpdate={isUpdate}
                    />}
                />
            </div>
            <div className="w-4/6  p-4">
                <form.Field
                    name='name'
                    children={(field) => <FormInput field={field} labelName='Name' />}
                />
                <form.Field
                    name='username'
                    children={(field) => <FormInput field={field} labelName='Username' />}
                />

                <form.Field
                    name='description'
                    children={(field) => <FormInput field={field} labelName='Description' />}
                />
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            disabled={!canSubmit}
                            text={isSubmitting ? '...' : isUpdate ? 'Save Changes' : 'Submit'}
                        />
                    )}
                />
            </div>
        </form>
    )
}