type UrlData = {
  url: string;
  short_url: string;
  userId?: string;
};

export const getUrl = async (data: string) => {
  const res = await fetch(`/api/short-url/get?short_url=${data}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};

export const createShortUrl = async (data: UrlData) => {
  const res = await fetch('/api/short-url/create', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};

export const deleteShortUrl = async (id: string) => {
  const res = await fetch('/api/short-url/delete', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};
