'use client'
import { useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './loading';

export default function Callback() {
  useEffect(() => {
    const getCodeAndExchangeTokens = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
      const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
      const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

      if (code !== null) {
        try {
          // Criação do objeto de parâmetros
          const params = new URLSearchParams();
          params.append('grant_type', 'authorization_code');
          params.append('code', code);
          params.append('redirect_uri', redirectUri || '');

          // Solicitação para obter o token de acesso
          const response = await axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
              Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });

          const { access_token, refresh_token } = response.data;
          // Salvar os tokens no localStorage ou em outro local seguro
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          // Redirecionar o usuário para a página desejada após a autenticação bem-sucedida
          window.location.href = '/home';
        } catch (error) {
          console.error(error);
          // Tratar erros de autenticação aqui
        }
      } else {
        // Tratar caso o código seja nulo
        console.error('Código não encontrado na URL');
      }
    };

    getCodeAndExchangeTokens();
  }, []);

  return (
    <LoadingSpinner />
  );
}
