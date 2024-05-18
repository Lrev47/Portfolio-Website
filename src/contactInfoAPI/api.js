import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://backend-for-contact-component.onrender.com/api/";

export const ContactInfoAPI = createApi({
  reducerPath: "ContactInfoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (message) => ({
        url: "/messages",
        method: "POST",
        body: message,
      }),
    }),
  }),
});

export const { useCreateMessageMutation } = ContactInfoAPI;
