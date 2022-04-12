import "antd/dist/antd.css";
// import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCo1F40JNok7v30ack-Nvw4fsVa6ZqW18Q",
  authDomain: "mysite00-abc.firebaseapp.com",
  projectId: "mysite00-abc",
  storageBucket: "mysite00-abc.appspot.com",
  messagingSenderId: "314724595602",
  appId: "1:314724595602:web:ece755ba5ec1355fa5734b",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
