import "antd/dist/antd.css";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1F40JNok7v30ack-Nvw4fsVa6ZqW18Q",
  authDomain: "mysite00-abc.firebaseapp.com",
  projectId: "mysite00-abc",
  storageBucket: "mysite00-abc.appspot.com",
  messagingSenderId: "314724595602",
  appId: "1:314724595602:web:ece755ba5ec1355fa5734b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]), // 배열인 이유는 이후 나올 여러가지 다 연결시켜줘야하기 때문에
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
