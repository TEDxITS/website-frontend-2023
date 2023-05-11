/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { useAuthStore } from '@/store/useAuthStore';

import { localApi } from '@/utils/local-api';

export default function SandboxContainer() {
  const queryClient = useQueryClient();

  // Cara dapet email dari user yang sedang login
  const user = useAuthStore((state) => state.user);
  console.log(user);
  const userEmail = user?.email;

  // Cara melakukan GET request
  const merchQuery = useQuery({
    queryKey: ['merch', userEmail],
    queryFn: async () => {
      try {
        const { data } = await localApi.get(`/merch/cart/user/${userEmail}`);
        console.log(data);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  // Cara melakukan POST request
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const { data: response } = await localApi.post('/merch/cart', data);

      return response;
    },
    onSuccess: () => {
      toast.success('Kalo success mau tampilin apa');
      // Ngerefresh merchQuery biar isi cartnya keupdate
      queryClient.invalidateQueries({
        queryKey: ['merch', userEmail],
      });
    },
    onError: () => {
      toast.error('Kalo error mau tampilin apa');
    },
  });

  if (merchQuery.isLoading)
    return <div>Tampilin loading kalo get request lagi loading</div>;

  if (merchQuery.isError)
    return <div>Tampilin error kalo get request error</div>;

  return (
    <div>
      {/* Cara melakukan post request. Selain di tombol, fungsi mutate juga bisa dipanggil di mana aja. Parameternya diisi sama data yg 
      mmau dikirim */}
      <button
        onClick={() => {
          mutation.mutate({
            user_email: userEmail,
            merch_id: 1,
            quantity: 1,
          });
        }}
        // Ngedisabled button kalo post rqequst lagi loading
        disabled={mutation.isLoading}
      >
        Add to cart
      </button>
      {/* Tampilin data dari get request */}
      <div>{JSON.stringify(merchQuery.data)}</div>
    </div>
  );
}
