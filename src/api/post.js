import { JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '../constatns/url';
import { fetchHelper } from '../util/api';

export async function getPost() {
    try {
        const data = await fetchHelper({
            baseURL: BASE_URL,
            url: '/posts',
        });

        return data;
    } catch (e) {
        alert('post 조회 실패');
    }
}