import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'd45971fc3fmshaf46c929cb70dfep1e390bjsn53b0ea515b9c',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/coindesk?q=${newsCategory}&count=${count}`),
    }),
  }),
  // Log events for queries
  onStart: (arg) => console.log('Query Start:', arg),
  onSuccess: (arg) => console.log('Query Success:', arg),
  onFetchStart: (arg) => console.log('Fetch Start:', arg),
  onFetchEnd: (arg) => console.log('Fetch End:', arg),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

