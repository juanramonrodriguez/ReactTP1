import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './assets/Component/Styles/GlobalStyles.js'

import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"
import { persistor, store } from './assets/redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate persistor={persistor}>
       <GlobalStyles/>
        <App />
    </PersistGate>
   </Provider>
     
  </React.StrictMode>,
)
