import { fileToBase64, isImage } from '../../utils/fileToBase64';

interface FileUploadProps {
    field: any;
    labelName: string;
    form: any;
    isUpdate: boolean;
}

export default function FileUpload({
    field,
    labelName,
    form,
    isUpdate
}: FileUploadProps) {

    return (<div className="flex flex-col items-center space-y-4">
        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{labelName}: </label>
        <div className="relative w-32 h-32 bg-gray-100 rounded-full overflow-hidden border border-gray-300">
            {field.state.value ? (
                <img
                    src={field.state.value}
                    alt="Selected"
                    className="w-full h-full object-fill"
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400">
                    No Image
                </div>
            )}
        </div>
        <input
            type='file'
            name={field.name}
            defaultValue={isUpdate ? '' : field.state.value}
            onBlur={field.handleBlur}
            onChange={async (e) => {
                const file = e.target.files[0];
                if (isImage(file)) {
                    const imageBase64 = await fileToBase64(file);
                    form.setFieldValue('profilePicture', imageBase64);
                }
            }}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {field.state.meta.errors ? (
            <p role="alert" className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
        ) : null}
    </div>)
};