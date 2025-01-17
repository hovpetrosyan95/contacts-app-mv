import { useForm } from '@tanstack/react-form';
import { contactSchema } from '../../utils/validation';

export default function ContactForm() {

    const form = useForm({
        defaultValues: {
            name: '',
            username: '',
            description: '',
            profilePicture: ''
        },
        validators: {
            onSubmit: contactSchema
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        }
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
            <form
                className="space-y-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <div>
                    <form.Field
                        name='name'
                        children={(field) => (
                            <>
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">Name: </label>
                                <input
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {field.state.meta.errors ? (
                                    <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                ) : null}
                            </>
                        )}
                    />
                </div>
                <div>
                    <form.Field
                        name='username'
                        children={(field) => (
                            <>
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">Username: </label>
                                <input
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {field.state.meta.errors ? (
                                    <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                ) : null}
                            </>
                        )}
                    />
                </div>
                <div>
                    <form.Field
                        name='description'
                        children={(field) => (
                            <>
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">Description: </label>
                                <input
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {field.state.meta.errors ? (
                                    <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                ) : null}
                            </>
                        )}
                    />
                </div>
                <div>
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
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {field.state.meta.errors ? (
                                    <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                ) : null}
                            </>
                        )}
                    />
                </div>
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <button type="submit" disabled={!canSubmit} className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            {isSubmitting ? '...' : 'Submit'}
                        </button>
                    )}
                />
            </form>
        </div>
    )
}