export const invoice_token_key = 'invoice_token';

type arrType = {
    [key: string]: string
}

const getCookieValue = (key: string) => {
    const arr: arrType = {};
    if (document.cookie != '') {
        const tmp = document.cookie.split('; ');
        for (let i = 0; i < tmp.length; i++) {
            const data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }
    if (key in arr) {
        return arr[key];
    }
    return '';
};

export const getInvoiceToken = (): string => {
    return getCookieValue(invoice_token_key);
};