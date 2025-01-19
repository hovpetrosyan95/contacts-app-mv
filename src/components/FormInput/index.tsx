import type { FieldApi } from '@tanstack/react-form';

interface FormInputProps {
    field: FieldApi<any, any, any, any>;
    labelName: string;
}

export default function FormInput({
    field,
    labelName
}: FormInputProps) {
    return (<>
        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{labelName}: </label>
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
    </>)
};