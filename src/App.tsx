import '@/App.css'
import RootLayout from './layouts/root-layout'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Mods from '@/pages/mods'
import Songs from '@/pages/songs'
import Tools from '@/pages/tools'
import LoaderLogs from '@/pages/loader-logs'

function App() {
    return (
        <RootLayout>
            <main className="flex-1 flex-grow container min-h-0">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mods" element={<Mods />} />
                    <Route path="/songs" element={<Songs />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/tools/loader-logs" element={<LoaderLogs />} />
                </Routes>
            </main>
        </RootLayout>
    )
}

export default App
