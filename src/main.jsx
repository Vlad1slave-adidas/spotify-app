import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root.jsx'
import './index.css'
import MusicPlayer from './components/music_player/MusicPlayer.jsx'

const router = createBrowserRouter([
	{
		path: '*',
		element: <Root />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
			<MusicPlayer />
		</Provider>
	</React.StrictMode>,
)
