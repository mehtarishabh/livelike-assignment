import axios from '@/config/axios'
import API_CONFIG from '@/config/apiConfig'

export const fetchProducts = () => {
    const res = axios.get(API_CONFIG.products.getProducts);
    return res;
}