import { useForm } from '@tanstack/react-form';
import FormInput from '../FormInput';
import Button from '../Button';
import { contactSchema } from '../../utils/validation';

export default function Form({ initialData, onSubmitRequest, isUpdate = false }) {

    const form = useForm({
        defaultValues: initialData || {
            name: '',
            username: '',
            description: '',
        },
        validators: {
            onSubmit: contactSchema
        },
        onSubmit: async ({ value }) => {
            await onSubmitRequest(value);
            !isUpdate && form.reset();
        }
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
            <div className="w-2/6 bg-gray-200 p-4">Left Part</div>
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

            {/* <div>
                    <form.Field
                        name='profilePicture'
                        children={(field) => (
                            <>
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">Profile Picture: </label>
                                <input
                                    type='file'
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-white file:text-sm file:font-semibold file:text-indigo-600 hover:file:bg-indigo-100"
                                />
                                {field.state.meta.errors ? (
                                    <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                ) : null}
                                {field.state.value && (
                                    <div className="mt-4 w-24 h-24 overflow-hidden rounded-full border border-gray-300">
                                        <img src={field.state.value} alt="Image Preview" className="w-full h-full object-cover" />
                                    </div>)}
                                <></>
                            </>
                        )}
                    />
                </div> */}

        </form>
    )
}