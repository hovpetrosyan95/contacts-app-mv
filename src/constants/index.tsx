export const API_URL = 'http://localhost:3000';

export interface ContactProps {
    id?: 'string';
    name: 'string';
    username: 'string';
    description?: 'string';
    profilePicture: 'string';
}