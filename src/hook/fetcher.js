export const fetcher = (url) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'access-control-allow-credentials': `${process.env.API_KEY}`,
        },
    }).then((res) => res.json());
